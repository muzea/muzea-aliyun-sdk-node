export interface StartBEClusterRequest {
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `selectdb-cn-7213c8yvv09-be`
     */
    "DBClusterId": string;
}
