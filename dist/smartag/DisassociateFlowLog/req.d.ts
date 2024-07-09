export interface DisassociateFlowLogRequest {
    /**
     * 流日志的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 流日志实例ID。
     * @example `fl-l934tsa5504yuc****`
     */
    "FlowLogId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-0v3pmd7qpnvx5f****`
     */
    "SmartAGId": string;
}
