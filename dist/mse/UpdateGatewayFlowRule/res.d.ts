export interface UpdateGatewayFlowRuleResponse {
    /**
     * 请求ID。
     * @example `2B74E7F7-DF54-5AB1-B8F2-67391B83****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 流控规则ID。
         * @example `549`
         */
        Id: number;
        /**
         * 网关ID。
         * @example `14407`
         */
        GatewayId: number;
        /**
         * 网关唯一标识ID。
         * @example `gw-e2d226bba4b2445c9e29fa7f8216****`
         */
        GatewayUniqueId: string;
        /**
         * 路由ID。
         * @example `48811`
         */
        RouteId: number;
        /**
         * 路由名称。
         * @example `routeA`
         */
        RouteName: string;
        /**
         * 总体QPS阈值。
         * @example `10`
         */
        Threshold: number;
        /**
         * 统计持续时间。
         * @example `10`
         */
        StatDurationMs: number;
        /**
         * 阈值转化模式。
         * 0：单机。
         * 1：集群。
         * 2：集群转单机。
         * @example `0`
         */
        LimitMode: number;
        /**
         * Web fallbaco行为类型。
         * 0：返回指定文本。
         * 1：跳转到指定页面。
         * @example `0`
         */
        BehaviorType: number;
        /**
         * 编码类型。
         * 0：普通文本
         * 1：JSON
         * @example `0`
         */
        BodyEncoding: number;
        /**
         * Http状态码。
         * @example `429`
         */
        ResponseStatusCode: number;
        /**
         * HTTP返回文本。
         * @example `Text`
         */
        ResponseContentBody: string;
        /**
         * 跳转地址。
         * @example `www.******.com`
         */
        ResponseRedirectUrl: string;
        /**
         * 自定义header，输入为key-value键值对。
         * @example `key=value`
         */
        ResponseAdditionalHeaders: string;
        /**
         * 是否开启。
         * 0：不开启。
         * 1：开启。
         * @example `0`
         */
        Enable: number;
        /**
         * 筛选规则id
         */
        IdList: number[];
    };
}
