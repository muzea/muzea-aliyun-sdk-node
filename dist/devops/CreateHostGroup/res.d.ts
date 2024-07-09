export interface CreateHostGroupResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
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
     * true,调用成功，false调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 主机组id
     * @example `123`
     */
    hostGroupId: number;
}
