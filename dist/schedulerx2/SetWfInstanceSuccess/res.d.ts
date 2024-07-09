export interface SetWfInstanceSuccessResponse {
    /**
     * 请求唯一ID
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否成功，取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息，仅错误时返回错误信息。
     * @example `wofkflowId is not existed`
     */
    Message: string;
}
