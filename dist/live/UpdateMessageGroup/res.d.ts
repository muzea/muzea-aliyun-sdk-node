export interface UpdateMessageGroupResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 更新是否成功，取值：
         * - true：成功更新。
         * - false：更新失败。
         * @example `true`
         */
        Success: boolean;
    };
}
