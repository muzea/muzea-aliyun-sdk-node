export interface GetAiOutboundTaskProgressRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 任务ID。
     * 可调用[CreateAiOutboundTask](~~312260~~)接口，查看返回参数中的**Data**，或者调用[GetAiOutboundTaskList](~~2718026~~)接口，查看返回参数中的**TaskId**。
     * @example `123456`
     */
    "TaskId": number;
    /**
     * 任务批次。
     * > 为空则查询任务下所有数据。
     * @example `1`
     */
    "BatchVersion"?: number;
}
