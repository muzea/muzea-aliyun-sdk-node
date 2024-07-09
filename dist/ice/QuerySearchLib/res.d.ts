export interface QuerySearchLibResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 表示是否调用成功：
     * - true：调用成功
     * - false：调用失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 搜索库名称。
     * @example `test1`
     */
    SearchLibName: string;
    /**
     * 状态：
     * - 正常
     * - 删除中
     * - 删除失败
     * @example `normal`
     */
    Status: string;
}
