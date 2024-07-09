export interface SearchNewsResponse {
    /**
     * 业务数据
     */
    Data: {
        /**
         * 搜索源
         * @example `QuarkCommonNews`
         */
        SearchSource: string;
        /**
         * 搜索源名称
         * @example `夸克检索`
         */
        SearchSourceName: string;
        /**
         * 发布时间
         * @example `2024-01-18 06:46:22`
         */
        PubTime: string;
        /**
         * 来源
         * @example `央视网`
         */
        Source: string;
        /**
         * 标签
         * @example `文章标签`
         */
        Tag: string;
        /**
         * 标题
         * @example `文章标题`
         */
        Title: string;
        /**
         * 内容
         * @example `文章内容`
         */
        Content: string;
        /**
         * 作者
         * @example `作者`
         */
        Author: string;
        /**
         * 文章URL
         * @example `文章URL`
         */
        Url: string;
        /**
         * 文章摘要
         * @example `文章摘要`
         */
        Summary: string;
        /**
         * 内部文档唯一标识
         * @example `9a598b44c6444da5907b8ea68a5f82c4`
         */
        DocUuid: string;
        /**
         * 系统更新时间
         * @example `2024-01-18 06:46:22`
         */
        UpdateTime: string;
        /**
         * 图片地址
         */
        ImageUrls: string[];
    }[];
    /**
     * 当前页码
     * @example `1`
     */
    Current: number;
    /**
     * 每页记录数
     * @example `10`
     */
    Size: number;
    /**
     * 总记录数
     * @example `100`
     */
    Total: number;
    /**
     * 请求唯一标识
     * @example `1813ceee-7fe5-41b4-87e5-982a4d18cca5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `NoData`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
