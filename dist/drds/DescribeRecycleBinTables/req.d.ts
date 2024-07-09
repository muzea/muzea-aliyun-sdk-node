export interface DescribeRecycleBinTablesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drds***********`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `drds_test`
     */
    "DbName": string;
}
