export interface ModifyVpnPbrRouteEntryPriorityRequest {
    /**
     * VPN网关实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-henyuan`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `d7d24a21-f4ba-4454-9173-b3****`
     */
    "ClientToken"?: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1a3kqjiiq9legfx****`
     */
    "VpnGatewayId": string;
    /**
     * 策略路由的源网段。
     * @example `192.168.1.0/24`
     */
    "RouteSource": string;
    /**
     * 策略路由的目标网段。
     * @example `10.0.0.0/24`
     */
    "RouteDest": string;
    /**
     * 策略路由的下一跳。
     * @example `vco-bp15oes1py4i66rmd****`
     */
    "NextHop": string;
    /**
     * 策略路由原始的策略优先级。取值范围：**1**~**100**。
     * 策略优先级数字越小，策略路由的优先级越高。
     * @example `5`
     */
    "Priority"?: number;
    /**
     * 策略路由新的策略优先级。取值范围：**1**~**100**。
     * 策略优先级数字越小，策略路由的优先级越高。
     * @example `10`
     */
    "NewPriority": number;
    /**
     * 策略路由的权重值。
     * @example `100`
     */
    "Weight": number;
}
