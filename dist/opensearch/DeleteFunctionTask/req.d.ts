export interface DeleteFunctionTaskRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `ctr`
     */
    "functionName": string;
    /**
     * 实例名称
     * @example `ctr_test`
     */
    "instanceName": string;
    /**
     * 迭代次数
     * @example `1`
     */
    "generation": string;
}
