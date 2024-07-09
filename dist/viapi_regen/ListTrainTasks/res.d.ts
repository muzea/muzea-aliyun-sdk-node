export interface ListTrainTasksResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `F8B71CDB-5DE9-0ACB-8D0F-FCEFBFF6B473`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页数据显示条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `1`
         */
        TotalPage: number;
        /**
         * 总数据量。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 训练任务列表中数据集合。
         */
        Elements: any[];
    };
}
