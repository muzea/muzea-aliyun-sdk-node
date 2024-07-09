export interface DescribeParentPlatformDevicesRequest {
    /**
     * 按上级平台ID查询。
     * @example `359*****374-cn-qingdao`
     */
    "Id": string;
    /**
     * 按给定字段排序，默认按id排序。
     * @example `id`
     */
    "SortBy"?: string;
    /**
     * 排序方式，默认升序。取值：
     * - asc（升序）
     * - desc（降序）
     * @example `asc`
     */
    "SortDirection"?: string;
    /**
     * 分页大小，默认为20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认为1
     * @example `1`
     */
    "PageNum"?: number;
}
