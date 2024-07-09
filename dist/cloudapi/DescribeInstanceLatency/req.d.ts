export interface DescribeInstanceLatencyRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-09-15T11:07:05Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-09-06T02:05:13Z`
     */
    "EndTime": string;
    /**
     * 指定要查询的环境。
     * - **RELEASE**：线上
     * - **PRE**：预发
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 实例id
     * @example `apigateway-cn-v641jf5tt01v`
     */
    "InstanceId": string;
}
