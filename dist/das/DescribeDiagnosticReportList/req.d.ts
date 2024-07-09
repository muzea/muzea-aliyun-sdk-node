export interface DescribeDiagnosticReportListRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "DBInstanceId": string;
    /**
     * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNo"?: string;
    /**
     * 每页最大记录数，默认值为10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 查询任务开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1668398892000`
     */
    "StartTime": string;
    /**
     * 查询任务结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询任务结束时间需晚于查询任务开始时间。
     * @example `1668420492000`
     */
    "EndTime": string;
}
