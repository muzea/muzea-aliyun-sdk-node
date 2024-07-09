export interface CreateAppEnvResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `8D69F3C4-EA43-49D5-875A-0893BF5*****`
     */
    RequestId: string;
    /**
     * 环境变更信息
     */
    EnvChangeDetail: {
        /**
         * 变更开始时间
         * @example `1562666697684`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d3e71642977ca5251e*****`
         */
        ChangeId: string;
        /**
         * 环境ID
         * @example `we-5d39b8ba6786bd4b149*****`
         */
        EnvId: string;
        Operations: {
            /**
             * 变更操作列表
             */
            Operation: {
                /**
                 * 操作描述信息
                 * @example `Bind to VSwitch vsw-wz9gfawx1vxkimtj*****`
                 */
                OperationDescription: string;
                /**
                 * 操作类型
                 * @example `create`
                 */
                OperationType: string;
            }[];
        };
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
