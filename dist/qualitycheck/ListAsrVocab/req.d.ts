export interface ListAsrVocabRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"pageSize":1}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
