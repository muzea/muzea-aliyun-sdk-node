export interface GetTransferableNodesRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 需要进行数据迁移的节点类型。**WORKER**表示热节点，**WORKER_WARM**表示冷节点。
     * @example `WORKER`
     */
    "nodeType": string;
    /**
     * 期望获取进行数据迁移节点的数量。
     * @example `1`
     */
    "count": number;
}
