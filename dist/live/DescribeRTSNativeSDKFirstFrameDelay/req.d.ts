export interface DescribeRTSNativeSDKFirstFrameDelayRequest {
    /**
     * 开始时间
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-12-10T21:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 时间粒度，支持300, 3600, 14400, 28800和86400秒。不传和传的值不支持时，使用默认值300秒。
     * @example `300`
     */
    "DataInterval"?: string;
    /**
     * 默认查询全部(2.1.0版本以上)，也可指定具体的域名，多个域名用半角逗号（,）分隔，一次最多支持500个域名查询。
     */
    "DomainNameList"?: string[];
}
