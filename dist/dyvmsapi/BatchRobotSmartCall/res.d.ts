export interface BatchRobotSmartCallResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 机器人呼叫任务的唯一任务ID，可以通过此ID调用[QueryCallDetailByTaskId](~~393537~~)接口查询任务详情。
     * @example `4001112222`
     */
    TaskId: string;
}
