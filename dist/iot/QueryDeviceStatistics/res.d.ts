export interface QueryDeviceStatisticsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的设备统计信息。
     */
    Data: {
        /**
         * 设备总数。
         * @example `100`
         */
        deviceCount: number;
        /**
         * 已激活的设备数量。
         * @example `10`
         */
        activeCount: number;
        /**
         * 在线的设备数量。
         * @example `10`
         */
        onlineCount: number;
    };
}
