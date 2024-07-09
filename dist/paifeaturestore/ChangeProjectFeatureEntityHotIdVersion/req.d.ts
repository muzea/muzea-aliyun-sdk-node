export interface ChangeProjectFeatureEntityHotIdVersionRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可从接口ListProjects获取。
     * @example `3`
     */
    "ProjectId": string;
    /**
     * 特征实体名称。
     * @example `feature_entity1`
     */
    "FeatureEntityName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 热点数据版本。
         * @example `20221213`
         */
        Version: string;
    };
}
