// let host = "weixin.hengkangit.com"
let host = "localhost:15572"
let config = {
    host,
    // 登录地址，用于建立会话
    getSessionKey: `http://${host}/api/WxMini/GetSessionKey`,
}

module.exports = config
