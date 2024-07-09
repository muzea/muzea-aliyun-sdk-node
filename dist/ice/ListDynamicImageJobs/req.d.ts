export interface ListDynamicImageJobsRequest {
    /**
     * 任务创建时间筛选条件的起始时间
     * @example `2022-07-12T00:00:00Z`
     */
    "StartOfCreateTime"?: string;
    /**
     * 任务创建时间筛选条件的结束时间
     * @example `2022-07-14T00:00:00Z`
     */
    "EndOfCreateTime"?: string;
    /**
     * 任务状态
     * @example `Success`
     */
    "Status"?: string;
    /**
     * 排序顺序。取值：
     * 1. CreateTimeAsc： 按照创建时间顺序排列
     * 2. CreateTimeDesc： 按照创建时间逆序排列
     * @example `CreateTimeDesc`
     */
    "OrderBy"?: string;
    /**
     * 任务ID
     * @example `****cdb3e74639973036bc84****`
     */
    "JobId"?: string;
    /**
     * 分页大小，每页显示条数。默认值为20，最大值为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 连续分页查询时下一页的标记
     * @example `cdb3e74639973036bc84`
     */
    "NextPageToken"?: string;
}
