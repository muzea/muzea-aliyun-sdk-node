export interface RejectTicketRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 工单ID。
     * @example `f2c6722b-cd13-442d-bf10-22a07c70d6d5`
     */
    "TicketId"?: string;
    /**
     * 处理意见。
     * @example `请补充信息。`
     */
    "Comment"?: string;
}
