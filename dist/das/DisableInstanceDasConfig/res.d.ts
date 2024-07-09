export interface DisableInstanceDasConfigResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 关闭数据库实例指定弹性伸缩功能的结果。
     * @example `success`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `7172BECE-588A-5961-8126-C216E16B****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * * **true**：执行成功。
     * * **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
