export interface StartJobWithParamsRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****
    `
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace
    `
     */
    "namespace": string;
    /**
     * 作业实例启动参数。
     */
    "body"?: any;
}
