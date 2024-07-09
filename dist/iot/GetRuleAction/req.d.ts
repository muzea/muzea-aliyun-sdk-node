export interface GetRuleActionRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询的规则动作ID。
     * 您可以通过以下方式查询规则动作ID：
     * - 调用[CreateRuleAction](~~69586~~)，返回的**ActionId**参数值。
     * - 调用[ListRuleActions](~~69517~~)，返回的**Id**参数值。
     * @example `100001`
     */
    "ActionId": number;
}
