export interface DeleteAggregateCompliancePacksRequest {
    /**
     * 合规包ID。多个合规包ID之间用半角逗号（,）分隔。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-541e626622af0087****`
     */
    "CompliancePackIds": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-04b3fd170e340007****`
     */
    "AggregatorId": string;
    /**
     * 删除合规包时是否同时删除规则。取值：
     * - true：删除规则。
     * - false（默认值）：不删除规则。
     * @example `false`
     */
    "DeleteRule"?: boolean;
}
