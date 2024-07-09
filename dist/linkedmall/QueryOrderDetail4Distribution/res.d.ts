export interface QueryOrderDetail4DistributionResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `BA157565-3358-5D80-9330-************`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `1004`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `1004`
     */
    SubMessage: string;
    /**
     * pageSize
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `10`
     */
    TotalCount: number;
    /**
     * 本次执行的结果成功与否
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的执行结果码， 正确为字符串 0000
     * @example `SUCCESS`
     */
    Code: string;
    /**
     * 错误消息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 下单时间,格式化(yyyy-MM-dd HH:mm:ss)
         */
        CreateDate: string;
        /**
         * 分销商ID
         */
        DistributorId: string;
        /**
         * 物流状态(由于此字段为定时从主站同步的,会存在延迟,最⻓可能⼏天才同步)
         */
        LogisticsStatus: string;
        /**
         * 分销订单号
         */
        DistributionOrderId: string;
        /**
         * 订单总金额
         */
        OrderAmount: string;
        /**
         * 订单状态，6=交易成功
         * @example `6`
         */
        OrderStatus: string;
        /**
         * 分销子订单列表
         */
        SubOrderList: {
            /**
             * 商品图片
             */
            ItemPic: string;
            ItemPrice: {
                FundAmountMoney: string;
            }[];
            /**
             * 商品名称
             * @example `芝麻小饼`
             */
            ItemTitle: string;
            ItemId: string;
            /**
             * 下单数量
             * @example `1`
             */
            Number: string;
            /**
             * 订单状态
             * @example `6`
             */
            OrderStatus: string;
            LogisticsStatus: string;
            /**
             * 商品SkuId
             * @example `4771634532960`
             */
            SkuId: string;
            /**
             * 下单的商品sku显示的名称
             * @example `500g`
             */
            SkuName: string;
            /**
             * 子分销订单号
             */
            SubDistributionOrderId: string;
            /**
             * 主分销订单号
             */
            MainDistributionOrderId: string;
        }[];
    };
}
