export interface ListProductTagsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 调用成功时，返回产品标签信息列表，具体信息，请参见**ProductTag**包含的参数。
         */
        ProductTag: {
            /**
             * 标签值。
             * @example `102`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `room`
             */
            TagKey: string;
        }[];
    };
}
