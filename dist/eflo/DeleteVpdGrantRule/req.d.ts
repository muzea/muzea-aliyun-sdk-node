export interface DeleteVpdGrantRuleRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 授权条目ID
     * @example `grant-rule-9rgxqazb`
     */
    "GrantRuleId": string;
    /**
     * 网络实例ID
     * @example `vpd-8rgvqazb`
     */
    "InstanceId"?: string;
    /**
     * 授权租户ID
     * @example `1013666993027780`
     */
    "GrantTenantId"?: string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId"?: string;
}
