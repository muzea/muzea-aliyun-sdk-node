export interface DeleteCustomerGatewayRequest {
    /**
     * 用户网关所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04****`
     */
    "ClientToken"?: string;
    /**
     *  用户网关的实例ID。
     * @example `cgw-bp1pvpl9r9adju6l5****`
     */
    "CustomerGatewayId": string;
}
