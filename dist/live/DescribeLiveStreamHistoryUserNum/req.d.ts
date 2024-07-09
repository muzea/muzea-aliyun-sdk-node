export interface DescribeLiveStreamHistoryUserNumRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 直播流名。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 支持最大的查询范围是最近**30**天。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。需晚于开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > StartTime和EndTime时间间隔在一天内，且EndTime不超过当前时间。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
}
