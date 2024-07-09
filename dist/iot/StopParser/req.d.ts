export interface StopParserRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-n8t***`
     */
    "IotInstanceId"?: string;
    /**
     * 解析器ID。您可调用接口[ListParsers](~~429046~~)，查询解析器列表，获取**ParserId**。
     * @example `1001`
     */
    "ParserId": number;
}
