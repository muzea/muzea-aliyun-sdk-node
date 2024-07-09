export interface AddGatewayAuthConsumerResponse {
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * code仅仅用来和success同步
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数 `ErrMessage` 错误信息中的 `%s`。
     * > 如果`ErrMessage`返回`The Value of Input Parameter %s is not valid`，且`DynamicMessage`返回`DtsJobId`，则代表所传入的请求参数`DtsJobId`不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 鉴权消费者ID。
     * @example `2`
     */
    Data: number;
}
