export interface QueryEdgeInstanceSceneRuleResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D4C3331B-0FA8-4A05-AFE2-54F698EDEAF7`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 场景联动规则总数量。
         * @example `1`
         */
        Total: number;
        /**
         * 场景联动规则列表。
         */
        RuleList: {
            /**
             * 场景联动规则在边缘实例中的状态。
             * - 0：表示已停止。
             * - 1：表示已启动。
             * @example `1`
             */
            Status: number;
            /**
             * 场景联动规则的创建时间。
             * @example `1582004185000`
             */
            GmtCreate: number;
            /**
             * 场景联动规则是否存在。
             * - 0：表示已删除。
             * - 1：表示存在。
             * @example `1`
             */
            IsExisted: number;
            /**
             * 场景联动规则的名称。
             * @example `test`
             */
            RuleName: string;
            /**
             * 场景联动规则ID。
             * @example `f041397879ad4d89822811d741******`
             */
            RuleId: string;
        }[];
    };
}
