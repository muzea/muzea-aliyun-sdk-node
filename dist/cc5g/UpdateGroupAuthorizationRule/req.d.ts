export interface UpdateGroupAuthorizationRuleRequest {
    /**
     * 实例组id。
     * @example `cc5gg-****`
     */
    "WirelessCloudConnectorGroupId": string;
    /**
     * 授权规则id。
     * @example `ar5gg-xxxx`
     */
    "AuthorizationRuleId": string;
    /**
     * 授权规则名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 授权规则描述，长度不超过256字符。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 源CIDR地址块。
     * @example `192.168.0.1`
     */
    "SourceCidr"?: string;
    /**
     * 访问目标。
     * @example `192.168.XX.XX`
     */
    "Destination"?: string;
    /**
     * 协议类型。取值：
     * - **tcp**。
     * - **udp**。
     * - **icmp**。
     * - **all**：支持所有协议。
     * @example `all`
     */
    "Protocol"?: string;
    /**
     * 目标端口范围。取值范围：
     * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
     * - ICMP协议：-1/-1。
     * - ALL：-1/-1。
     * @example `80/80
    `
     */
    "DestinationPort"?: string;
    /**
     * 授权规则策略，取值：
     * - **Permit**：允许
     * - **Deny**：拒绝
     * @example `Permit`
     */
    "Policy"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会删除实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并删除实例。
     * @example `true`
     */
    "DryRun"?: boolean;
}
