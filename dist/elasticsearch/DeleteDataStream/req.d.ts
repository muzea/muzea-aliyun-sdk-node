export interface DeleteDataStreamRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif24adwc0082****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 数据流名称。
     * @example `ds-001`
     */
    "DataStream": string;
}
