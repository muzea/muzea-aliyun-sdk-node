export interface DissociateAclsFromListenerRequest {
    /**
     * ACL实例ID列表。
     */
    "AclIds": string[];
    /**
     * 监听实例ID。
     * @example `lsn-bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会将ACL与监听解除关联。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3******`
     */
    "ClientToken"?: string;
}
