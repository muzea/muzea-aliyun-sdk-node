export interface ListCrowdUsersRequest {
    /**
     * 人群ID，可通过接口ListCrowds获取。
     * @example `1`
     */
    "CrowdId": string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId": string;
}
