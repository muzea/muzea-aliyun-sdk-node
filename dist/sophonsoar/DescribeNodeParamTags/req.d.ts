export interface DescribeNodeParamTagsRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `ac343acc-1a61-4084-9a1c-xxxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 组件节点名称。
     * @example `python3_2`
     */
    "NodeName": string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
