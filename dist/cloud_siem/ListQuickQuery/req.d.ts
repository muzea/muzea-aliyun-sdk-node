export interface ListQuickQueryRequest {
    /**
     * 分页查询时，设置的每页行数，最大值为500。
     * @example `50`
     */
    "PageSize": number;
    /**
     * 查询开始行，默认值为0。
     * @example `0`
     */
    "Offset"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港，选择该项。
     * - ap-southeast-1：资产属于海外地域，选择该项。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
