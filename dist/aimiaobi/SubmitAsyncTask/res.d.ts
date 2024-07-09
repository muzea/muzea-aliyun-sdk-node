export interface SubmitAsyncTaskResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `DataNotExists`
     */
    Code: string;
    /**
     * 错误说明
     * @example `数据不存在`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 任务唯一ID
         * @example `3f7045e099474ba28ceca1b4eb6d6e21
        `
         */
        TaskId: string;
        /**
         * 任务名称
         * @example `任务名称`
         */
        TaskName: string;
        /**
         * 中间结果
         * @example `{}`
         */
        TaskIntermediateResult: any;
    };
}
