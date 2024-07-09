export interface ListIntervalInstanceReportResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `943D8EF3-3321-471F-A104-51C96FCA94D6`
     */
    RequestId: string;
    /**
     * 实例分段统计数据列表。
     */
    Data: {
        /**
         * 开始时间，格式为Unix时间戳，单位毫秒。
         * @example `1620230400000`
         */
        StatsTime: number;
        /**
         * 呼入指标。
         */
        Inbound: {
            /**
             * 平均振铃时长，单位秒。计算公式为： TotalRingTime/CallsRinged。
             * @example `5`
             */
            AverageRingTime: number;
            /**
             * 通话进入语音留言信箱的数量。
             * @example `0`
             */
            CallsVoicemail: number;
            /**
             * 最大IVR放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonedInIVRTime: number;
            /**
             * 应答量，即坐席应答的电话数量。若一通电话被多个坐席应答，算一次。
             * @example `7`
             */
            CallsHandled: number;
            /**
             * 发生IVR异常的通话数量，判定条件是IVR进入了挂机原因节点且挂机原因节点设置的挂机原因为转人工失败，此时计数加1。
             * @example `0`
             */
            CallsIVRException: number;
            /**
             * IVR放弃量，即电话进入IVR流程之后在IVR环节客户挂机的数量。
             * @example `0`
             */
            CallsAbandonedInIVR: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `17`
             */
            MaxWorkTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 最大放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonTime: number;
            /**
             * 平均放弃时长，单位秒。计算公式为：TotalAbandonTime/CallsAbandoned。
             * @example `0`
             */
            AverageAbandonTime: number;
            /**
             * 已废弃，该字段可以参考AbandonRate
             * @example `0`
             */
            AbandonedRate: number;
            /**
             * 座席振铃的电话数量，若一通电话分配给多个座席并产生了振铃，算一次。
             * @example `7`
             */
            CallsRinged: number;
            /**
             * 队列失败量，即电话进入队列之后在排队环节客户挂机的数量。
             * @example `0`
             */
            CallsQueuingFailed: number;
            /**
             * 总振铃时长，单位秒。
             * @example `32`
             */
            TotalRingTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `447`
             */
            TotalTalkTime: number;
            /**
             * 最大振铃放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonedInRingTime: number;
            /**
             * 直接转接量，即发生直接转接的电话数量。若一通电话发起多次转接，算一次。
             * @example `0`
             */
            CallsBlindTransferred: number;
            /**
             * 平均IVR放弃时长，单位秒。计算公式为：TotalAbandonedInIVRTime/CallsAbandonedInIVR。
             * @example `0`
             */
            AverageAbandonedInIVRTime: number;
            /**
             * 平均排队放弃时长，单位秒。计算公式为：TotalAbandonedInQueueTime/CallsAbandonedInQueue。
             * @example `0`
             */
            AverageAbandonedInQueueTime: number;
            /**
             * 最大等待时长，单位秒。
             * @example `13`
             */
            MaxWaitTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为：TotalTalkTime/CallsHandled。
             * @example `64`
             */
            AverageTalkTime: number;
            /**
             * 咨询转接量，即发生咨询转接的电话数量。若一通电话发起多次转接，算一次。
             * @example `0`
             */
            CallsAttendedTransferred: number;
            /**
             * 总IVR放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonedInIVRTime: number;
            /**
             * 队列溢出的通话数量，即通话在IVR排队时队列溢出。
             * @example `0`
             */
            CallsQueuingOverflow: number;
            /**
             * 振铃放弃量，即坐席振铃中客户挂机的数量。
             * @example `0`
             */
            CallsAbandonedInRing: number;
            /**
             * 总振铃放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonedInRingTime: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `85`
             */
            TotalWorkTime: number;
            /**
             * 平均等待时长，平均每通电话的坐席接起前等待时长。计算公式为： TotalWaitTime/CallsHandled。
             * @example `5`
             */
            AverageWaitTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为： TotalWorkTime/CallsHandled。
             * @example `13`
             */
            AverageWorkTime: number;
            /**
             * 进入队列的电话数量，若一通电话多次进入队列，算一次。
             * @example `7`
             */
            CallsQueued: number;
            /**
             * 平均振铃放弃时长，单位秒。计算公式为：TotalAbandonedInRingTime/CallsAbandonedInRing。
             * @example `0`
             */
            AverageAbandonedInRingTime: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 放弃量。计算公式为：CallsAbandonedInIVR+CallsAbandonedInQueue+CallsAbandonedInRing。
             * @example `0`
             */
            CallsAbandoned: number;
            /**
             * 最大排队放弃时长，单位秒。
             * @example `0`
             */
            MaxAbandonedInQueueTime: number;
            /**
             * 通话在智能导航模块放弃的数量。
             * @example `0`
             */
            CallsAbandonedInVoiceNavigator: number;
            /**
             * 总等待时长，单位秒。
             * @example `34`
             */
            TotalWaitTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `219`
             */
            MaxTalkTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `12`
             */
            MaxRingTime: number;
            /**
             * 总放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonTime: number;
            /**
             * 呼入到呼叫中心的电话数量。
             * @example `7`
             */
            CallsOffered: number;
            /**
             * 在排队阶段超时的通话数量。
             * @example `0`
             */
            CallsQueuingTimeout: number;
            /**
             * 20秒服务水平，等待时长小于等于20秒的电话数量/CallsQueued。
             * @example `1`
             */
            ServiceLevel20: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 发生转外线的通话数量。
             * @example `0`
             */
            CallsForwardToOutsideNumber: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 保持量，即发生通话保持的电话数量。若一通电话保持多次，算一次。
             * @example `0`
             */
            CallsHold: number;
            /**
             * 满意度调查发送次数。
             * @example `0`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 应答率。计算公式为：CallsHandled/CallsOffered（由于应答事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `1`
             */
            HandleRate: number;
            /**
             * 满意度调查响应次数。
             * @example `0`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/CallsHold。
             * @example `0`
             */
            AverageHoldTime: number;
            /**
             * 队列放弃量，即电话进入队列之后在排队环节客户挂机的数量。
             * @example `0`
             */
            CallsAbandonedInQueue: number;
            /**
             * 总排队放弃时长，单位秒。
             * @example `0`
             */
            TotalAbandonedInQueueTime: number;
            /**
             * 放弃率。计算公式为：CallsAbandoned/CallsOffered（由于放弃事件与分配事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0`
             */
            AbandonRate: number;
            /**
             * 导致IVR异常的电话数量。
             * @example `0`
             */
            CallsCausedIVRException: number;
            /**
             * 转入语音信箱的电话数量
             * @example `1`
             */
            CallsToVoicemail: number;
            /**
             * Chat会话平均首次响应时长，单位为秒。
             * @example `6`
             */
            AverageFirstResponseTime: number;
            /**
             * Chat会话平均响应时长。
             * @example `15`
             */
            AverageResponseTime: number;
            /**
             * Chat会话中总消息发送量。
             * @example `12`
             */
            TotalMessagesSent: number;
            /**
             * Chat会话中坐席发送的总消息量。
             * @example `8`
             */
            TotalMessagesSentByAgent: number;
            /**
             * Chat会话中客户发送的总消息量。
             * @example `4`
             */
            TotalMessagesSentByCustomer: number;
        };
        /**
         * 呼出指标。
         */
        Outbound: {
            /**
             * 平均振铃时长，单位秒。计算公式为： TotalRingTime/CallsRinged。
             * @example `0`
             */
            AverageRingTime: number;
            /**
             * 拨号量。
             * @example `0`
             */
            CallsDialed: number;
            /**
             * 接通量。
             * @example `0`
             */
            CallsAnswered: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `0`
             */
            TotalWorkTime: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `0`
             */
            MaxWorkTime: number;
            /**
             * 总拨号时长，单位秒。
             * @example `0`
             */
            TotalDialingTime: number;
            /**
             * 总通话保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/CallsDialed。
             * @example `0`
             */
            AverageWorkTime: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 坐席振铃的电话数量，若一通电话分配给多个座席并产生了振铃，算一次。
             * @example `0`
             */
            CallsRinged: number;
            /**
             * 总振铃时长，单位秒。
             * @example `0`
             */
            TotalRingTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `0`
             */
            MaxTalkTime: number;
            /**
             * 最大振铃时长，单位秒。
             * @example `0`
             */
            MaxRingTime: number;
            /**
             * 总通话时长，单位秒。
             * @example `0`
             */
            TotalTalkTime: number;
            /**
             * 最大拨号时长，单位秒。
             * @example `0`
             */
            MaxDialingTime: number;
            /**
             * 直接转接量，即发生直接转接的电话数量。若一通电话发起多次转接，算一次。
             * @example `0`
             */
            CallsBlindTransferred: number;
            /**
             * 接通率，计算公式为：CallsAnswered/CallsDialed（由于接听事件与应答事件可能落在不同的时间范围内，所以某些情况下结果可能大于100%）。
             * @example `0`
             */
            AnswerRate: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为：TotalTalkTime/CallsAnswered。
             * @example `0`
             */
            AverageTalkTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 咨询转接量，即发生咨询转接的电话数量。若一通电话发起多次转接，算一次。
             * @example `0`
             */
            CallsAttendedTransferred: number;
            /**
             * 保持量，即发生通话保持的电话数量。若一通电话保持多次，算一次。
             * @example `0`
             */
            CallsHold: number;
            /**
             * 满意度调查发送次数。
             * @example `0`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 满意度调查响应次数。
             * @example `0`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/CallsHold。
             * @example `0`
             */
            AverageHoldTime: number;
            /**
             * 平均拨号时长，单位秒。计算公式为：TotalDialingTime/CallsDialed。
             * @example `0`
             */
            AverageDialingTime: number;
        };
        /**
         * 整体指标。
         */
        Overall: {
            /**
             * 总通话时长，单位秒。
             * @example `0`
             */
            TotalTalkTime: number;
            /**
             * 总登录时长，单位秒。不包含小休时长。
             * @example `0`
             */
            TotalLoggedInTime: number;
            /**
             * 座席利用率，计算公式为： (TotalworkTime + TotalTalkTime ) / TotalLoggedInTime。
             * @example `0`
             */
            OccupancyRate: number;
            /**
             * 总话后处理时长，单位秒。
             * @example `0`
             */
            TotalWorkTime: number;
            /**
             * 最大通话保持时长，单位秒。
             * @example `0`
             */
            MaxHoldTime: number;
            /**
             * 最大话后处理时长，单位秒。
             * @example `0`
             */
            MaxWorkTime: number;
            /**
             * 平均小休时长，单位秒。计算公式为：TotalBreakTime/小休次数。小休次数为非接口统计字段。
             * @example `0`
             */
            AverageBreakTime: number;
            /**
             * 总保持时长，单位秒。
             * @example `0`
             */
            TotalHoldTime: number;
            /**
             * 满意率，计算公式为：标记为满意的评价数/满意度调查响应次数。
             * @example `0`
             */
            SatisfactionRate: number;
            /**
             * 最大小休时长，单位秒。
             * @example `0`
             */
            MaxBreakTime: number;
            /**
             * 平均话后处理时长，单位秒。计算公式为：TotalWorkTime/TotalCalls。
             * @example `0`
             */
            AverageWorkTime: number;
            /**
             * 平均通话时长，单位秒。计算公式为： TotalTalkTime/(CallsAnswered+CallsHandled)。
             * @example `0`
             */
            AverageTalkTime: number;
            /**
             * 满意度指数，即满意度按键数字（1位数字）的平均值。
             * @example `0`
             */
            SatisfactionIndex: number;
            /**
             * 满意度调查发送次数。
             * @example `0`
             */
            SatisfactionSurveysOffered: number;
            /**
             * 满意度调查响应次数。
             * @example `0`
             */
            SatisfactionSurveysResponded: number;
            /**
             * 最大就绪时长，单位秒。
             * @example `0`
             */
            MaxReadyTime: number;
            /**
             * 平均就绪时长，单位秒。计算公式为：TotalReadyTime/就绪次数。就绪次数为非接口统计字段。
             * @example `0`
             */
            AverageReadyTime: number;
            /**
             * 平均通话保持时长，单位秒。计算公式为：TotalHoldTime/(呼入CallsHold+呼出CallsHold)。
             * @example `0`
             */
            AverageHoldTime: number;
            /**
             * 总就绪时长，单位为秒。
             * @example `0`
             */
            TotalReadyTime: number;
            /**
             * 总小休时长，单位为秒。
             * @example `0`
             */
            TotalBreakTime: number;
            /**
             * 最大通话时长，单位秒。
             * @example `0`
             */
            MaxTalkTime: number;
            /**
             * 总电话量。计算公式为：CallsOffered + CallsDialed。
             * @example `0`
             */
            TotalCalls: number;
        };
    }[];
}
