interface PUSH {
    ListPushRecords(query: {
        "RegionId"?: string;
        "AppKey": number;
        "PushType": string;
        "StartTime": string;
        "EndTime": string;
        "Page"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    QueryTags(query: {
        "RegionId"?: string;
        "AppKey": number;
        "ClientKey": string;
        "KeyType": string;
    }): Promise<{}>;
    PushMessageToiOS(query: {
        "RegionId"?: string;
        "AppKey": number;
        "Target": string;
        "TargetValue": string;
        "Title": string;
        "Body": string;
        "JobKey"?: string;
    }): Promise<{}>;
    BindPhone(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
        "PhoneNumber": string;
    }): Promise<{}>;
    BindTag(query: {
        "RegionId"?: string;
        "AppKey": number;
        "ClientKey": string;
        "KeyType": string;
        "TagName": string;
    }): Promise<{}>;
    CheckDevice(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
    }): Promise<{}>;
    QueryAliases(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
    }): Promise<{}>;
    QueryDeviceInfo(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
    }): Promise<{}>;
    QueryDeviceStat(query: {
        "RegionId"?: string;
        "AppKey": number;
        "StartTime": string;
        "EndTime": string;
        "DeviceType": string;
        "QueryType": string;
    }): Promise<{}>;
    QueryDevicesByAlias(query: {
        "RegionId"?: string;
        "AppKey": number;
        "Alias": string;
    }): Promise<{}>;
    QueryPushList(query: {
        "RegionId"?: string;
        "AppKey": number;
        "PushType": string;
        "StartTime": string;
        "EndTime": string;
        "Page"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    QueryPushStatByMsg(query: {
        "RegionId"?: string;
        "AppKey": number;
        "MessageId": number;
    }): Promise<{}>;
    RemoveTag(query: {
        "RegionId"?: string;
        "AppKey": number;
        "TagName": string;
    }): Promise<{}>;
    UnbindTag(query: {
        "RegionId"?: string;
        "AppKey": number;
        "ClientKey": string;
        "KeyType": string;
        "TagName": string;
    }): Promise<{}>;
    BindAlias(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
        "AliasName": string;
    }): Promise<{}>;
    CancelPush(query: {
        "RegionId"?: string;
        "AppKey": number;
        "MessageId": number;
    }): Promise<{}>;
    CheckDevices(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceIds": string;
    }): Promise<{}>;
    ListSummaryApps(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListTags(query: {
        "RegionId"?: string;
        "AppKey": number;
    }): Promise<{}>;
    Push(query: {
        "RegionId"?: string;
        "AppKey": number;
        "PushType": string;
        "DeviceType": string;
        "Target": string;
        "TargetValue": string;
        "Body": string;
        "Title"?: string;
        "JobKey"?: string;
        "SendSpeed"?: number;
        "StoreOffline"?: boolean;
        "PushTime"?: string;
        "ExpireTime"?: string;
        "iOSApnsEnv"?: string;
        "iOSRemind"?: boolean;
        "iOSRemindBody"?: string;
        "iOSBadge"?: number;
        "iOSBadgeAutoIncrement"?: boolean;
        "iOSSilentNotification"?: boolean;
        "iOSMusic"?: string;
        "iOSSubtitle"?: string;
        "iOSNotificationCategory"?: string;
        "iOSMutableContent"?: boolean;
        "iOSExtParameters"?: string;
        "AndroidNotifyType"?: string;
        "AndroidOpenType"?: string;
        "AndroidActivity"?: string;
        "AndroidMusic"?: string;
        "AndroidOpenUrl"?: string;
        "AndroidXiaoMiActivity"?: string;
        "AndroidXiaoMiNotifyTitle"?: string;
        "AndroidXiaoMiNotifyBody"?: string;
        "AndroidPopupActivity"?: string;
        "AndroidPopupTitle"?: string;
        "AndroidPopupBody"?: string;
        "AndroidNotificationBarType"?: number;
        "AndroidNotificationBarPriority"?: number;
        "AndroidExtParameters"?: string;
        "AndroidRemind"?: boolean;
        "AndroidNotificationChannel"?: string;
        "SmsTemplateName"?: string;
        "SmsSignName"?: string;
        "SmsParams"?: string;
        "SmsDelaySecs"?: number;
        "SmsSendPolicy"?: number;
    }): Promise<{}>;
    PushMessageToAndroid(query: {
        "RegionId"?: string;
        "AppKey": number;
        "Target": string;
        "TargetValue": string;
        "Title": string;
        "Body": string;
        "JobKey"?: string;
    }): Promise<{}>;
    PushNoticeToAndroid(query: {
        "RegionId"?: string;
        "AppKey": number;
        "Target": string;
        "TargetValue": string;
        "Title": string;
        "Body": string;
        "JobKey"?: string;
        "ExtParameters"?: string;
    }): Promise<{}>;
    PushNoticeToiOS(query: {
        "RegionId"?: string;
        "AppKey": number;
        "Target": string;
        "TargetValue": string;
        "ApnsEnv": string;
        "Body": string;
        "Title"?: string;
        "JobKey"?: string;
        "ExtParameters"?: string;
    }): Promise<{}>;
    QueryDevicesByAccount(query: {
        "RegionId"?: string;
        "AppKey": number;
        "Account": string;
    }): Promise<{}>;
    QueryPushStatByApp(query: {
        "RegionId"?: string;
        "AppKey": number;
        "StartTime": string;
        "EndTime": string;
        "Granularity": string;
    }): Promise<{}>;
    QueryUniqueDeviceStat(query: {
        "RegionId"?: string;
        "AppKey": number;
        "StartTime": string;
        "EndTime": string;
        "Granularity": string;
    }): Promise<{}>;
    UnbindAlias(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
        "AliasName"?: string;
        "UnbindAll"?: boolean;
    }): Promise<{}>;
    UnbindPhone(query: {
        "RegionId"?: string;
        "AppKey": number;
        "DeviceId": string;
    }): Promise<{}>;
}
export default PUSH;
