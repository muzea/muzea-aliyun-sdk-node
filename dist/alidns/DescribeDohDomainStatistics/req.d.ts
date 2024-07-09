export interface DescribeDohDomainStatisticsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 查询的开始时间，格式：YYYY-MM-DD。
     * 只能查询最近90天的记录，即：`StartDate >= Now - 90`。
     * @example `2019-07-04`
     */
    "StartDate"?: string;
    /**
     * 查询的结束时间，格式：YYYY-MM-DD。
     * 默认为查询当天的时间。
     * @example `2019-07-04`
     */
    "EndDate"?: string;
}
