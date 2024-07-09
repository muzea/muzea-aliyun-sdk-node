export interface TransformClusterMemberResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 提交成功返回`Transform submit success!`。
     * @example `Transform submit success!`
     */
    Data: string;
    /**
     * 唯一请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
}
