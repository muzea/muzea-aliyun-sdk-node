export interface CreateTransitRouterRouteEntryRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 路由条目的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterRouteEntryName"?: string;
    /**
     * 路由条目的描述。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterRouteEntryDescription"?: string;
    /**
     * 企业版转发路由器的路由表ID。
     * @example `vtb-bp1dudbh2d5na6b50****`
     */
    "TransitRouterRouteTableId": string;
    /**
     * 下一跳类型。取值：
     * - **BlackHole**：表示指定该路由条目为黑洞路由。所有去往目标网段的路由均会被丢弃，无需指定具体的下一跳信息。
     * - **Attachment**：表示指定该路由条目的下一跳为网络实例连接，且需要指定具体的网络实例连接ID。所有去往目标网段的路由均会被转发至指定的网络实例连接。
     * @example `BlackHole`
     */
    "TransitRouterRouteEntryNextHopType": string;
    /**
     * 路由条目的目标网段。
     * @example `192.168.0.0/24`
     */
    "TransitRouterRouteEntryDestinationCidrBlock": string;
    /**
     * 路由条目的下一跳所关联的网络实例连接ID。
     * @example `tr-attach-nls9fzkfat8934****`
     */
    "TransitRouterRouteEntryNextHopId"?: string;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，通过检查后直接创建路由条目。
     * - **true**：发送检查请求，只进行校验，不会创建路由条目。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
}
