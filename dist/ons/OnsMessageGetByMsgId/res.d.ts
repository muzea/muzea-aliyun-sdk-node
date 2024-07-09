export interface OnsMessageGetByMsgIdResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `A07E3902-B92E-44A6-B6C5-6AA111111****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 消息大小。
         * @example `407`
         */
        StoreSize: number;
        /**
         * 消息重试消费的次数。
         * @example `1`
         */
        ReconsumeTimes: number;
        /**
         * 被服务端存储的时间戳。
         * @example `1570761026708`
         */
        StoreTimestamp: number;
        /**
         * 实例ID。
         * @example `MQ_INST_111111111111_DOxxxxxx`
         */
        InstanceId: string;
        /**
         * 消息ID，即Message ID。
         * @example `1E0578FE110F18B4AAC235C0C8460BA2`
         */
        MsgId: string;
        /**
         * 存储该消息的服务器实例。
         * @example `11.220.***.***:10911`
         */
        StoreHost: string;
        /**
         * 消息的Topic。
         * @example `test-mq_topic`
         */
        Topic: string;
        PropertyList: {
            /**
             * 消息属性列表。
             */
            MessageProperty: {
                /**
                 * 消息属性的值。
                 * @example `TagA`
                 */
                Value: string;
                /**
                 * 消息属性。取值说明如下：
                 * - **TRACE_ON**：是否有消息轨迹
                 * - **KEYS**：消息的Key属性
                 * - **TAGS**：消息的Tag属性
                 * - **INSTANCE_ID**：消息所在的实例的ID
                 * 更多概念信息，请参见[名词解释](~~29533~~)。
                 * @example `TAGS`
                 */
                Name: string;
            }[];
        };
        /**
         * 生成时间戳。
         * @example `1570761026630`
         */
        BornTimestamp: number;
        /**
         * 消息体CRC校验值。
         * @example `914112295`
         */
        BodyCRC: number;
        /**
         * 生成该消息的客户端实例。
         * @example `42.120.**.**:64646`
         */
        BornHost: string;
    };
}
