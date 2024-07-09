export interface DeleteHanaInstanceResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `28EAF89A-E0D8-5C04-9A1D-B373B29BCFB9`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
