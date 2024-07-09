export interface GetRealNameStatusResponse {
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * true：调用成功。
     * false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回码。
     * 200：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 个人实名认证状态。
         * NOT_CERTIFIED：未认证
         * APPROVING：认证审核中
         * CERTIFIED：已认证
         * @example `CERTIFIED`
         */
        RealNameStatus: string;
        /**
         * 认证状态描述。
         * @example `已认证`
         */
        Desc: string;
    };
}
