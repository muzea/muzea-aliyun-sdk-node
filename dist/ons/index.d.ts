interface ONS {
    OnsConsumerResetOffset(query: {
        "RegionId"?: string;
        "Topic": string;
        "Type": number;
        "GroupId": string;
        "ResetTimestamp"?: number;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMessageSend(query: {
        "RegionId"?: string;
        "Message": string;
        "Topic": string;
        "Tag"?: string;
        "Key"?: string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsConsumerAccumulate(query: {
        "RegionId"?: string;
        "GroupId": string;
        "Detail"?: boolean;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsConsumerGetConnection(query: {
        "RegionId"?: string;
        "GroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsConsumerStatus(query: {
        "RegionId"?: string;
        "GroupId": string;
        "Detail"?: boolean;
        "NeedJstack"?: boolean;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsConsumerTimeSpan(query: {
        "RegionId"?: string;
        "Topic": string;
        "GroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsDLQMessageGetById(query: {
        "RegionId"?: string;
        "GroupId": string;
        "MsgId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsDLQMessagePageQueryByGroupId(query: {
        "RegionId"?: string;
        "BeginTime": number;
        "EndTime": number;
        "CurrentPage": number;
        "GroupId": string;
        "TaskId"?: string;
        "PageSize"?: number;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsDLQMessageResendById(query: {
        "RegionId"?: string;
        "GroupId": string;
        "MsgId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsGroupDelete(query: {
        "RegionId"?: string;
        "InstanceId"?: string;
        "GroupId": string;
    }): Promise<{}>;
    OnsGroupList(query: {
        "RegionId"?: string;
        "InstanceId"?: string;
        "GroupId"?: string;
    }): Promise<{}>;
    OnsGroupSubDetail(query: {
        "RegionId"?: string;
        "GroupId": string;
        "InstanceId": string;
    }): Promise<{}>;
    OnsInstanceBaseInfo(query: {
        "RegionId"?: string;
        "InstanceId": string;
    }): Promise<{}>;
    OnsInstanceDelete(query: {
        "RegionId"?: string;
        "InstanceId": string;
    }): Promise<{}>;
    OnsInstanceInServiceList(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    OnsInstanceUpdate(query: {
        "RegionId"?: string;
        "InstanceName"?: string;
        "InstanceId": string;
        "Remark"?: string;
    }): Promise<{}>;
    OnsMessageGetByKey(query: {
        "RegionId"?: string;
        "Key": string;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMessageGetByMsgId(query: {
        "RegionId"?: string;
        "Topic": string;
        "MsgId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMessagePageQueryByTopic(query: {
        "RegionId"?: string;
        "BeginTime": number;
        "EndTime": number;
        "CurrentPage": number;
        "Topic": string;
        "TaskId"?: string;
        "PageSize"?: number;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMessageTrace(query: {
        "RegionId"?: string;
        "MsgId": string;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttGroupIdCreate(query: {
        "RegionId": string;
        "GroupId": string;
        "Topic"?: string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttGroupIdDelete(query: {
        "RegionId": string;
        "GroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttGroupIdList(query: {
        "RegionId"?: string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttQueryClientByClientId(query: {
        "RegionId"?: string;
        "ClientId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttQueryClientByGroupId(query: {
        "RegionId"?: string;
        "GroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttQueryClientByTopic(query: {
        "RegionId"?: string;
        "SubTopic": string;
        "ParentTopic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttQueryMsgTransTrend(query: {
        "RegionId"?: string;
        "TransType": string;
        "ParentTopic": string;
        "BeginTime": number;
        "EndTime": number;
        "TpsType": string;
        "SubTopic"?: string;
        "MsgType"?: string;
        "Qos"?: number;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsRegionList(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    OnsTopicDelete(query: {
        "RegionId"?: string;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsTopicList(query: {
        "RegionId"?: string;
        "Topic"?: string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsTopicStatus(query: {
        "RegionId"?: string;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsTopicSubDetail(query: {
        "RegionId"?: string;
        "Topic": string;
        "InstanceId": string;
    }): Promise<{}>;
    OnsTopicUpdate(query: {
        "RegionId"?: string;
        "Perm": number;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsTraceGetResult(query: {
        "RegionId"?: string;
        "QueryId": string;
    }): Promise<{}>;
    OnsTraceQueryByMsgId(query: {
        "RegionId"?: string;
        "MsgId": string;
        "BeginTime": number;
        "EndTime": number;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsTrendGroupOutputTps(query: {
        "RegionId"?: string;
        "Topic": string;
        "BeginTime": number;
        "EndTime": number;
        "Type": number;
        "GroupId": string;
        "InstanceId"?: string;
        "Period"?: number;
    }): Promise<{}>;
    OnsTrendTopicInputTps(query: {
        "RegionId"?: string;
        "BeginTime": number;
        "EndTime": number;
        "Type": number;
        "Topic": string;
        "InstanceId"?: string;
        "Period"?: number;
    }): Promise<{}>;
    OnsWarnCreate(query: {
        "RegionId"?: string;
        "Topic": string;
        "Threshold": string;
        "Contacts": string;
        "DelayTime": string;
        "BlockTime": string;
        "AlertTime": string;
        "Level": string;
        "InstanceId"?: string;
        "GroupId": string;
    }): Promise<{}>;
    OnsWarnDelete(query: {
        "RegionId"?: string;
        "Topic": string;
        "InstanceId"?: string;
        "GroupId": string;
    }): Promise<{}>;
    OnsGroupConsumerUpdate(query: {
        "RegionId"?: string;
        "ReadEnable": boolean;
        "InstanceId"?: string;
        "GroupId": string;
    }): Promise<{}>;
    OnsGroupCreate(query: {
        "RegionId"?: string;
        "InstanceId"?: string;
        "GroupId": string;
        "Remark"?: string;
    }): Promise<{}>;
    OnsInstanceCreate(query: {
        "RegionId"?: string;
        "InstanceName": string;
        "Remark"?: string;
    }): Promise<{}>;
    OnsMessagePush(query: {
        "RegionId"?: string;
        "ClientId": string;
        "MsgId": string;
        "Topic": string;
        "GroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsMqttQueryHistoryOnline(query: {
        "RegionId"?: string;
        "BeginTime": number;
        "EndTime": number;
        "GroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    OnsTopicCreate(query: {
        "RegionId"?: string;
        "MessageType": number;
        "InstanceId"?: string;
        "Topic": string;
        "Remark"?: string;
    }): Promise<{}>;
    OnsTraceQueryByMsgKey(query: {
        "RegionId"?: string;
        "MsgKey": string;
        "BeginTime": number;
        "EndTime": number;
        "Topic": string;
        "InstanceId"?: string;
    }): Promise<{}>;
}
export default ONS;
