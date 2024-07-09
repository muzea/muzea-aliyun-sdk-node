export interface CreateTopicRouteTableRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 源Topic，即被订阅的Topic。如`SrcTopic=/x7aWKW9****​/testDataToDataHub/user/update`。
     * @example `/x7aWKW9****​/testDataToDataHub/user/update`
     */
    "SrcTopic": string;
    /**
     * 目标Topic列表，即从**SrcTopic**订阅消息的Topic列表。即使只有一个Topic，也使用数组格式。如`DstTopic.1=/x7aWKW9****​/deviceNameTest1/user/add`，`DstTopic.2=/x7aWKW9****​/deviceNameTest2/user/delete`。
     * @example `/x7aWKW9****​/deviceNameTest1/user/add`
     */
    "DstTopic": string[];
}
