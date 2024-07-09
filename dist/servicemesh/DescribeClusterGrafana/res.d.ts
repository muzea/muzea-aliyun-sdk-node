export interface DescribeClusterGrafanaResponse {
    /**
     * 请求ID
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * Grafana报表信息
     */
    Dashboards: {
        /**
         * Grafana报表的访问地址
         * @example `test.com`
         */
        Url: string;
        /**
         * 报表标题
         * @example `test`
         */
        Title: string;
    }[];
}
