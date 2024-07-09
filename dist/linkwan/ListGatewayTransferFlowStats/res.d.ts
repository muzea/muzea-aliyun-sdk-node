export interface ListGatewayTransferFlowStatsResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 流量统计列表。
     */
    Data: {
        /**
         * 该时间段的下行数据包数量。
         * @example `10`
         */
        DownlinkCount: number;
        /**
         * 统计时间，使用UNIX时间戳, 以毫秒为单位。
         * @example `1514736000000`
         */
        StatMillis: string;
        /**
         * 该时间段的上行数据包数量。
         * @example `10`
         */
        UplinkCount: number;
    }[];
}
