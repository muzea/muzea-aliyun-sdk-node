export interface ModifyAppGroupQuotaRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 是否校验入参数据合法性，默认false。
     * 取值：
     * - **true**：只校验参数合法性。
     * - **false**：校验参数合法性，创建归因配置。
     * @example `false`
     */
    "dryRun"?: boolean;
    /**
     * 请求体。
     */
    "body"?: any;
}
