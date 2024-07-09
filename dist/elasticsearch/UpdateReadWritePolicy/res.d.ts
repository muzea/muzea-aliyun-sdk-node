export interface UpdateReadWritePolicyResponse {
    /**
     * 返回结果：
     * - true：开启或关闭写入高可用成功
     * - false：开启或关闭写入高可用失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
