export interface AddSnapshotRepoResponse {
    /**
     * 返回结果：
     * - true：引用仓库创建成功
     * - false：引用仓库创建失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
}
