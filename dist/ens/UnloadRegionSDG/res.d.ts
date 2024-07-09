export interface UnloadRegionSDGResponse {
    /**
     * 请求ID。
     * @example `125B04C7-3D0D-4245-AF96-14E3758E3F06`
     */
    RequestId: string;
    /**
     * 返回Data对象。
     */
    Data: {
        /**
         * 响应消息，若成功请求为success。
         * @example `success`
         */
        Message: string;
        /**
         * 同步请求执行结果。
         */
        Result: {
            /**
             * 请求失败总数。
             * @example `0`
             */
            FailedCount: number;
            /**
             * 失败详情列表。
             */
            FailedItems: {
                /**
                 * 错误信息。
                 * @example `region not found`
                 */
                ErrorMessage: string;
                /**
                 * 目标节点ID。
                 * @example `cn-hangzhou-xxx`
                 */
                DestinationRegionId: string;
            }[];
            /**
             * 成功数。
             * @example `1`
             */
            SuccessCount: number;
        };
        /**
         * 请求是否全部成功。取值说明如下：
         * - true：全部成功。
         * - false：存在失败任务。
         * @example `true`
         */
        Success: boolean;
    };
}
