export interface QueryDeviceVodUrlResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `product is not active.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 解密密钥。
         * 设置**ShouldEncrypt**参数为**true**时，生成解密密钥。
         * @example `{"iv": "MDEy****OTo7PD0+Pw==","key": "eA2r****fHjOmnyBfQ=="}`
         */
        DecryptKey: string;
        StunInfo: string;
        /**
         * 本地录像URL。
         * @example `rtmp://***​/***.mp4`
         */
        VodUrl: string;
    };
}
