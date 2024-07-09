export interface DeleteApiStageVariableRequest {
    /**
     * API分组 ID
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId": string;
    /**
     * 环境 ID
     * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
     */
    "StageId": string;
    /**
     * 变量名，区分大小写
     * @example `serverName`
     */
    "VariableName": string;
}
