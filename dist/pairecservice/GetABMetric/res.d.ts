export interface GetABMetricResponse {
    /**
     * 请求ID。
     * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
     */
    RequestId: string;
    /**
     * 指标名称。
     * @example `pv`
     */
    Name: string;
    /**
     * 指标描述。
     * @example `页面访问次数`
     */
    Description: string;
    /**
     * 场景ID。
     * @example `1`
     */
    SceneId: string;
    /**
     * 场景名称。
     * @example `home_feed`
     */
    SceneName: string;
    /**
     * 指标类型。
     * - Single-单一指标。
     * - Derived-衍生指标。
     * @example `Single`
     */
    Type: string;
    /**
     * 是否为实时指标。
     * - true-是。
     * - false-否。
     * @example `false`
     */
    Realtime: string;
    /**
     * 来源数据表ID。
     * @example `2`
     */
    TableMetaId: string;
    /**
     * 数据写回到的数据表ID。
     * @example `3`
     */
    ResultTableMetaId: string;
    /**
     * 写回数据表的数据源的ID。
     * @example `5`
     */
    ResultResourceId: string;
    /**
     * 指标定义。
     * @example `sum(click_cnt)`
     */
    Definition: string;
    /**
     * 统计周期。
     * @example `1`
     */
    StatisticsCycle: number;
    /**
     * 衍生指标的左指标ID。
     * @example `3`
     */
    LeftMetricId: string;
    /**
     * 衍生指标的右指标ID。
     * @example `2`
     */
    RightMetricId: string;
    /**
     * 衍生指标计算的操作符。
     * - Plus-加
     * - Minus-减
     * - Multiplication-乘
     * - Division-除
     * @example `Division`
     */
    Operator: string;
}
