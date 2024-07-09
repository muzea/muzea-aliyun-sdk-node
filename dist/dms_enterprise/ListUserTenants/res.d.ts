export interface ListUserTenantsResponse {
    /**
     * 请求ID。
     * @example `C478D9DA-3615-50F6-A2BC-7855AD65****`
     */
    RequestId: string;
    /**
     * 租户信息列表。
     */
    TenantList: {
        /**
         * 租户状态，返回值如下：
         * - **ACTIVE**：活跃，表示用户正处于当前租户下。
         * - **IN_ACTIVE**：非活跃。
         * @example `ACTIVE`
         */
        Status: string;
        /**
         * 租户ID。
         * @example `3***`
         */
        Tid: number;
        /**
         * 租户名称。
         * @example `test_name`
         */
        TenantName: string;
    }[];
    /**
     * 错误码。
     * @example `TenantNotExist`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The specified tenant does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
