export interface UpdateDIAlarmRuleRequest {
    /**
     * 告警规则ID。
     * @example `34982`
     */
    "DIAlarmRuleId": number;
    /**
     * 描述。
     * @example `mysql同步到hologres心跳告警`
     */
    "Description"?: string;
    /**
     * 告警指标类型，可选的枚举值：
     * - Heartbeat（任务状态报警）
     * - FailoverCount（failover次数报警）
     * - Delay（任务延迟报警）
     * @example `Heartbeat`
     */
    "MetricType": string;
    /**
     * 告警触发条件列表，支持多条件。
     */
    "TriggerConditions": {
        /**
         * 严重程度，可选的枚举值;
         * - Warning
         * - Critical
         * @example `Warning`
         */
        Severity: string;
        /**
         * 告警计算时间区间，单位分钟。
         * @example `15`
         */
        Duration: number;
        /**
         * 告警阈值。
         * - 任务状态报警：无需填写阈值。
         * - failover次数报警：阈值为failover次数。
         * - 任务延迟报警：阈值为延迟时长，单位秒。
         * @example `5`
         */
        Threshold: number;
    }[];
    /**
     * 告警通知设置。
     */
    "NotificationSettings": {
        /**
         * 告警通知渠道，支持多值。
         */
        NotificationChannels: {
            /**
             * 严重程度，可选的枚举值：
             * - Warning
             * - Critical
             * @example `Warning`
             */
            Severity: string;
            /**
             * 通道列表。
             */
            Channels: string[];
        }[];
        /**
         * 告警通知接收方，支持多值。
         */
        NotificationReceivers: {
            /**
             * 接收方类型。
             * - 当告警通知渠道为邮件、电话、短信时，接收方类型选择阿里云用户ID。
             * - 当告警通知渠道为钉钉时，接收方类型选择钉钉token。
             * @example `DingToken`
             */
            ReceiverType: string;
            /**
             * 接收方取值列表。
             */
            ReceiverValues: string[];
        }[];
        /**
         * 告警抑制间隔时长，单位分钟，默认5分钟。
         * @example `5`
         */
        InhibitionInterval: number;
    };
    /**
     * 告警规则是否启用，默认不开启。
     * @example `true`
     */
    "Enabled"?: boolean;
}
