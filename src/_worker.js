import CommonUtils from './utils/CommonUtils';

import AppParam from './core/AppParam';
import SubUtils from './utils/SubUtils';
import SubService from './core/SubService';


if (!CommonUtils.isValidUUID(AppParam.userID)) {
    throw new Error('uuid is not valid');
}

export default {
    /**
     * @param {import('@cloudflare/workers-types').Request} request
     * @param {{UUID: string, PROXYIP: string}} env
     * @param {import('@cloudflare/workers-types').ExecutionContext} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env) {
        try {
            console.log(1)
            const {UA, userAgent, upgradeHeader, url} = await initParam(request, env);
            let pathName = url.pathname.toLowerCase();
            if (!upgradeHeader || upgradeHeader !== 'websocket') {
                //处理https请求
                return await router(pathName, env, request, url, UA, userAgent);
            } else {
                initProxyIp(url, pathName);
                initSocks5Address(url);
                //处理流量转发
                return await vlessOverWSHandler(request);
                // return await SubService.vlessOverWSHandler(request);
            }
        } catch (err) {
            /** @type {Error} */
            let e = err;
            return new Response(e.toString());
        }
    }
};


/**
 * 路由
 * @param pathName
 * @param env
 * @param request
 * @param url
 * @param UA
 * @param userAgent
 * @returns {Promise<Response>}
 */
async function router(pathName, env, request, url, UA, userAgent) {
    switch (pathName) {
        case '/':
            return await index(env, request);

        case `/${AppParam.fakeUserID}`:
            const fakeConfig = await SubUtils.getVLESSConfig(AppParam.userID, request.headers.get('Host'), AppParam.sub, 'CF-Workers-SUB', AppParam.RproxyIP, url, request);
            return new Response(`${fakeConfig}`, {status: 200});

        case `/${AppParam.userID}`:
            return await getSubInfo(request, UA, url, env, userAgent);

        default:
            return new Response('Not found', {status: 404});
    }
}

/**
 * 首页
 * @param env
 * @param request
 */
async function index(env, request) {
    const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
    if (envKey) {
        const URLs = await CommonUtils.ADD(env[envKey]);
        const URL = URLs[Math.floor(Math.random() * URLs.length)];
        return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
    }
    return new Response(JSON.stringify(request.cf, null, 4), {status: 200});
}


/**
 * 初始化参数
 * @param request
 * @param env
 */
async function initParam(request, env) {
    const UA = request.headers.get('User-Agent') || 'null';
    const userAgent = UA.toLowerCase();
    AppParam.userID = (env.UUID || AppParam.userID).toLowerCase();
    AppParam.proxyIpMap['us'] = env.US_PROXYIP || AppParam.proxyIpMap['us'];
    AppParam.proxyIpMap['jp'] = env.JP_PROXYIP || AppParam.proxyIpMap['jp'];
    AppParam.proxyIpMap['hk'] = env.HK_PROXYIP || AppParam.proxyIpMap['hk'];
    AppParam.proxyIpMap['kr'] = env.KR_PROXYIP || AppParam.proxyIpMap['kr'];

    const url = new URL(request.url);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const timestamp = Math.ceil(currentDate.getTime() / 1000);
    const fakeUserIDMD5 = await CommonUtils.MD5MD5(`${AppParam.userID}${timestamp}`);
    AppParam.fakeUserID = fakeUserIDMD5.slice(0, 8) + '-' + fakeUserIDMD5.slice(8, 12) + '-' + fakeUserIDMD5.slice(12, 16) + '-' + fakeUserIDMD5.slice(16, 20) + '-' + fakeUserIDMD5.slice(20);
    AppParam.fakeHostName = fakeUserIDMD5.slice(6, 9) + '.' + fakeUserIDMD5.slice(13, 19);
    //console.log(`虚假UUID: ${fakeUserID}`); // 打印fakeID

    AppParam.proxyIP = env.PROXYIP || AppParam.proxyIP;
    AppParam.proxyIPs = await CommonUtils.ADD(AppParam.proxyIP);
    AppParam.proxyIP = AppParam.proxyIPs[Math.floor(Math.random() * AppParam.proxyIPs.length)];
    //console.log(proxyIP);
    AppParam.socks5Address = env.SOCKS5 || AppParam.socks5Address;
    AppParam.socks5s = await CommonUtils.ADD(AppParam.socks5Address);
    AppParam.socks5Address = AppParam.socks5s[Math.floor(Math.random() * AppParam.socks5s.length)];
    AppParam.socks5Address = AppParam.socks5Address.split('//')[1] || AppParam.socks5Address;

    AppParam.sub = env.SUB || AppParam.sub;
    AppParam.subconverter = env.SUBAPI || AppParam.subconverter;
    let cIndex = url.searchParams.get('cIndex');
    AppParam.subconverter = AppParam.subconverters[cIndex] || env.SUBAPI || AppParam.subconverters[0]
    if (AppParam.subconverter.includes('http://')) {
        AppParam.subconverter = AppParam.subconverter.split('//')[1];
        AppParam.subProtocol = 'http';
    } else {
        AppParam.subconverter = AppParam.subconverter.split('//')[1] || AppParam.subconverter;
    }
    AppParam.subconfig = env.SUBCONFIG || AppParam.subconfig;
    if (AppParam.socks5Address) {
        try {
            AppParam.parsedSocks5Address = CommonUtils.socks5AddressParser(AppParam.socks5Address);
            AppParam.RproxyIP = env.RPROXYIP || 'false';
            AppParam.enableSocks = true;
        } catch (err) {
            /** @type {Error} */
            let e = err;
            // @ts-ignore
            console.log(e.toString());
            AppParam.RproxyIP = env.RPROXYIP || !AppParam.proxyIP ? 'true' : 'false';
            AppParam.enableSocks = false;
        }
    } else {
        AppParam.RproxyIP = env.RPROXYIP || !AppParam.proxyIP ? 'true' : 'false';
    }
    if (env.ADD) AppParam.addresses = await CommonUtils.ADD(env.ADD);
    if (env.ADDAPI) AppParam.addressesapi = await CommonUtils.ADD(env.ADDAPI);
    if (env.ADDNOTLS) AppParam.addressesnotls = await CommonUtils.ADD(env.ADDNOTLS);
    if (env.ADDNOTLSAPI) AppParam.addressesnotlsapi = await CommonUtils.ADD(env.ADDNOTLSAPI);
    if (env.ADDCSV) AppParam.addressescsv = await CommonUtils.ADD(env.ADDCSV);
    AppParam.DLS = env.DLS || AppParam.DLS;
    AppParam.BotToken = env.TGTOKEN || AppParam.BotToken;
    AppParam.ChatID = env.TGID || AppParam.ChatID;
    if (env.GO2SOCKS5) AppParam.go2Socks5s = await CommonUtils.ADD(env.GO2SOCKS5);
    const upgradeHeader = request.headers.get('Upgrade');
    if (url.searchParams.has('sub') && url.searchParams.get('sub') !== '') AppParam.sub = url.searchParams.get('sub');
    AppParam.FileName = env.SUBNAME || AppParam.FileName;
    if (url.searchParams.has('notls')) AppParam.noTLS = 'true';
    return {UA, userAgent, upgradeHeader, url};
}

/**
 * 初始化Url里面的proxyIp
 * @param url
 * @param pathName
 */
function initProxyIp(url, pathName) {
    let proxyip = url.searchParams.get('proxyip');
    if (proxyip) {
        AppParam.proxyIP = proxyip;
    } else {
        let hostName = url.hostname.toLowerCase();
        let domain = hostName.substring(0, hostName.indexOf("."));
        let proxyIp = AppParam.proxyIpMap[domain];
        AppParam.proxyIP = proxyIp || AppParam.proxyIP;
    }

    if (new RegExp('/proxyip=', 'i').test(url.pathname)) {
        AppParam.proxyIP = pathName.split('/proxyip=')[1];
    } else if (new RegExp('/proxyip.', 'i').test(url.pathname)) {
        AppParam.proxyIP = `proxyip.${pathName.split('/proxyip.')[1]}`;
    }
}

function initSocks5Address(url) {
    AppParam.socks5Address = url.searchParams.get('socks5') || AppParam.socks5Address;
    if (new RegExp('/socks5=', 'i').test(url.pathname)) {
        AppParam.socks5Address = url.pathname.split('5=')[1];
    } else if (new RegExp('/socks://', 'i').test(url.pathname) || new RegExp('/socks5://', 'i').test(url.pathname)) {
        AppParam.socks5Address = url.pathname.split('://')[1].split('#')[0];
        if (AppParam.socks5Address.includes('@')) {
            let userPassword = AppParam.socks5Address.split('@')[0];
            const base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
            if (base64Regex.test(userPassword) && !userPassword.includes(':')) userPassword = atob(userPassword);
            AppParam.socks5Address = `${userPassword}@${AppParam.socks5Address.split('@')[1]}`;
        }
    }
    if (AppParam.socks5Address) {
        try {
            AppParam.parsedSocks5Address = CommonUtils.socks5AddressParser(AppParam.socks5Address);
            AppParam.enableSocks = true;
        } catch (err) {
            /** @type {Error} */
            let e = err;
            // @ts-ignore
            console.log(e.toString());
            AppParam.enableSocks = false;
        }
    } else {
        AppParam.enableSocks = false;
    }
}

/**
 * 获取订阅内容
 * @param request
 * @param UA
 * @param url
 * @param env
 * @param userAgent
 */
async function getSubInfo(request, UA, url, env, userAgent) {
    await SubService.sendMessage(`#获取订阅 ${AppParam.FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${UA}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
    const vlessConfig = await SubUtils.getVLESSConfig(AppParam.userID, request.headers.get('Host'), AppParam.sub, UA, AppParam.RproxyIP, url, request);
    const now = Date.now();
    //const timestamp = Math.floor(now / 1000);
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const UD = Math.floor(((now - today.getTime()) / 86400000) * 24 * 1099511627776 / 2);
    let pagesSum = UD;
    let workersSum = UD;
    let total = 24 * 1099511627776;
    if (env.CFEMAIL && env.CFKEY) {
        const email = env.CFEMAIL;
        const key = env.CFKEY;
        const accountIndex = env.CFID || 0;
        const accountId = await SubUtils.getAccountId(email, key);
        if (accountId) {
            const now = new Date()
            now.setUTCHours(0, 0, 0, 0)
            const startDate = now.toISOString()
            const endDate = new Date().toISOString();
            const Sum = await SubUtils.getSum(accountId, accountIndex, email, key, startDate, endDate);
            pagesSum = Sum[0];
            workersSum = Sum[1];
            total = 102400;
        }
    }
    //console.log(`pagesSum: ${pagesSum}\nworkersSum: ${workersSum}\ntotal: ${total}`);
    if (userAgent && userAgent.includes('mozilla')) {
        return new Response(`${vlessConfig}`, {
            status: 200,
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
                "Profile-Update-Interval": "6",
                "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${AppParam.expire}`,
            }
        });
    } else {
        return new Response(`${vlessConfig}`, {
            status: 200,
            headers: {
                "Content-Disposition": `attachment; filename=${AppParam.FileName}; filename*=utf-8''${encodeURIComponent(AppParam.FileName)}`,
                "Content-Type": "text/plain;charset=utf-8",
                "Profile-Update-Interval": "6",
                "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${AppParam.expire}`,
            }
        });
    }
}

async function vlessOverWSHandler(request) {

    console.log(request)
    /** @type {import("@cloudflare/workers-types").WebSocket[]} */
        // @ts-ignore
    const webSocketPair = new WebSocketPair();
    const [client, webSocket] = Object.values(webSocketPair);

    // 接受 WebSocket 连接
    webSocket.accept();


    let address = '';
    let portWithRandomLog = '';

    const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
        console.log(`[${address}:${portWithRandomLog}] ${info}`, event || '');
    };

    // 获取早期数据头部，可能包含了一些初始化数据
    const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

    // 创建一个可读的 WebSocket 流，用于接收客户端数据
    const readableWebSocketStream = this.makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

    /** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
        // 用于存储远程 Socket 的包装器
    let remoteSocketWapper = {
            value: null,
        };
    // 标记是否为 DNS 查询
    let isDns = false;

    // WebSocket 数据流向远程服务器的管道
    readableWebSocketStream.pipeTo(new WritableStream({
        async write(chunk, controller) {
            if (isDns) {
                // 如果是 DNS 查询，调用 DNS 处理函数
                return await handleDNSQuery(chunk, webSocket, null, log);
            }
            if (remoteSocketWapper.value) {
                // 如果已有远程 Socket，直接写入数据
                // @ts-ignore
                const writer = remoteSocketWapper.value.writable.getWriter()
                await writer.write(chunk);
                writer.releaseLock();
                return;
            }

            // 处理 VLESS 协议头部
            const {
                hasError,
                message,
                addressType,
                portRemote = 443,
                addressRemote = '',
                rawDataIndex,
                vlessVersion = new Uint8Array([0, 0]),
                isUDP,
            } = processVlessHeader(chunk, AppParam.userID);
            // 设置地址和端口信息，用于日志
            address = addressRemote;
            portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? 'udp ' : 'tcp '} `;
            if (hasError) {
                // 如果有错误，抛出异常
                throw new Error(message);
                return;
            }
            // 如果是 UDP 且端口不是 DNS 端口（53），则关闭连接
            if (isUDP) {
                if (portRemote === 53) {
                    isDns = true;
                } else {
                    throw new Error('UDP 代理仅对 DNS（53 端口）启用');
                    return;
                }
            }
            // 构建 VLESS 响应头部
            const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
            // 获取实际的客户端数据
            const rawClientData = chunk.slice(rawDataIndex);

            if (isDns) {
                // 如果是 DNS 查询，调用 DNS 处理函数
                return handleDNSQuery(rawClientData, webSocket, vlessResponseHeader, log);
            }
            // 处理 TCP 出站连接
            log(`处理 TCP 出站连接 ${addressRemote}:${portRemote}`, undefined);
            handleTCPOutBound(remoteSocketWapper, addressType, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log);
        },
        close() {
            log(`readableWebSocketStream 已关闭`, undefined);
        },
        abort(reason) {
            log(`readableWebSocketStream 已中止`, JSON.stringify(reason));
        },
    })).catch((err) => {
        log('readableWebSocketStream 管道错误', err);
    });

    // 返回一个 WebSocket 升级的响应
    return new Response(null, {
        status: 101,
        // @ts-ignore
        webSocket: client,
    });
}
