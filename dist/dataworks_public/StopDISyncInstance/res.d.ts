export interface StopDISyncInstanceResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 停止同步任务的结果。
     */
    Data: {
        /**
         * 停止数据集成同步任务的结果状态。取值如下：
         * - success：表示停止数据集成同步任务成功。
         * -  fail：表示停止数据集成同步任务失败。
         * @example `success`
         */
        Status: string;
        /**
         * 停止数据集成同步任务失败后的原因描述。
         * 如果停止数据集成同步任务成功，则该参数的返回值为空。
         * @example `fileId:[100] is invalid.`
         */
        Message: string;
    };
}
