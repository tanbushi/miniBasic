let host = "localhost:288"
let config = {
    host,
    // 登录地址，用于建立会话
    getSessionKey: `http://${host}/api/UserInfo/GetUser/Id`,
}

module.exports = config
