......
//设置标签
var clientTags = "Tags" + site.UserId;
var pushPayload = new PushPayload();
pushPayload.platform = Platform.all();
pushPayload.options.apns_production = true; //使用生成环境证书推送消息
pushPayload.audience = Audience.s_tag(clientTags);
//设置推送的消息内容
pushPayload.notification = new Notification().setAlert("站点\"" + (string.IsNullOrEmpty(site.SiteNickName) ? site.SiteName : site.SiteNickName) + "\"目前无法连通！");
//可以通过 API 设置自定义的推送消息铃声
pushPayload.notification.IosNotification =
    new IosNotification().setSound("buguniao.wav").autoBadge();

var client = new JPushClient(app_key, master_secret);
MessageResult result = new MessageResult();
try
{
    //请求极光推送平台
    result = client.SendPush(pushPayload);
    //你可以在消息发送后在数据库中记录一些日志信息
    var loger = new GuGuJianKong.Data.EntityClasses.SystemLogerEntity
    {
        LogerType = "jPush Success",
        UserId = site.UserId,
        LogerContent = "jPush Success: " + site.SiteNickName
    };
    loger.Save();
    //保存推送的日志消息，供客户端查看
    var message = new AppPushMessageEntity
    {
        UserId = site.UserId,
        SiteId = site.SiteId,
        MessageTitle = (string.IsNullOrEmpty(site.SiteNickName) ? site.SiteName : site.SiteNickName) + "宕机提醒",
        MessageContent = "站点\"" + (string.IsNullOrEmpty(site.SiteNickName) ? site.SiteName : site.SiteNickName) + "\"无法连通！",
        MessageReadStatus = false,
        NotifyType = "ServerDown",
        FromModule = "GuGuJianKong.Monitor.TestOnline",
        CreateDateTime = DateTime.Now
    };
    message.Save();
}
//异常处理
catch (cn.jpush.api.common.APIRequestException exception)
{
    var appendError = ", MessageResult - Code: " + exception.ErrorCode + ", Error: " + exception.ErrorMessage;
    var loger = new SystemLogerEntity
    {
        LogerType = "jPush Failed",
        UserId = site.UserId,
        LogerContent = "jPush Failed: " + site.SiteUrl + appendError
    };
    loger.Save();
}
catch (cn.jpush.api.common.resp.APIConnectionException exception)
{
    if (exception.InnerException != null)
    {
        var appendError = ", MessageResult - Error: " + exception.InnerException.Message;
        var loger = new SystemLogerEntity
        {
            LogerType = "jPush Failed",
            UserId = site.UserId,
            LogerContent = "jPush Failed: " + site.SiteUrl + appendError
        };
        loger.Save();
    }
}
catch (Exception e)
{
    //常规日志处理
    ...
}
......