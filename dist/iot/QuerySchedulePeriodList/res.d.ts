export interface QuerySchedulePeriodListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.soundcodeservice.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `sound code service has not been signed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `66FF51D3-***-49F1-B1A2-***`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 每页返回的时间段条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询返回的时间段总条数。
         * @example `200`
         */
        Total: number;
        /**
         * 当前页号。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 时间段列表。
             */
            Items: {
                /**
                 * 时间段结束时间
                 * @example `00:10`
                 */
                EndTime: string;
                /**
                 * 时间段开始时间。
                 * @example `00:00`
                 */
                StartTime: string;
                /**
                 * 时间段声码解析内容。
                 * @example `www.taobao.com`
                 */
                SoundCodeContent: string;
                /**
                 * 时间段描述。
                 * @example `test`
                 */
                Description: string;
                /**
                 * 时间段唯一标识。
                 * @example `Md3ZiTL888K9llXDy7890***********`
                 */
                PeriodCode: string;
            }[];
        };
    };
}
