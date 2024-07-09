export interface UpdateTaskNameRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务节点ID。可调用[GetTaskInstanceRelation](~~424711~~)接口获取该参数的值。
     * @example `449***`
     */
    "NodeId": string;
    /**
     * 任务节点名称。可调用[GetTaskInstanceRelation](~~424711~~)接口获取该参数的值。
     * @example `Spark-test`
     */
    "NodeName": string;
}
