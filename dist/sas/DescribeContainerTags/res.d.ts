export interface DescribeContainerTagsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `028CF634-5268-5660-9575-48C9ED6BF880`
     */
    RequestId: string;
    /**
     * 容器列名称获取容器对应的值列表。
     */
    TagValues: string[];
}
