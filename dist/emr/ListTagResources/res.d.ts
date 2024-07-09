export interface ListTagResourcesResponse {
    /**
     * 标签资源列表。包含了资源ID、资源类型和标签键值信息。
     */
    TagResources: {
        /**
         * 标签键。
         * @example `Department`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `Dev`
         */
        TagValue: string;
        /**
         * 资源类型。
         * @example `cluster`
         */
        ResourceType: string;
        /**
         * 资源ID。
         * @example `c-b933c5aac8fe****`
         */
        ResourceId: string;
    }[];
    /**
     * 请求ID。
     * @example `372D4E9B-2509-5EFA-846B-B34FBF143F56`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。空代表数据已经读取完毕。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
