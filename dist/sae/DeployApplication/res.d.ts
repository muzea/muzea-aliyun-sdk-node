export interface DeployApplicationResponse {
    /**
     * 请求ID。
     * @example `01CF26C7-00A3-4AA6-BA76-7E95F2A3***`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `ac1a0b2215622246421415014e****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 返回的发布单ID，用于查询任务执行状态。
         * @example `01db03d3-3ee9-48b3-b3d0-dfce2d88****`
         */
        ChangeOrderId: string;
        /**
         * 应用ID。
         * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
         */
        AppId: string;
        /**
         * RAM用户发布变更是否需要审批。取值说明如下：
         * - **true**：需审批。
         * - **false**：无需审批。
         * @example `true`
         */
        IsNeedApproval: boolean;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 部署应用是否成功。取值说明如下：
     * - **true**：部署成功。
     * - **false**：部署失败。
     * @example `true`
     */
    Success: boolean;
}
