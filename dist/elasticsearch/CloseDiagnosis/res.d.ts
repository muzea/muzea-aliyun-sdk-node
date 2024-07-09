export interface CloseDiagnosisResponse {
    /**
     * 是否成功关闭智能运维：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
