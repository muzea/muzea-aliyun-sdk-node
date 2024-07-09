export interface CreateServiceConnectionResponse {
    /**
     * 请求id
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS
    `
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 服务连接id
     * @example `19224`
     */
    id: number;
}
