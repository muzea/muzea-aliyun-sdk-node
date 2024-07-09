export interface DescribeTenantSecurityConfigsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId"?: string;
    /**
     * 安全检测的唯一标识。
     * @example `****`
     */
    "CheckId"?: string;
}
