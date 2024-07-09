export interface DescribeEntityInfoRequest {
    /**
     * 实体逻辑ID。
     * @example `12345`
     */
    "EntityId"?: number;
    /**
     * 实体特征值，可以对处置实体进行模糊搜索。
     * @example `test22.php`
     */
    "EntityIdentity"?: string;
    /**
     * 事件全局唯一UUID。
     * @example `85ea4241-798f-4684-a876-65d4f0c3****`
     */
    "IncidentUuid"?: string;
    /**
     * SOAR处置策略ID。
     * @example `577bbf90-a770-44a7-8154-586aa2d318fa`
     */
    "SophonTaskId"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
