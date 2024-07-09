export interface DeleteBatchRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 批处理任务ID。
     * @example `batch-4eb9223f-3e88-42d3-a578-3f2852******`
     */
    "Id": string;
}
