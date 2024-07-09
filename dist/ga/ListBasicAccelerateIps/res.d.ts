export interface ListBasicAccelerateIpsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 基础型全球加速实例的加速IP列表。
     */
    AccelerateIps: {
        /**
         * 基础型全球加速实例ID。
         * @example `ga-bp17frjjh0udz4qz****`
         */
        AcceleratorId: string;
        /**
         * 基础型全球加速实例的加速地域实例ID。
         * @example `ips-bp11r5jb8ogp122xl****`
         */
        IpSetId: string;
        /**
         * 基础型全球加速实例的加速IP实例ID。
         * @example `gaip-bp1****`
         */
        AccelerateIpId: string;
        /**
         * 基础型全球加速实例的加速IP。
         * @example `116.132.XX.XX`
         */
        AccelerateIpAddress: string;
        /**
         * 加速IP的状态。
         * - **active**：可用。
         * - **binding**：绑定中。
         * - **bound**：已绑定。
         * - **unbinding**：解绑中。
         * - **deleting**：删除中。
         * > 当加速IP处于创建中时，不返回该参数。
         * @example `active`
         */
        State: string;
    }[];
}
