export interface DescribeDohSubDomainStatisticsSummaryResponse {
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `10`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `0F32959D-417B-4D66-8463-68606605E3E2`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `50`
     */
    TotalPages: number;
    /**
     * 总数据条数。
     * @example `100`
     */
    TotalItems: number;
    /**
     * 统计数据列表。
     */
    Statistics: {
        /**
         * IPv6 HTTP 请求量。
         * @example `3141592653`
         */
        V6HttpCount: number;
        /**
         * IPv4 HTTPS 请求量。
         * @example `3141592653`
         */
        V4HttpsCount: number;
        /**
         * IP地址数量。
         * @example `20`
         */
        IpCount: number;
        /**
         * 子域名。
         * @example `www.example.com`
         */
        SubDomain: string;
        /**
         * 总请求量。
         * @example `14141592653`
         */
        TotalCount: number;
        /**
         * HTTP请求量。
         * @example `3141592653`
         */
        HttpCount: number;
        /**
         * HTTPS请求量。
         * @example `3141592653`
         */
        HttpsCount: number;
        /**
         * IPv4 HTTP 请求量。
         * @example `3141592653`
         */
        V4HttpCount: number;
        /**
         * IPv6 HTTPS 请求量。
         * @example `3141592653`
         */
        V6HttpsCount: number;
    }[];
}
