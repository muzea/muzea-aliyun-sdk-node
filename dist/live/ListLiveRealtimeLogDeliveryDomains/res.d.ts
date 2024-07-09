export interface ListLiveRealtimeLogDeliveryDomainsResponse {
    /**
     * 请求ID。
     * @example `95D5B69F-8AEC-419B-8F3A-612B35032B0D`
     */
    RequestId: string;
    Content: {
        /**
         * 域名详情。
         */
        Domains: {
            /**
             * 日志服务状态。取值：
             * - **online**：正在服务。
             * - **offline**：停止服务。
             * @example `online`
             */
            Status: string;
            /**
             * 播流域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
