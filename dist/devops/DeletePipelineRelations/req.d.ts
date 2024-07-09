export interface DeletePipelineRelationsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线ID，可在流水线链接中获取，如https://flow.aliyun.com/pipelines/【PipelineId】/current
     * @example `11`
     */
    "pipelineId": number;
    /**
     * 关联的资源类型，目前只支持VARIABLE_GROUP
     * @example `VARIABLE_GROUP`
     */
    "relObjectType": string;
    /**
     * 关联的资源id，目前只支持变量组id
     * @example `11`
     */
    "relObjectId": string;
}
