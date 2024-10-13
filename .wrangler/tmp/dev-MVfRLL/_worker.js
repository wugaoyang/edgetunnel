var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .wrangler/tmp/bundle-EhNwNK/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// src/core/AppParam.js
var AppParam = class {
};
__name(AppParam, "AppParam");
__publicField(AppParam, "userID", "80cd4a77-141a-43c9-991b-08263cfe9c10");
// 小白勿动，该地址并不影响你的网速，这是给CF代理使用的。
// 'cdn.xn--b6gac.eu.org,
// cdn-all.xn--b6gac.eu.org,
// workers.cloudflare.cyou'
// 5.161.191.23
__publicField(AppParam, "proxyIP", "142.171.140.152");
__publicField(AppParam, "sub", "");
// 避免项目被滥用，现已取消内置订阅器
__publicField(AppParam, "subconverters", ["SUBAPI.fxxk.dedyn.io", "psub.888005.xyz", "psub.tech-site.us.kg", "localhost:8081"]);
__publicField(AppParam, "subconverter", "SUBAPI.fxxk.dedyn.io");
// clash订阅转换后端，目前使用CM的订阅转换功能。自带虚假uuid和host订阅。
// static subconverter = 'psub.888005.xyz';// clash订阅转换后端，目前使用CM的订阅转换功能。自带虚假uuid和host订阅。
// static subconverter = 'psub.tech-site.us.kg';// clash订阅转换后端，目前使用CM的订阅转换功能。自带虚假uuid和host订阅。
// static subconfig = "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"; //订阅配置文件
__publicField(AppParam, "subconfig", "https://text.tech-site.us.kg/ACL4SSR_Online_Mini_MultiMode.ini?token=ADMIN");
//订阅配置文件
__publicField(AppParam, "subProtocol", "https");
__publicField(AppParam, "subProtocol2", "http");
// The user name and password do not contain special characters
// Setting the address will ignore proxyIP
// Example:  user:pass@host:port  or  host:port
__publicField(AppParam, "socks5Address", "");
__publicField(AppParam, "parsedSocks5Address", {});
__publicField(AppParam, "enableSocks", false);
// 虚假uuid和hostname，用于发送给配置生成服务
__publicField(AppParam, "fakeUserID");
__publicField(AppParam, "fakeHostName");
__publicField(AppParam, "noTLS", "false");
__publicField(AppParam, "expire", 4102329600);
//2099-12-31
__publicField(AppParam, "proxyIPs");
__publicField(AppParam, "socks5s");
__publicField(AppParam, "go2Socks5s", [
  "*ttvnw.net"
]);
__publicField(AppParam, "addresses", [
  //当sub为空时启用本地优选域名/优选IP，若不带端口号 TLS默认端口为443，#号后为备注别名
  /*
  'Join.my.Telegram.channel.CMLiussss.to.unlock.more.premium.nodes.cf.090227.xyz#加入我的频道t.me/CMLiussss解锁更多优选节点',
  'visa.cn:443',
  'www.visa.com:8443',
  'cis.visa.com:2053',
  'africa.visa.com:2083',
  'www.visa.com.sg:2087',
  'www.visaeurope.at:2096',
  'www.visa.com.mt:8443',
  'qa.visamiddleeast.com',
  'time.is',
  'www.wto.org:8443',
  'chatgpt.com:2087',
  'icook.hk',
  '104.17.0.0#IPv4',
  '[2606:4700::]#IPv6'
  */
]);
__publicField(AppParam, "addressesapi", []);
__publicField(AppParam, "addressesnotls", [
  //当sub为空且域名带有"worker"字样时启用本地优选域名/优选IP，若不带端口号 noTLS默认端口为80，#号后为备注别名
  /*
  'usa.visa.com',
  'myanmar.visa.com:8080',
  'www.visa.com.tw:8880',
  'www.visaeurope.ch:2052',
  'www.visa.com.br:2082',
  'www.visasoutheasteurope.com:2086',
  '[2606:4700::1]:2095#IPv6'
  */
]);
__publicField(AppParam, "addressesnotlsapi", []);
__publicField(AppParam, "addressescsv", []);
__publicField(AppParam, "DLS", 8);
__publicField(AppParam, "FileName", "edgetunnel");
__publicField(AppParam, "BotToken", "");
__publicField(AppParam, "ChatID", "");
__publicField(AppParam, "proxyhosts", []);
//本地代理域名池
__publicField(AppParam, "proxyhostsURL", "https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts");
//在线代理域名池URL
__publicField(AppParam, "RproxyIP", "false");

// src/utils/CommonUtils.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
var CommonUtils = class {
  static isValidIPv4(address) {
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(address);
  }
  /**
   * 这不是真正的 UUID 验证，而是一个简化的版本
   * @param {string} uuid 要验证的 UUID 字符串
   * @returns {boolean} 如果字符串匹配 UUID 格式则返回 true，否则返回 false
   */
  static isValidUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
  /**
   * 将字节数组转换为 UUID 字符串，并验证其有效性
   * 这是一个安全的函数，它确保返回的 UUID 格式正确
   * @param {Uint8Array} arr 包含 UUID 字节的数组
   * @param {number} offset 数组中 UUID 开始的位置，默认为 0
   * @returns {string} 有效的 UUID 字符串
   * @throws {TypeError} 如果生成的 UUID 字符串无效
   */
  static stringify(arr, offset = 0) {
    const uuid = this.unsafeStringify(arr, offset);
    if (!CommonUtils.isValidUUID(uuid)) {
      throw TypeError(`\u751F\u6210\u7684 UUID \u4E0D\u7B26\u5408\u89C4\u8303 ${uuid}`);
    }
    return uuid;
  }
  /**
   * 快速地将字节数组转换为 UUID 字符串，不进行有效性检查
   * 这是一个底层函数，直接操作字节，不做任何验证
   * @param {Uint8Array} arr 包含 UUID 字节的数组
   * @param {number} offset 数组中 UUID 开始的位置，默认为 0
   * @returns {string} UUID 字符串
   */
  static unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset - 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }
  /**
   * 将 Base64 编码的字符串转换为 ArrayBuffer
   *
   * @param {string} base64Str Base64 编码的输入字符串
   * @returns {{ earlyData: ArrayBuffer | undefined, error: Error | null }} 返回解码后的 ArrayBuffer 或错误
   */
  static base64ToArrayBuffer(base64Str) {
    if (!base64Str) {
      return { error: null };
    }
    try {
      base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
      const decode = atob(base64Str);
      const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
      return { earlyData: arryBuffer.buffer, error: null };
    } catch (error) {
      return { error };
    }
  }
  /**
   * SOCKS5 代理地址解析器
   * 此函数用于解析 SOCKS5 代理地址字符串，提取出用户名、密码、主机名和端口号
   *
   * @param {string} address SOCKS5 代理地址，格式可以是：
   *   - "username:password@hostname:port" （带认证）
   *   - "hostname:port" （不需认证）
   *   - "username:password@[ipv6]:port" （IPv6 地址需要用方括号括起来）
   */
  static socks5AddressParser(address) {
    let [latter, former] = address.split("@").reverse();
    let username, password, hostname, port;
    if (former) {
      const formers = former.split(":");
      if (formers.length !== 2) {
        throw new Error('\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1A\u8BA4\u8BC1\u90E8\u5206\u5FC5\u987B\u662F "username:password" \u7684\u5F62\u5F0F');
      }
      [username, password] = formers;
    }
    const latters = latter.split(":");
    port = Number(latters.pop());
    if (isNaN(port)) {
      throw new Error("\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1A\u7AEF\u53E3\u53F7\u5FC5\u987B\u662F\u6570\u5B57");
    }
    hostname = latters.join(":");
    const regex = /^\[.*\]$/;
    if (hostname.includes(":") && !regex.test(hostname)) {
      throw new Error("\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1AIPv6 \u5730\u5740\u5FC5\u987B\u7528\u65B9\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u5982 [2001:db8::1]");
    }
    return {
      username,
      // 用户名，如果没有则为 undefined
      password,
      // 密码，如果没有则为 undefined
      hostname,
      // 主机名，可以是域名、IPv4 或 IPv6 地址
      port
      // 端口号，已转换为数字类型
    };
  }
  /**
   * 恢复被伪装的信息
   * 这个函数用于将内容中的假用户ID和假主机名替换回真实的值
   *
   * @param {string} content 需要处理的内容
   * @param {string} userID 真实的用户ID
   * @param {string} hostName 真实的主机名
   * @param {boolean} isBase64 内容是否是Base64编码的
   * @returns {string} 恢复真实信息后的内容
   */
  static revertFakeInfo(content, userID, hostName, isBase64) {
    if (isBase64)
      content = atob(content);
    content = content.replace(new RegExp(AppParam.fakeUserID, "g"), userID).replace(new RegExp(AppParam.fakeHostName, "g"), hostName);
    if (isBase64)
      content = btoa(content);
    return content;
  }
  /**
   * 解析并清理环境变量中的地址列表
   * 这个函数用于处理包含多个地址的环境变量
   * 它会移除所有的空白字符、引号等，并将地址列表转换为数组
   *
   * @param {string} envadd 包含地址列表的环境变量值
   * @returns {Promise<string[]>} 清理和分割后的地址数组
   */
  static async ADD(envadd) {
    var addtext = envadd.replace(/[	|"'\r\n]+/g, ",").replace(/,+/g, ",");
    if (addtext.charAt(0) == ",")
      addtext = addtext.slice(1);
    if (addtext.charAt(addtext.length - 1) == ",")
      addtext = addtext.slice(0, addtext.length - 1);
    const add = addtext.split(",");
    return add;
  }
  /**
   * 双重MD5哈希函数
   * 这个函数对输入文本进行两次MD5哈希，增强安全性
   * 第二次哈希使用第一次哈希结果的一部分作为输入
   *
   * @param {string} text 要哈希的文本
   * @returns {Promise<string>} 双重哈希后的小写十六进制字符串
   */
  static async MD5MD5(text) {
    const encoder = new TextEncoder();
    const firstPass = await crypto.subtle.digest("MD5", encoder.encode(text));
    const firstPassArray = Array.from(new Uint8Array(firstPass));
    const firstHex = firstPassArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    const secondPass = await crypto.subtle.digest("MD5", encoder.encode(firstHex.slice(7, 27)));
    const secondPassArray = Array.from(new Uint8Array(secondPass));
    const secondHex = secondPassArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return secondHex.toLowerCase();
  }
  static isLocalHost(hostName = "") {
    if (hostName && (hostName.includes("localhost") || hostName.includes("127.0.0.1"))) {
      return true;
    }
    return false;
  }
  static getProtocol(hostName = "") {
    return this.isLocalHost(hostName) ? AppParam.subProtocol2 : AppParam.subProtocol;
  }
  static urlSafeBase64Encode(input) {
    return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  static urlSafeBase64Decode(input) {
    const padded = input + "=".repeat((4 - input.length % 4) % 4);
    return atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
  }
};
__name(CommonUtils, "CommonUtils");

// src/utils/SubUtils.js
var \u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A = "dmxlc3M=";
var subParams = ["sub", "base64", "b64", "clash", "singbox", "sb"];
var SubUtils = class {
  /**
   * 解析并清理环境变量中的地址列表
   * 这个函数用于处理包含多个地址的环境变量
   * 它会移除所有的空白字符、引号等，并将地址列表转换为数组
   *
   * @param {string} envadd 包含地址列表的环境变量值
   * @returns {Promise<string[]>} 清理和分割后的地址数组
   */
  static async ADD(envadd) {
    var addtext = envadd.replace(/[	|"'\r\n]+/g, ",").replace(/,+/g, ",");
    if (addtext.charAt(0) == ",")
      addtext = addtext.slice(1);
    if (addtext.charAt(addtext.length - 1) == ",")
      addtext = addtext.slice(0, addtext.length - 1);
    const add = addtext.split(",");
    return add;
  }
  static checkSUB(host) {
    if ((!AppParam.sub || AppParam.sub == "") && AppParam.addresses.length + AppParam.addressesapi.length + AppParam.addressesnotls.length + AppParam.addressesnotlsapi.length + AppParam.addressescsv.length == 0) {
      AppParam.addresses = [
        "Join.my.Telegram.channel.CMLiussss.to.unlock.more.premium.nodes.cf.090227.xyz#\u52A0\u5165\u6211\u7684\u9891\u9053t.me/CMLiussss\u89E3\u9501\u66F4\u591A\u4F18\u9009\u8282\u70B9",
        "visa.cn:443",
        "www.visa.com:8443",
        "cis.visa.com:2053",
        "africa.visa.com:2083",
        "www.visa.com.sg:2087",
        "www.visaeurope.at:2096",
        "www.visa.com.mt:8443",
        "qa.visamiddleeast.com",
        "time.is",
        "www.wto.org:8443",
        "chatgpt.com:2087",
        "icook.hk",
        //'104.17.0.0#IPv4',
        "[2606:4700::]#IPv6"
      ];
      if (host.includes(".workers.dev")) {
        AppParam.addressesnotls = [
          "usa.visa.com:2095",
          "myanmar.visa.com:8080",
          "www.visa.com.tw:8880",
          "www.visaeurope.ch:2052",
          "www.visa.com.br:2082",
          "www.visasoutheasteurope.com:2086"
        ];
      }
    }
  }
  static \u914D\u7F6E\u4FE1\u606F(UUID, \u57DF\u540D\u5730\u5740) {
    const \u534F\u8BAE\u7C7B\u578B = atob(\u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A);
    const \u522B\u540D = AppParam.FileName;
    let \u5730\u5740 = \u57DF\u540D\u5730\u5740;
    let \u7AEF\u53E3 = 443;
    const \u7528\u6237ID = UUID;
    const \u52A0\u5BC6\u65B9\u5F0F = "none";
    const \u4F20\u8F93\u5C42\u534F\u8BAE = "ws";
    const \u4F2A\u88C5\u57DF\u540D = \u57DF\u540D\u5730\u5740;
    const \u8DEF\u5F84 = "/?ed=2560&proxyip=";
    let \u4F20\u8F93\u5C42\u5B89\u5168 = ["tls", true];
    const SNI = \u57DF\u540D\u5730\u5740;
    const \u6307\u7EB9 = "randomized";
    if (\u57DF\u540D\u5730\u5740.includes(".workers.dev")) {
      \u5730\u5740 = "visa.cn";
      \u7AEF\u53E3 = 80;
      \u4F20\u8F93\u5C42\u5B89\u5168 = ["", false];
    }
    const v2ray = `${\u534F\u8BAE\u7C7B\u578B}://${\u7528\u6237ID}@${\u5730\u5740}:${\u7AEF\u53E3}?encryption=${\u52A0\u5BC6\u65B9\u5F0F}&security=${\u4F20\u8F93\u5C42\u5B89\u5168[0]}&sni=${SNI}&fp=${\u6307\u7EB9}&type=${\u4F20\u8F93\u5C42\u534F\u8BAE}&host=${\u4F2A\u88C5\u57DF\u540D}&path=${encodeURIComponent(\u8DEF\u5F84)}#${encodeURIComponent(\u522B\u540D)}`;
    const clash = `- type: ${\u534F\u8BAE\u7C7B\u578B}
  name: ${AppParam.FileName}
  server: ${\u5730\u5740}
  port: ${\u7AEF\u53E3}
  uuid: ${\u7528\u6237ID}
  network: ${\u4F20\u8F93\u5C42\u534F\u8BAE}
  tls: ${\u4F20\u8F93\u5C42\u5B89\u5168[1]}
  udp: false
  sni: ${SNI}
  client-fingerprint: ${\u6307\u7EB9}
  ws-opts:
    path: "${\u8DEF\u5F84}"
    headers:
      host: ${\u4F2A\u88C5\u57DF\u540D}`;
    return [v2ray, clash];
  }
  /**
   * @param {string} userID
   * @param {string | null} hostName
   * @param {string} sub
   * @param {string} UA
   * @returns {Promise<string>}
   */
  static async getVLESSConfig(userID, hostName, sub, UA, RproxyIP, _url, request) {
    this.checkSUB(hostName);
    const userAgent = UA.toLowerCase();
    const Config = this.\u914D\u7F6E\u4FE1\u606F(userID, hostName);
    const v2ray = Config[0];
    const clash = Config[1];
    let proxyhost = "";
    if (hostName.includes(".workers.dev") || hostName.includes(".pages.dev")) {
      if (AppParam.proxyhostsURL && (!AppParam.proxyhosts || AppParam.proxyhosts.length == 0)) {
        try {
          const response = await fetch(AppParam.proxyhostsURL);
          if (!response.ok) {
            console.error("\u83B7\u53D6\u5730\u5740\u65F6\u51FA\u9519:", response.status, response.statusText);
            return;
          }
          const text = await response.text();
          const lines = text.split("\n");
          const nonEmptyLines = lines.filter((line) => line.trim() !== "");
          AppParam.proxyhosts = AppParam.proxyhosts.concat(nonEmptyLines);
        } catch (error) {
        }
      }
      if (AppParam.proxyhosts.length != 0)
        proxyhost = AppParam.proxyhosts[Math.floor(Math.random() * AppParam.proxyhosts.length)] + "/";
    }
    if (userAgent.includes("mozilla") && !subParams.some((_searchParams) => _url.searchParams.has(_searchParams))) {
      const newSocks5s = AppParam.socks5s.map((socks5Address) => {
        if (socks5Address.includes("@"))
          return socks5Address.split("@")[1];
        else if (socks5Address.includes("//"))
          return socks5Address.split("//")[1];
        else
          return socks5Address;
      });
      let socks5List = "";
      if (AppParam.go2Socks5s.length > 0 && AppParam.enableSocks) {
        socks5List = `${decodeURIComponent("SOCKS5%EF%BC%88%E7%99%BD%E5%90%8D%E5%8D%95%EF%BC%89%3A%20")}`;
        if (AppParam.go2Socks5s.includes(atob("YWxsIGlu")) || AppParam.go2Socks5s.includes(atob("Kg==")))
          socks5List += `${decodeURIComponent("%E6%89%80%E6%9C%89%E6%B5%81%E9%87%8F")}
`;
        else
          socks5List += `
  ${AppParam.go2Socks5s.join("\n  ")}
`;
      }
      let \u8BA2\u9605\u5668 = "";
      if (!sub || sub == "") {
        if (AppParam.enableSocks)
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: Socks5
  ${newSocks5s.join("\n  ")}
${socks5List}`;
        else if (AppParam.proxyIP && AppParam.proxyIP != "")
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: ProxyIP
  ${AppParam.proxyIPs.join("\n  ")}
`;
        else
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: \u65E0\u6CD5\u8BBF\u95EE, \u9700\u8981\u60A8\u8BBE\u7F6E proxyIP/PROXYIP \uFF01\uFF01\uFF01
`;
        \u8BA2\u9605\u5668 += `
\u60A8\u7684\u8BA2\u9605\u5185\u5BB9\u7531 \u5185\u7F6E addresses/ADD* \u53C2\u6570\u53D8\u91CF\u63D0\u4F9B
`;
        if (AppParam.addresses.length > 0)
          \u8BA2\u9605\u5668 += `ADD\uFF08TLS\u4F18\u9009\u57DF\u540D&IP\uFF09: 
  ${AppParam.addresses.join("\n  ")}
`;
        if (AppParam.addressesnotls.length > 0)
          \u8BA2\u9605\u5668 += `ADDNOTLS\uFF08noTLS\u4F18\u9009\u57DF\u540D&IP\uFF09: 
  ${AppParam.addressesnotls.join("\n  ")}
`;
        if (AppParam.addressesapi.length > 0)
          \u8BA2\u9605\u5668 += `ADDAPI\uFF08TLS\u4F18\u9009\u57DF\u540D&IP \u7684 API\uFF09: 
  ${AppParam.addressesapi.join("\n  ")}
`;
        if (AppParam.addressesnotlsapi.length > 0)
          \u8BA2\u9605\u5668 += `ADDNOTLSAPI\uFF08noTLS\u4F18\u9009\u57DF\u540D&IP \u7684 API\uFF09: 
  ${AppParam.addressesnotlsapi.join("\n  ")}
`;
        if (AppParam.addressescsv.length > 0)
          \u8BA2\u9605\u5668 += `ADDCSV\uFF08IPTest\u6D4B\u901Fcsv\u6587\u4EF6 \u9650\u901F ${AppParam.DLS} \uFF09: 
  ${AppParam.addressescsv.join("\n  ")}
`;
      } else {
        if (AppParam.enableSocks)
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: Socks5
  ${newSocks5s.join("\n  ")}
${socks5List}`;
        else if (AppParam.proxyIP && AppParam.proxyIP != "")
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: ProxyIP
  ${AppParam.proxyIPs.join("\n  ")}
`;
        else if (RproxyIP == "true")
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: \u81EA\u52A8\u83B7\u53D6ProxyIP
`;
        else
          \u8BA2\u9605\u5668 += `CFCDN\uFF08\u8BBF\u95EE\u65B9\u5F0F\uFF09: \u65E0\u6CD5\u8BBF\u95EE, \u9700\u8981\u60A8\u8BBE\u7F6E proxyIP/PROXYIP \uFF01\uFF01\uFF01
`;
        \u8BA2\u9605\u5668 += `
SUB\uFF08\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\uFF09: ${sub}`;
      }
      return `
################################################################
Subscribe / sub \u8BA2\u9605\u5730\u5740, \u652F\u6301 Base64\u3001clash-meta\u3001sing-box \u8BA2\u9605\u683C\u5F0F
---------------------------------------------------------------
\u5FEB\u901F\u81EA\u9002\u5E94\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${userID}
https://${proxyhost}${hostName}/${userID}?sub

Base64\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${userID}?b64
https://${proxyhost}${hostName}/${userID}?base64

clash\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${userID}?clash

singbox\u8BA2\u9605\u5730\u5740:
https://${proxyhost}${hostName}/${userID}?sb
https://${proxyhost}${hostName}/${userID}?singbox
---------------------------------------------------------------
################################################################
${AppParam.FileName} \u914D\u7F6E\u4FE1\u606F
---------------------------------------------------------------
HOST: ${hostName}
UUID: ${userID}
FKID: ${AppParam.fakeUserID}
UA: ${UA}

${\u8BA2\u9605\u5668}
SUBAPI\uFF08\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\uFF09: ${AppParam.subProtocol}://${AppParam.subconverter}
SUBCONFIG\uFF08\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E\u6587\u4EF6\uFF09: ${AppParam.subconfig}
---------------------------------------------------------------
################################################################
v2ray
---------------------------------------------------------------
${v2ray}
---------------------------------------------------------------
################################################################
clash-meta
---------------------------------------------------------------
${clash}
---------------------------------------------------------------
################################################################
telegram \u4EA4\u6D41\u7FA4 \u6280\u672F\u5927\u4F6C~\u5728\u7EBF\u53D1\u724C!
https://t.me/CMLiussss
---------------------------------------------------------------
github \u9879\u76EE\u5730\u5740 Star!Star!Star!!!
https://github.com/cmliu/edgetunnel
---------------------------------------------------------------
################################################################
`;
    } else {
      if (typeof fetch != "function") {
        return "Error: fetch is not available in this environment.";
      }
      let newAddressesapi = [];
      let newAddressescsv = [];
      let newAddressesnotlsapi = [];
      let newAddressesnotlscsv = [];
      if (hostName.includes(".workers.dev")) {
        AppParam.noTLS = "true";
        AppParam.fakeHostName = `${AppParam.fakeHostName}.workers.dev`;
        newAddressesnotlsapi = await this.getAddressesapi(AppParam.addressesnotlsapi);
        newAddressesnotlscsv = await this.getAddressescsv("FALSE");
      } else if (hostName.includes(".pages.dev")) {
        AppParam.fakeHostName = `${AppParam.fakeHostName}.pages.dev`;
      } else if (hostName.includes("worker") || hostName.includes("notls") || AppParam.noTLS == "true") {
        AppParam.noTLS = "true";
        AppParam.fakeHostName = `notls${AppParam.fakeHostName}.net`;
        newAddressesnotlsapi = await this.getAddressesapi(AppParam.addressesnotlsapi);
        newAddressesnotlscsv = await this.getAddressescsv("FALSE");
      } else {
        AppParam.fakeHostName = `${AppParam.fakeHostName}.xyz`;
      }
      let protocol1 = CommonUtils.getProtocol(sub);
      let url = `${protocol1}://${sub}/sub?host=${AppParam.fakeHostName}&uuid=${AppParam.fakeUserID}&edgetunnel=cmliu&proxyip=${RproxyIP}`;
      let isBase64 = true;
      if (!sub || sub == "") {
        if (hostName.includes("workers.dev") || hostName.includes("pages.dev")) {
          if (AppParam.proxyhostsURL && (!AppParam.proxyhosts || AppParam.proxyhosts.length == 0)) {
            try {
              const response = await fetch(AppParam.proxyhostsURL);
              if (!response.ok) {
                console.error("\u83B7\u53D6\u5730\u5740\u65F6\u51FA\u9519:", response.status, response.statusText);
                return;
              }
              const text = await response.text();
              const lines = text.split("\n");
              const nonEmptyLines = lines.filter((line) => line.trim() !== "");
              AppParam.proxyhosts = AppParam.proxyhosts.concat(nonEmptyLines);
            } catch (error) {
              console.error("\u83B7\u53D6\u5730\u5740\u65F6\u51FA\u9519:", error);
            }
          }
          AppParam.proxyhosts = [...new Set(AppParam.proxyhosts)];
        }
        newAddressesapi = await this.getAddressesapi(AppParam.addressesapi);
        newAddressescsv = await this.getAddressescsv("TRUE");
        let protocol = CommonUtils.getProtocol(hostName);
        url = `${protocol}://${hostName}/${AppParam.fakeUserID}`;
        if (hostName.includes("worker") || hostName.includes("notls") || AppParam.noTLS == "true")
          url += "?notls";
      }
      if (!userAgent.includes("CF-Workers-SUB".toLowerCase())) {
        let protocol = CommonUtils.getProtocol(AppParam.subconverter);
        if (userAgent.includes("clash") && !userAgent.includes("nekobox") || _url.searchParams.has("clash") && !userAgent.includes("subconverter")) {
          url = `${protocol}://${AppParam.subconverter}/sub?target=clash&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(AppParam.subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
          isBase64 = false;
        } else if (userAgent.includes("sing-box") || userAgent.includes("singbox") || (_url.searchParams.has("singbox") || _url.searchParams.has("sb")) && !userAgent.includes("subconverter")) {
          url = `${protocol}://${AppParam.subconverter}/sub?target=singbox&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(AppParam.subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
          isBase64 = false;
        }
      }
      try {
        let content;
        if ((!sub || sub == "") && isBase64 == true) {
          content = await this.subAddresses(AppParam.fakeHostName, AppParam.fakeUserID, AppParam.noTLS, newAddressesapi, newAddressescsv, newAddressesnotlsapi, newAddressesnotlscsv, request);
        } else {
          const response = await fetch(url, {
            headers: {
              "User-Agent": `${UA} CF-Workers-edgetunnel/cmliu`
            }
          });
          content = await response.text();
        }
        if (_url.pathname == `/${AppParam.fakeUserID}`)
          return content;
        return CommonUtils.revertFakeInfo(content, userID, hostName, isBase64);
      } catch (error) {
        console.error("Error fetching content:", error);
        return `Error fetching content: ${error.message}`;
      }
    }
  }
  static async getAccountId(email, key) {
    try {
      const url = "https://api.cloudflare.com/client/v4/accounts";
      const headers = new Headers({
        "X-AUTH-EMAIL": email,
        "X-AUTH-KEY": key
      });
      const response = await fetch(url, { headers });
      const data = await response.json();
      return data.result[0].id;
    } catch (error) {
      return false;
    }
  }
  static async getSum(accountId, accountIndex, email, key, startDate, endDate) {
    try {
      const startDateISO = new Date(startDate).toISOString();
      const endDateISO = new Date(endDate).toISOString();
      const query = JSON.stringify({
        query: `query getBillingMetrics($accountId: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
				viewer {
					accounts(filter: {accountTag: $accountId}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) {
							sum {
								requests
							}
						}
						workersInvocationsAdaptive(limit: 10000, filter: $filter) {
							sum {
								requests
							}
						}
					}
				}
			}`,
        variables: {
          accountId,
          filter: { datetime_geq: startDateISO, datetime_leq: endDateISO }
        }
      });
      const headers = new Headers({
        "Content-Type": "application/json",
        "X-AUTH-EMAIL": email,
        "X-AUTH-KEY": key
      });
      const response = await fetch(`https://api.cloudflare.com/client/v4/graphql`, {
        method: "POST",
        headers,
        body: query
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      const pagesFunctionsInvocationsAdaptiveGroups = res?.data?.viewer?.accounts?.[accountIndex]?.pagesFunctionsInvocationsAdaptiveGroups;
      const workersInvocationsAdaptive = res?.data?.viewer?.accounts?.[accountIndex]?.workersInvocationsAdaptive;
      if (!pagesFunctionsInvocationsAdaptiveGroups && !workersInvocationsAdaptive) {
        throw new Error("\u627E\u4E0D\u5230\u6570\u636E");
      }
      const pagesSum = pagesFunctionsInvocationsAdaptiveGroups.reduce((a, b) => a + b?.sum.requests, 0);
      const workersSum = workersInvocationsAdaptive.reduce((a, b) => a + b?.sum.requests, 0);
      return [pagesSum, workersSum];
    } catch (error) {
      return [0, 0];
    }
  }
  static async getAddressesapi(api) {
    if (!api || api.length === 0) {
      return [];
    }
    let newapi = "";
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
    }, 2e3);
    try {
      const responses = await Promise.allSettled(api.map((apiUrl) => fetch(apiUrl, {
        method: "get",
        headers: {
          "Accept": "text/html,application/xhtml+xml,application/xml;",
          "User-Agent": "CF-Workers-edgetunnel/cmliu"
        },
        signal: controller.signal
        // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
      }).then((response) => response.ok ? response.text() : Promise.reject())));
      for (const response of responses) {
        if (response.status === "fulfilled") {
          const content = await response.value;
          newapi += content + "\n";
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      clearTimeout(timeout);
    }
    const newAddressesapi = await this.ADD(newapi);
    return newAddressesapi;
  }
  static async getAddressescsv(tls) {
    if (!AppParam.addressescsv || AppParam.addressescsv.length === 0) {
      return [];
    }
    let newAddressescsv = [];
    for (const csvUrl of AppParam.addressescsv) {
      try {
        const response = await fetch(csvUrl);
        if (!response.ok) {
          console.error("\u83B7\u53D6CSV\u5730\u5740\u65F6\u51FA\u9519:", response.status, response.statusText);
          continue;
        }
        const text = await response.text();
        let lines;
        if (text.includes("\r\n")) {
          lines = text.split("\r\n");
        } else {
          lines = text.split("\n");
        }
        const header = lines[0].split(",");
        const tlsIndex = header.indexOf("TLS");
        const ipAddressIndex = 0;
        const portIndex = 1;
        const dataCenterIndex = tlsIndex + 1;
        if (tlsIndex === -1) {
          console.error("CSV\u6587\u4EF6\u7F3A\u5C11\u5FC5\u9700\u7684\u5B57\u6BB5");
          continue;
        }
        for (let i = 1; i < lines.length; i++) {
          const columns = lines[i].split(",");
          const speedIndex = columns.length - 1;
          if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > AppParam.DLS) {
            const ipAddress = columns[ipAddressIndex];
            const port = columns[portIndex];
            const dataCenter = columns[dataCenterIndex];
            const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
            newAddressescsv.push(formattedAddress);
          }
        }
      } catch (error) {
        console.error("\u83B7\u53D6CSV\u5730\u5740\u65F6\u51FA\u9519:", error);
        continue;
      }
    }
    return newAddressescsv;
  }
  static subAddresses(host, UUID, noTLS, newAddressesapi, newAddressescsv, newAddressesnotlsapi, newAddressesnotlscsv, request) {
    const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
    AppParam.addresses = AppParam.addresses.concat(newAddressesapi);
    AppParam.addresses = AppParam.addresses.concat(newAddressescsv);
    let notlsresponseBody;
    let url = new URL(request.url);
    let proxyip = url.searchParams.get("proxyip");
    let \u6700\u7EC8\u8DEF\u5F84 = `/?ed=2560&proxyip=${proxyip}`;
    if (noTLS == "true") {
      AppParam.addressesnotls = AppParam.addressesnotls.concat(newAddressesnotlsapi);
      AppParam.addressesnotls = AppParam.addressesnotls.concat(newAddressesnotlscsv);
      const uniqueAddressesnotls = [...new Set(AppParam.addressesnotls)];
      notlsresponseBody = uniqueAddressesnotls.map((address) => {
        let port = "-1";
        let addressid = address;
        const match = addressid.match(regex);
        if (!match) {
          if (address.includes(":") && address.includes("#")) {
            const parts = address.split(":");
            address = parts[0];
            const subParts = parts[1].split("#");
            port = subParts[0];
            addressid = subParts[1];
          } else if (address.includes(":")) {
            const parts = address.split(":");
            address = parts[0];
            port = parts[1];
          } else if (address.includes("#")) {
            const parts = address.split("#");
            address = parts[0];
            addressid = parts[1];
          }
          if (addressid.includes(":")) {
            addressid = addressid.split(":")[0];
          }
        } else {
          address = match[1];
          port = match[2] || port;
          addressid = match[3] || address;
        }
        const httpPorts = ["8080", "8880", "2052", "2082", "2086", "2095"];
        if (!CommonUtils.isValidIPv4(address) && port == "-1") {
          for (let httpPort of httpPorts) {
            if (address.includes(httpPort)) {
              port = httpPort;
              break;
            }
          }
        }
        if (port == "-1")
          port = "80";
        let \u4F2A\u88C5\u57DF\u540D = host;
        let \u8282\u70B9\u5907\u6CE8 = "";
        const \u534F\u8BAE\u7C7B\u578B = atob(\u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A);
        const vlessLink = `${\u534F\u8BAE\u7C7B\u578B}://${UUID}@${address}:${port}?encryption=none&security=&type=ws&host=${\u4F2A\u88C5\u57DF\u540D}&path=${encodeURIComponent(\u6700\u7EC8\u8DEF\u5F84)}#${encodeURIComponent(addressid + \u8282\u70B9\u5907\u6CE8)}`;
        return vlessLink;
      }).join("\n");
    }
    const uniqueAddresses = [...new Set(AppParam.addresses)];
    const responseBody = uniqueAddresses.map((address) => {
      let port = "-1";
      let addressid = address;
      const match = addressid.match(regex);
      if (!match) {
        if (address.includes(":") && address.includes("#")) {
          const parts = address.split(":");
          address = parts[0];
          const subParts = parts[1].split("#");
          port = subParts[0];
          addressid = subParts[1];
        } else if (address.includes(":")) {
          const parts = address.split(":");
          address = parts[0];
          port = parts[1];
        } else if (address.includes("#")) {
          const parts = address.split("#");
          address = parts[0];
          addressid = parts[1];
        }
        if (addressid.includes(":")) {
          addressid = addressid.split(":")[0];
        }
      } else {
        address = match[1];
        port = match[2] || port;
        addressid = match[3] || address;
      }
      const httpsPorts = ["2053", "2083", "2087", "2096", "8443"];
      if (!CommonUtils.isValidIPv4(address) && port == "-1") {
        for (let httpsPort of httpsPorts) {
          if (address.includes(httpsPort)) {
            port = httpsPort;
            break;
          }
        }
      }
      if (port == "-1")
        port = "443";
      let \u4F2A\u88C5\u57DF\u540D = host;
      let \u8282\u70B9\u5907\u6CE8 = "";
      if (AppParam.proxyhosts.length > 0 && (\u4F2A\u88C5\u57DF\u540D.includes(".workers.dev") || \u4F2A\u88C5\u57DF\u540D.includes("pages.dev"))) {
        \u6700\u7EC8\u8DEF\u5F84 = `/${\u4F2A\u88C5\u57DF\u540D}${\u6700\u7EC8\u8DEF\u5F84}`;
        \u4F2A\u88C5\u57DF\u540D = AppParam.proxyhosts[Math.floor(Math.random() * AppParam.proxyhosts.length)];
        \u8282\u70B9\u5907\u6CE8 = ` \u5DF2\u542F\u7528\u4E34\u65F6\u57DF\u540D\u4E2D\u8F6C\u670D\u52A1\uFF0C\u8BF7\u5C3D\u5FEB\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u57DF\uFF01`;
      }
      const \u534F\u8BAE\u7C7B\u578B = atob(\u5565\u5565\u5565_\u5199\u7684\u8FD9\u662F\u5565\u554A);
      const vlessLink = `${\u534F\u8BAE\u7C7B\u578B}://${UUID}@${address}:${port}?encryption=none&security=tls&sni=${\u4F2A\u88C5\u57DF\u540D}&fp=random&type=ws&host=${\u4F2A\u88C5\u57DF\u540D}&path=${encodeURIComponent(\u6700\u7EC8\u8DEF\u5F84)}#${encodeURIComponent(addressid + \u8282\u70B9\u5907\u6CE8)}`;
      return vlessLink;
    }).join("\n");
    let base64Response = responseBody;
    if (noTLS == "true")
      base64Response += `
${notlsresponseBody}`;
    return btoa(base64Response);
  }
};
__name(SubUtils, "SubUtils");

// src/core/SubService.js
import { connect } from "cloudflare:sockets";
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
async function vlessOverWSHandler(request) {
  console.log(request);
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = /* @__PURE__ */ __name((info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  }, "log");
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let isDns = false;
  readableWebSocketStream.pipeTo(new WritableStream({
    async write(chunk, controller) {
      if (isDns) {
        return await handleDNSQuery(chunk, webSocket, null, log);
      }
      if (remoteSocketWapper.value) {
        const writer = remoteSocketWapper.value.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      const {
        hasError,
        message,
        addressType,
        portRemote = 443,
        addressRemote = "",
        rawDataIndex,
        vlessVersion = new Uint8Array([0, 0]),
        isUDP
      } = processVlessHeader(chunk, AppParam.userID);
      address = addressRemote;
      portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
      if (hasError) {
        throw new Error(message);
        return;
      }
      if (isUDP) {
        if (portRemote === 53) {
          isDns = true;
        } else {
          throw new Error("UDP \u4EE3\u7406\u4EC5\u5BF9 DNS\uFF0853 \u7AEF\u53E3\uFF09\u542F\u7528");
          return;
        }
      }
      const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
      const rawClientData = chunk.slice(rawDataIndex);
      if (isDns) {
        return handleDNSQuery(rawClientData, webSocket, vlessResponseHeader, log);
      }
      log(`\u5904\u7406 TCP \u51FA\u7AD9\u8FDE\u63A5 ${addressRemote}:${portRemote}`, void 0);
      handleTCPOutBound(remoteSocketWapper, addressType, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log);
    },
    close() {
      log(`readableWebSocketStream \u5DF2\u5173\u95ED`, void 0);
    },
    abort(reason) {
      log(`readableWebSocketStream \u5DF2\u4E2D\u6B62`, JSON.stringify(reason));
    }
  })).catch((err) => {
    log("readableWebSocketStream \u7BA1\u9053\u9519\u8BEF", err);
  });
  return new Response(null, {
    status: 101,
    // @ts-ignore
    webSocket: client
  });
}
__name(vlessOverWSHandler, "vlessOverWSHandler");
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    // 当流开始时的初始化函数
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) {
          return;
        }
        const message = event.data;
        controller.enqueue(message);
      });
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket(webSocketServer);
        if (readableStreamCancel) {
          return;
        }
        controller.close();
      });
      webSocketServer.addEventListener("error", (err) => {
        log("WebSocket \u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF");
        controller.error(err);
      });
      const { earlyData, error } = CommonUtils.base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    // 当使用者从流中拉取数据时调用
    pull(controller) {
    },
    // 当流被取消时调用
    cancel(reason) {
      if (readableStreamCancel) {
        return;
      }
      log(`\u53EF\u8BFB\u6D41\u88AB\u53D6\u6D88\uFF0C\u539F\u56E0\u662F ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}
__name(makeReadableWebSocketStream, "makeReadableWebSocketStream");
async function handleDNSQuery(udpChunk, webSocket, vlessResponseHeader, log) {
  try {
    const dnsServer = "8.8.4.4";
    const dnsPort = 53;
    let vlessHeader = vlessResponseHeader;
    const tcpSocket = connect({
      hostname: dnsServer,
      port: dnsPort
    });
    log(`\u8FDE\u63A5\u5230 ${dnsServer}:${dnsPort}`);
    const writer = tcpSocket.writable.getWriter();
    await writer.write(udpChunk);
    writer.releaseLock();
    await tcpSocket.readable.pipeTo(new WritableStream({
      async write(chunk) {
        if (webSocket.readyState === WS_READY_STATE_OPEN) {
          if (vlessHeader) {
            webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
            vlessHeader = null;
          } else {
            webSocket.send(chunk);
          }
        }
      },
      close() {
        log(`DNS \u670D\u52A1\u5668(${dnsServer}) TCP \u8FDE\u63A5\u5DF2\u5173\u95ED`);
      },
      abort(reason) {
        console.error(`DNS \u670D\u52A1\u5668(${dnsServer}) TCP \u8FDE\u63A5\u5F02\u5E38\u4E2D\u65AD`, reason);
      }
    }));
  } catch (error) {
    console.error(
      // @ts-ignore
      `handleDNSQuery \u51FD\u6570\u53D1\u751F\u5F02\u5E38\uFF0C\u9519\u8BEF\u4FE1\u606F: ${error.message}`
    );
  }
}
__name(handleDNSQuery, "handleDNSQuery");
function processVlessHeader(vlessBuffer, userID) {
  if (vlessBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  const version = new Uint8Array(vlessBuffer.slice(0, 1));
  let isValidUser = false;
  let isUDP = false;
  if (CommonUtils.stringify(new Uint8Array(vlessBuffer.slice(1, 17))) === userID) {
    isValidUser = true;
  }
  if (!isValidUser) {
    return {
      hasError: true,
      message: `invalid user ${new Uint8Array(vlessBuffer.slice(1, 17))}`
    };
  }
  const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
  const command = new Uint8Array(
    vlessBuffer.slice(18 + optLength, 18 + optLength + 1)
  )[0];
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = vlessBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(
    vlessBuffer.slice(addressIndex, addressIndex + 1)
  );
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      ).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + 1)
      )[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      );
      break;
    case 3:
      addressLength = 16;
      const dataView = new DataView(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      );
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      addressValue = ipv6.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invild addressType is ${addressType}`
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`
    };
  }
  return {
    hasError: false,
    addressRemote: addressValue,
    // 解析后的远程地址
    addressType,
    // 地址类型
    portRemote,
    // 远程端口
    rawDataIndex: addressValueIndex + addressLength,
    // 原始数据的实际起始位置
    vlessVersion: version,
    // VLESS 协议版本
    isUDP
    // 是否是 UDP 请求
  };
}
__name(processVlessHeader, "processVlessHeader");
async function handleTCPOutBound(remoteSocket, addressType, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log) {
  async function useSocks5Pattern(address) {
    if (AppParam.go2Socks5s.includes(atob("YWxsIGlu")) || AppParam.go2Socks5s.includes(atob("Kg==")))
      return true;
    return AppParam.go2Socks5s.some((pattern) => {
      let regexPattern = pattern.replace(/\*/g, ".*");
      let regex = new RegExp(`^${regexPattern}$`, "i");
      return regex.test(address);
    });
  }
  __name(useSocks5Pattern, "useSocks5Pattern");
  async function connectAndWrite(address, port, socks = false) {
    log(`connected to ${address}:${port}`);
    const tcpSocket2 = socks ? await socks5Connect(addressType, address, port, log) : connect({
      // @ts-ignore
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket2;
    const writer = tcpSocket2.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket2;
  }
  __name(connectAndWrite, "connectAndWrite");
  async function retry() {
    if (AppParam.enableSocks) {
      tcpSocket = await connectAndWrite(addressRemote, portRemote, true);
    } else {
      if (!AppParam.proxyIP || AppParam.proxyIP == "")
        AppParam.proxyIP = atob("cHJveHlpcC5meHhrLmRlZHluLmlv");
      tcpSocket = await connectAndWrite(AppParam.proxyIP || addressRemote, portRemote);
    }
    tcpSocket.closed.catch((error) => {
      console.log("retry tcpSocket closed error", error);
    }).finally(() => {
      safeCloseWebSocket(webSocket);
    });
    remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, null, log);
  }
  __name(retry, "retry");
  let useSocks = false;
  if (AppParam.go2Socks5s.length > 0 && AppParam.enableSocks)
    useSocks = await useSocks5Pattern(addressRemote);
  let tcpSocket = await connectAndWrite(addressRemote, portRemote, useSocks);
  remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, retry, log);
}
__name(handleTCPOutBound, "handleTCPOutBound");
async function remoteSocketToWS(remoteSocket, webSocket, vlessResponseHeader, retry, log) {
  let remoteChunkCount = 0;
  let chunks = [];
  let vlessHeader = vlessResponseHeader;
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      start() {
      },
      /**
       * 处理每个数据块
       * @param {Uint8Array} chunk 数据块
       * @param {*} controller 控制器
       */
      async write(chunk, controller) {
        hasIncomingData = true;
        if (webSocket.readyState !== WS_READY_STATE_OPEN) {
          controller.error(
            "webSocket.readyState is not open, maybe close"
          );
        }
        if (vlessHeader) {
          webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
          vlessHeader = null;
        } else {
          webSocket.send(chunk);
        }
      },
      close() {
        log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
      },
      abort(reason) {
        console.error(`remoteConnection!.readable abort`, reason);
      }
    })
  ).catch((error) => {
    console.error(
      `remoteSocketToWS has exception `,
      error.stack || error
    );
    safeCloseWebSocket(webSocket);
  });
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
__name(remoteSocketToWS, "remoteSocketToWS");
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}
__name(safeCloseWebSocket, "safeCloseWebSocket");
async function socks5Connect(addressType, addressRemote, portRemote, log) {
  const { username, password, hostname, port } = AppParam.parsedSocks5Address;
  const socket = connect({
    hostname,
    // SOCKS5 服务器的主机名
    port
    // SOCKS5 服务器的端口
  });
  const socksGreeting = new Uint8Array([5, 2, 0, 2]);
  const writer = socket.writable.getWriter();
  await writer.write(socksGreeting);
  log("\u5DF2\u53D1\u9001 SOCKS5 \u95EE\u5019\u6D88\u606F");
  const reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  let res = (await reader.read()).value;
  if (res[0] !== 5) {
    log(`SOCKS5 \u670D\u52A1\u5668\u7248\u672C\u9519\u8BEF: \u6536\u5230 ${res[0]}\uFF0C\u671F\u671B\u662F 5`);
    return;
  }
  if (res[1] === 255) {
    log("\u670D\u52A1\u5668\u4E0D\u63A5\u53D7\u4EFB\u4F55\u8BA4\u8BC1\u65B9\u6CD5");
    return;
  }
  if (res[1] === 2) {
    log("SOCKS5 \u670D\u52A1\u5668\u9700\u8981\u8BA4\u8BC1");
    if (!username || !password) {
      log("\u8BF7\u63D0\u4F9B\u7528\u6237\u540D\u548C\u5BC6\u7801");
      return;
    }
    const authRequest = new Uint8Array([
      1,
      // 认证子协议版本
      username.length,
      // 用户名长度
      ...encoder.encode(username),
      // 用户名
      password.length,
      // 密码长度
      ...encoder.encode(password)
      // 密码
    ]);
    await writer.write(authRequest);
    res = (await reader.read()).value;
    if (res[0] !== 1 || res[1] !== 0) {
      log("SOCKS5 \u670D\u52A1\u5668\u8BA4\u8BC1\u5931\u8D25");
      return;
    }
  }
  let DSTADDR;
  switch (addressType) {
    case 1:
      DSTADDR = new Uint8Array(
        [1, ...addressRemote.split(".").map(Number)]
      );
      break;
    case 2:
      DSTADDR = new Uint8Array(
        [3, addressRemote.length, ...encoder.encode(addressRemote)]
      );
      break;
    case 3:
      DSTADDR = new Uint8Array(
        [4, ...addressRemote.split(":").flatMap((x) => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]
      );
      break;
    default:
      log(`\u65E0\u6548\u7684\u5730\u5740\u7C7B\u578B: ${addressType}`);
      return;
  }
  const socksRequest = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 255]);
  await writer.write(socksRequest);
  log("\u5DF2\u53D1\u9001 SOCKS5 \u8BF7\u6C42");
  res = (await reader.read()).value;
  if (res[1] === 0) {
    log("SOCKS5 \u8FDE\u63A5\u5DF2\u5EFA\u7ACB");
  } else {
    log("SOCKS5 \u8FDE\u63A5\u5EFA\u7ACB\u5931\u8D25");
    return;
  }
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}
__name(socks5Connect, "socks5Connect");
async function sendMessage(type, ip, add_data = "") {
  if (AppParam.BotToken !== "" && AppParam.ChatID !== "") {
    let msg = "";
    const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
    if (response.status == 200) {
      const ipInfo = await response.json();
      msg = `${type}
IP: ${ip}
\u56FD\u5BB6: ${ipInfo.country}
<tg-spoiler>\u57CE\u5E02: ${ipInfo.city}
\u7EC4\u7EC7: ${ipInfo.org}
ASN: ${ipInfo.as}
${add_data}`;
    } else {
      msg = `${type}
IP: ${ip}
<tg-spoiler>${add_data}`;
    }
    let url = "https://api.telegram.org/bot" + AppParam.BotToken + "/sendMessage?chat_id=" + AppParam.ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
    return fetch(url, {
      method: "get",
      headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "Mozilla/5.0 Chrome/90.0.4430.72"
      }
    });
  }
}
__name(sendMessage, "sendMessage");

// src/_worker.js
if (!CommonUtils.isValidUUID(AppParam.userID)) {
  throw new Error("uuid is not valid");
}
var worker_default = {
  /**
   * @param {import('@cloudflare/workers-types').Request} request
   * @param {{UUID: string, PROXYIP: string}} env
   * @param {import('@cloudflare/workers-types').ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env) {
    try {
      const { UA, userAgent, upgradeHeader, url } = await initParam(request, env);
      let pathName = url.pathname.toLowerCase();
      if (!upgradeHeader || upgradeHeader !== "websocket") {
        switch (pathName) {
          case "/":
            return await index(env, request);
          case `/${AppParam.fakeUserID}`:
            const fakeConfig = await SubUtils.getVLESSConfig(AppParam.userID, request.headers.get("Host"), AppParam.sub, "CF-Workers-SUB", AppParam.RproxyIP, url, request);
            return new Response(`${fakeConfig}`, { status: 200 });
          case `/${AppParam.userID}`:
            return await getSubInfo(request, UA, url, env, userAgent);
          default:
            return new Response("Not found", { status: 404 });
        }
      } else {
        AppParam.proxyIP = url.searchParams.get("proxyip") || AppParam.proxyIP;
        if (new RegExp("/proxyip=", "i").test(url.pathname)) {
          AppParam.proxyIP = pathName.split("/proxyip=")[1];
        } else if (new RegExp("/proxyip.", "i").test(url.pathname)) {
          AppParam.proxyIP = `proxyip.${pathName.split("/proxyip.")[1]}`;
        }
        AppParam.socks5Address = url.searchParams.get("socks5") || AppParam.socks5Address;
        if (new RegExp("/socks5=", "i").test(url.pathname)) {
          AppParam.socks5Address = url.pathname.split("5=")[1];
        } else if (new RegExp("/socks://", "i").test(url.pathname) || new RegExp("/socks5://", "i").test(url.pathname)) {
          AppParam.socks5Address = url.pathname.split("://")[1].split("#")[0];
          if (AppParam.socks5Address.includes("@")) {
            let userPassword = AppParam.socks5Address.split("@")[0];
            const base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
            if (base64Regex.test(userPassword) && !userPassword.includes(":"))
              userPassword = atob(userPassword);
            AppParam.socks5Address = `${userPassword}@${AppParam.socks5Address.split("@")[1]}`;
          }
        }
        if (AppParam.socks5Address) {
          try {
            AppParam.parsedSocks5Address = CommonUtils.socks5AddressParser(AppParam.socks5Address);
            AppParam.enableSocks = true;
          } catch (err) {
            let e = err;
            console.log(e.toString());
            AppParam.enableSocks = false;
          }
        } else {
          AppParam.enableSocks = false;
        }
        return await vlessOverWSHandler(request);
      }
    } catch (err) {
      let e = err;
      return new Response(e.toString());
    }
  }
};
async function initParam(request, env) {
  const UA = request.headers.get("User-Agent") || "null";
  const userAgent = UA.toLowerCase();
  AppParam.userID = (env.UUID || AppParam.userID).toLowerCase();
  const url = new URL(request.url);
  const currentDate = /* @__PURE__ */ new Date();
  currentDate.setHours(0, 0, 0, 0);
  const timestamp = Math.ceil(currentDate.getTime() / 1e3);
  const fakeUserIDMD5 = await CommonUtils.MD5MD5(`${AppParam.userID}${timestamp}`);
  AppParam.fakeUserID = fakeUserIDMD5.slice(0, 8) + "-" + fakeUserIDMD5.slice(8, 12) + "-" + fakeUserIDMD5.slice(12, 16) + "-" + fakeUserIDMD5.slice(16, 20) + "-" + fakeUserIDMD5.slice(20);
  AppParam.fakeHostName = fakeUserIDMD5.slice(6, 9) + "." + fakeUserIDMD5.slice(13, 19);
  AppParam.proxyIP = env.PROXYIP || AppParam.proxyIP;
  AppParam.proxyIPs = await CommonUtils.ADD(AppParam.proxyIP);
  AppParam.proxyIP = AppParam.proxyIPs[Math.floor(Math.random() * AppParam.proxyIPs.length)];
  AppParam.socks5Address = env.SOCKS5 || AppParam.socks5Address;
  AppParam.socks5s = await CommonUtils.ADD(AppParam.socks5Address);
  AppParam.socks5Address = AppParam.socks5s[Math.floor(Math.random() * AppParam.socks5s.length)];
  AppParam.socks5Address = AppParam.socks5Address.split("//")[1] || AppParam.socks5Address;
  AppParam.sub = env.SUB || AppParam.sub;
  AppParam.subconverter = env.SUBAPI || AppParam.subconverter;
  let cIndex = url.searchParams.get("cIndex");
  AppParam.subconverter = AppParam.subconverters[cIndex] || env.SUBAPI || AppParam.subconverters[0];
  if (AppParam.subconverter.includes("http://")) {
    AppParam.subconverter = AppParam.subconverter.split("//")[1];
    AppParam.subProtocol = "http";
  } else {
    AppParam.subconverter = AppParam.subconverter.split("//")[1] || AppParam.subconverter;
  }
  AppParam.subconfig = env.SUBCONFIG || AppParam.subconfig;
  if (AppParam.socks5Address) {
    try {
      AppParam.parsedSocks5Address = CommonUtils.socks5AddressParser(AppParam.socks5Address);
      AppParam.RproxyIP = env.RPROXYIP || "false";
      AppParam.enableSocks = true;
    } catch (err) {
      let e = err;
      console.log(e.toString());
      AppParam.RproxyIP = env.RPROXYIP || !AppParam.proxyIP ? "true" : "false";
      AppParam.enableSocks = false;
    }
  } else {
    AppParam.RproxyIP = env.RPROXYIP || !AppParam.proxyIP ? "true" : "false";
  }
  if (env.ADD)
    AppParam.addresses = await CommonUtils.ADD(env.ADD);
  if (env.ADDAPI)
    AppParam.addressesapi = await CommonUtils.ADD(env.ADDAPI);
  if (env.ADDNOTLS)
    AppParam.addressesnotls = await CommonUtils.ADD(env.ADDNOTLS);
  if (env.ADDNOTLSAPI)
    AppParam.addressesnotlsapi = await CommonUtils.ADD(env.ADDNOTLSAPI);
  if (env.ADDCSV)
    AppParam.addressescsv = await CommonUtils.ADD(env.ADDCSV);
  AppParam.DLS = env.DLS || AppParam.DLS;
  AppParam.BotToken = env.TGTOKEN || AppParam.BotToken;
  AppParam.ChatID = env.TGID || AppParam.ChatID;
  if (env.GO2SOCKS5)
    AppParam.go2Socks5s = await CommonUtils.ADD(env.GO2SOCKS5);
  const upgradeHeader = request.headers.get("Upgrade");
  if (url.searchParams.has("sub") && url.searchParams.get("sub") !== "")
    AppParam.sub = url.searchParams.get("sub");
  AppParam.FileName = env.SUBNAME || AppParam.FileName;
  if (url.searchParams.has("notls"))
    AppParam.noTLS = "true";
  return { UA, userAgent, upgradeHeader, url };
}
__name(initParam, "initParam");
async function index(env, request) {
  const envKey = env.URL302 ? "URL302" : env.URL ? "URL" : null;
  if (envKey) {
    const URLs = await CommonUtils.ADD(env[envKey]);
    const URL2 = URLs[Math.floor(Math.random() * URLs.length)];
    return envKey === "URL302" ? Response.redirect(URL2, 302) : fetch(new Request(URL2, request));
  }
  return new Response(JSON.stringify(request.cf, null, 4), { status: 200 });
}
__name(index, "index");
async function getSubInfo(request, UA, url, env, userAgent) {
  await sendMessage(`#\u83B7\u53D6\u8BA2\u9605 ${AppParam.FileName}`, request.headers.get("CF-Connecting-IP"), `UA: ${UA}</tg-spoiler>
\u57DF\u540D: ${url.hostname}
<tg-spoiler>\u5165\u53E3: ${url.pathname + url.search}</tg-spoiler>`);
  const vlessConfig = await SubUtils.getVLESSConfig(AppParam.userID, request.headers.get("Host"), AppParam.sub, UA, AppParam.RproxyIP, url, request);
  const now = Date.now();
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const UD = Math.floor((now - today.getTime()) / 864e5 * 24 * 1099511627776 / 2);
  let pagesSum = UD;
  let workersSum = UD;
  let total = 24 * 1099511627776;
  if (env.CFEMAIL && env.CFKEY) {
    const email = env.CFEMAIL;
    const key = env.CFKEY;
    const accountIndex = env.CFID || 0;
    const accountId = await SubUtils.getAccountId(email, key);
    if (accountId) {
      const now2 = /* @__PURE__ */ new Date();
      now2.setUTCHours(0, 0, 0, 0);
      const startDate = now2.toISOString();
      const endDate = (/* @__PURE__ */ new Date()).toISOString();
      const Sum = await SubUtils.getSum(accountId, accountIndex, email, key, startDate, endDate);
      pagesSum = Sum[0];
      workersSum = Sum[1];
      total = 102400;
    }
  }
  if (userAgent && userAgent.includes("mozilla")) {
    return new Response(`${vlessConfig}`, {
      status: 200,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        "Profile-Update-Interval": "6",
        "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${AppParam.expire}`
      }
    });
  } else {
    return new Response(`${vlessConfig}`, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename=${AppParam.FileName}; filename*=utf-8''${encodeURIComponent(AppParam.FileName)}`,
        "Content-Type": "text/plain;charset=utf-8",
        "Profile-Update-Interval": "6",
        "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${AppParam.expire}`
      }
    });
  }
}
__name(getSubInfo, "getSubInfo");

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-EhNwNK/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-EhNwNK/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=_worker.js.map
