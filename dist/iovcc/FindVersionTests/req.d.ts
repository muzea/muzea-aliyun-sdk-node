export interface FindVersionTestsRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 本页开始序号
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId"?: string;
    /**
     * 版本类型，取值有： FOTA 系统版本， APP 应用版本
     * @example `FOTA`
     */
    "VersionType"?: string;
}
