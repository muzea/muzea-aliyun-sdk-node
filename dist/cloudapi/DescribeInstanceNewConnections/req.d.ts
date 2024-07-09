export interface DescribeInstanceNewConnectionsRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-10-01T02:08:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-10-08T02:08:00Z`
     */
    "EndTime": string;
    /**
     * 实例id
     * @example `apigateway-cn-2r426lavr001`
     */
    "InstanceId": string;
    /**
     * 统计指标
     * - Maximum 最大
     * - Minimum 最小
     * - Average 平均
     * @example `Maximum`
     */
    "SbcName": string;
}
