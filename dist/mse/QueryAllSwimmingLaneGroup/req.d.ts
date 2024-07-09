export interface QueryAllSwimmingLaneGroupRequest {
    /**
     * 需要查询的MSE命名空间名字。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
