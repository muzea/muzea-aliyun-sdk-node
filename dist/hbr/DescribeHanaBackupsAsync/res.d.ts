export interface DescribeHanaBackupsAsyncResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `31F97233-8563-563D-8880-914B00EEA928`
     */
    RequestId: string;
    /**
     * 异步任务ID。可以通过调用DescribeTask获取任务结果。
     * @example `t-0006xmbplrqebt9dhkth`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
