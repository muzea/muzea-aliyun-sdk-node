interface DM {
    DeleteInvalidAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ToAddress"?: string;
    }): Promise<{}>;
    GetIpProtection(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    AddIpfilter(query: {
        "RegionId"?: string;
        "IpAddress": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ApproveMailTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    ApproveReplyMailAddress(query: {
        "RegionId"?: string;
        "Ticket": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ApproveSmsTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    ApproveTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    BatchSendMail(query: {
        "RegionId"?: string;
        "TemplateName": string;
        "AccountName": string;
        "ReceiversName": string;
        "AddressType": number;
        "OwnerId"?: number;
        "TagName"?: string;
        "ReplyAddress"?: string;
        "ReplyAddressAlias"?: string;
        "ClickTrace"?: string;
    }): Promise<{}>;
    CheckDomain(query: {
        "RegionId"?: string;
        "DomainId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    CheckInvalidAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ToAddress"?: string;
    }): Promise<{}>;
    CheckReplyToMailAddress(query: {
        "RegionId"?: string;
        "MailAddressId": number;
        "OwnerId"?: number;
        "Lang"?: string;
        "Region"?: string;
    }): Promise<{}>;
    CreateDayu(query: {
        "RegionId"?: string;
        "AccountType": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateDomain(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateMailAddress(query: {
        "RegionId"?: string;
        "AccountName": string;
        "Sendtype": string;
        "OwnerId"?: number;
        "ReplyAddress"?: string;
    }): Promise<{}>;
    CreateReceiver(query: {
        "RegionId"?: string;
        "ReceiversName": string;
        "ReceiversAlias": string;
        "OwnerId"?: number;
        "Desc"?: string;
    }): Promise<{}>;
    CreateSign(query: {
        "RegionId"?: string;
        "SignName": string;
        "OwnerId"?: number;
        "Remark"?: string;
        "SignType"?: number;
        "FileNames"?: string;
        "FromType"?: number;
    }): Promise<{}>;
    CreateTag(query: {
        "RegionId"?: string;
        "TagName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateTemplate(query: {
        "RegionId"?: string;
        "TemplateName": string;
        "OwnerId"?: number;
        "TemplateType"?: number;
        "TemplateSubject"?: string;
        "TemplateNickName"?: string;
        "TemplateText"?: string;
        "SmsType"?: number;
        "SmsContent"?: string;
        "Remark"?: string;
        "FromType"?: number;
    }): Promise<{}>;
    DeleteDomain(query: {
        "RegionId"?: string;
        "DomainId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteIpfilterByEdmId(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "FromType"?: number;
        "Id"?: string;
    }): Promise<{}>;
    DeleteMailAddress(query: {
        "RegionId"?: string;
        "MailAddressId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteReceiver(query: {
        "RegionId"?: string;
        "ReceiverId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteReceiverDetail(query: {
        "RegionId"?: string;
        "ReceiverId": string;
        "OwnerId"?: number;
        "Email"?: string;
    }): Promise<{}>;
    DeleteSign(query: {
        "RegionId"?: string;
        "SignId": number;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    DeleteTag(query: {
        "RegionId"?: string;
        "TagId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    DescAccountSummary(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescAccountSummary2(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    DescDomain(query: {
        "RegionId"?: string;
        "DomainId": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    EnableAccount(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    GetAccountList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "Total"?: string;
        "Offset"?: string;
        "PageSize"?: string;
        "OffsetCreateTime"?: string;
        "OffsetCreateTimeDesc"?: string;
        "PageNumber"?: string;
    }): Promise<{}>;
    GetIpfilterList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    GetMailAddressMsgCallBackUrl(query: {
        "RegionId"?: string;
        "MailFrom": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    GetRegionList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "Total"?: string;
        "Offset"?: string;
        "PageSize"?: string;
        "OffsetCreateTime"?: string;
        "OffsetCreateTimeDesc"?: string;
        "PageNumber"?: string;
    }): Promise<{}>;
    GetSenderAddressList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "Total"?: string;
        "Offset"?: string;
        "PageSize"?: string;
        "PageNo"?: string;
        "Keyword"?: string;
        "NotifyUrl"?: string;
    }): Promise<{}>;
    GetTrackList(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "Total"?: string;
        "Offset"?: string;
        "PageSize"?: string;
        "OffsetCreateTime"?: string;
        "OffsetCreateTimeDesc"?: string;
        "PageNumber"?: string;
    }): Promise<{}>;
    GetTrackListByMailFromAndTagName(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "Total"?: string;
        "OwnerId"?: number;
        "Offset"?: string;
        "PageSize"?: string;
        "OffsetCreateTime"?: string;
        "OffsetCreateTimeDesc"?: string;
        "PageNumber"?: string;
        "AccountName"?: string;
        "TagName"?: string;
    }): Promise<{}>;
    MigrateMarket(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "Version"?: string;
        "FromType"?: number;
    }): Promise<{}>;
    ModifyAccountNotification(query: {
        "RegionId"?: string;
        "Status": string;
        "OwnerId"?: number;
        "Region"?: string;
    }): Promise<{}>;
    ModifyMailAddress(query: {
        "RegionId"?: string;
        "MailAddressId": number;
        "OwnerId"?: number;
        "ReplyAddress"?: string;
        "Password"?: string;
    }): Promise<{}>;
    ModifyPWByDomain(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Password": string;
    }): Promise<{}>;
    ModifySenderAddressNotification(query: {
        "RegionId"?: string;
        "SenderAddressId": string;
        "SenderAddress": string;
        "Region": string;
        "Status": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyTag(query: {
        "RegionId"?: string;
        "TagId": number;
        "TagName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "TemplateName": string;
        "OwnerId"?: number;
        "TemplateSubject"?: string;
        "TemplateNickName"?: string;
        "TemplateText"?: string;
        "SmsType"?: number;
        "SmsContent"?: string;
        "Remark"?: string;
        "FromType"?: number;
    }): Promise<{}>;
    QueryDomainByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "Status"?: number;
    }): Promise<{}>;
    QueryInvalidAddress(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
        "KeyWord"?: string;
        "Length"?: number;
        "NextStart"?: string;
    }): Promise<{}>;
    QueryMailAddressByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "Sendtype"?: string;
    }): Promise<{}>;
    QueryReceiverByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "Status"?: number;
    }): Promise<{}>;
    QueryReceiverDetail(query: {
        "RegionId"?: string;
        "ReceiverId": string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "NextStart"?: string;
    }): Promise<{}>;
    QuerySignByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "FromType"?: number;
    }): Promise<{}>;
    QuerySmsStatistics(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    QueryTagByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
    }): Promise<{}>;
    QueryTaskByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "Status"?: number;
    }): Promise<{}>;
    QueryTemplateByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageNo"?: number;
        "PageSize"?: number;
        "KeyWord"?: string;
        "Status"?: number;
        "FromType"?: number;
    }): Promise<{}>;
    SaveReceiverDetail(query: {
        "RegionId"?: string;
        "ReceiverId": string;
        "Detail": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SendTestByTemplate(query: {
        "RegionId"?: string;
        "TemplateId": number;
        "AccountName": string;
        "Email": string;
        "OwnerId"?: number;
        "UserName"?: string;
        "NickName"?: string;
        "Birthday"?: string;
        "Gender"?: string;
        "Mobile"?: string;
    }): Promise<{}>;
    SenderStatisticsByTagNameAndBatchID(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "AccountName"?: string;
        "TagName"?: string;
    }): Promise<{}>;
    SenderStatisticsDetailByParam(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "AccountName"?: string;
        "ToAddress"?: string;
        "Status"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
        "TagName"?: string;
        "Length"?: number;
        "NextStart"?: string;
    }): Promise<{}>;
    SingleSendMail(query: {
        "RegionId"?: string;
        "AccountName": string;
        "AddressType": number;
        "ReplyToAddress": boolean;
        "ToAddress": string;
        "Subject": string;
        "OwnerId"?: number;
        "TagName"?: string;
        "HtmlBody"?: string;
        "TextBody"?: string;
        "FromAlias"?: string;
        "ReplyAddress"?: string;
        "ReplyAddressAlias"?: string;
        "ClickTrace"?: string;
    }): Promise<{}>;
    SingleSendSms(query: {
        "RegionId"?: string;
        "SignName": string;
        "TemplateCode": string;
        "RecNum": string;
        "ParamString": string;
        "OwnerId"?: number;
        "Version"?: string;
    }): Promise<{}>;
    UpdateDomainTrackName(query: {
        "RegionId"?: string;
        "DomainId": number;
        "CnameTrackRecord": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UpdateIpProtection(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "IpProtection"?: string;
    }): Promise<{}>;
    UpdateMailAddressMsgCallBackUrl(query: {
        "RegionId"?: string;
        "MailFrom": string;
        "OwnerId"?: number;
        "NotifyUrl"?: string;
    }): Promise<{}>;
}
export default DM;
