export interface AddDirectionalCardResponse {
    /**
     * 是否导入成功。
     * - **true**：导入成功。
     * - **false**：导入失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 接口返回码。
     * - 200：调用成功。
     * - 其他：调用失败。错误码详情，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
}
