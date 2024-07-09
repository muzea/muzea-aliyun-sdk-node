export interface ListDashboardDetailsFlowsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 秒级时间戳
     * @example `1588521600`
     */
    "startTime": number;
    /**
     * 秒级时间戳
     * @example `1588521600`
     */
    "endTime": number;
    /**
     * trace_Id
     * @example `Alibaba`
     */
    "traceIds": string;
    /**
     * 场景ID
     * @example `test`
     */
    "sceneIds": string;
    /**
     * 查询指标，枚举选择
     * USER_ACTION_PV_COUNT 整体流量规模PV
     * USER_ACTION_UV_COUNT 整体流量规模UV
     * USER_ACTION_PV_RATIO  流量转化率
     * USER_ACTION_UV_RATIO 人均流量
     * USER_PV_STAY 人均停留 （内容型）
     * USER_UV_STAY 次均停留  （内容型）
     * @example `USERACTIONUV_COUNT`
     */
    "metricType": string;
    /**
     * 实验ID列表，all（场景级别整体效果）。默认值为all。
     * @example `all`
     */
    "experimentIds"?: string;
}
