export interface DeleteUserResponse {
    /**
     * 请求ID。
     * @example `DC4E1E63-B337-44F8-8C22-6F00DF67E2C3`
     */
    RequestId: string;
    /**
     * 返回接口执行结果。取值范围：
     * - true：执行成功
     * - false：执行失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
