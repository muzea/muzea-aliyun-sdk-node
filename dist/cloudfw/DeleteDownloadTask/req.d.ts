export interface DeleteDownloadTaskRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 文件下载任务的任务 ID。
     * @example `4376`
     */
    "TaskId"?: string;
}
