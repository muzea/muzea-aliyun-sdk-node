export interface UnbindTemplateRequest {
    /**
     * 模板ID。
     * @example `323*****998-cn-qingdao`
     */
    "TemplateId"?: string;
    /**
     * 模板类型。取值：
     * - record（录制）
     * - snapshot（截图）
     * @example `record`
     */
    "TemplateType"?: string;
    /**
     * 实例ID。
     * @example `323*****994-cn-qingdao`
     */
    "InstanceId": string;
    /**
     * 实例类型。取值：
     * - group（空间）
     * - stream（流）
     * @example `group`
     */
    "InstanceType": string;
}
