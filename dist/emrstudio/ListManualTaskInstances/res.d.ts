export interface ListManualTaskInstancesResponse {
    /**
     * Id of the request
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    nextToken: string;
    /**
     * 记录总数
     * @example `10`
     */
    totalSize: number;
    /**
     * 返回结果
     */
    data: {
        /**
         * 手动任务实例ID
         * @example `mti-3q9jo749ne5****`
         */
        ManualTaskInstanceId: string;
        /**
         * 手动任务实例名称
         * @example `test`
         */
        ManualTaskInstanceName: string;
        /**
         * 任务类型
         * @example `SHELL`
         */
        TaskType: string;
        /**
         * 状态
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 提交时间
         * @example `2024-03-27 00:00:00`
         */
        SubmitTime: string;
        /**
         * 开始时间
         * @example `2024-03-27 00:00:00`
         */
        StartTime: string;
        /**
         * 结束时间
         * @example `2024-03-27 00:00:00`
         */
        EndTime: string;
        /**
         * 外部应用ID
         * @example `application_123_***`
         */
        ExternalAppId: string;
        /**
         * 任务参数
         * @example `{
            "yarnUser": "",
            "conditionResult": "null",
            "rawScript": "sleep 300",
            "submitOnYarnFlag": false,
            "emrClusterId": "",
            "yarnPriority": "",
            "dependence": "null",
            "yarnMemory": "",
            "localParams": [],
            "switchResult": "null",
            "resourceList": [],
            "yarnQueue": "",
            "yarnVCores": "",
            "associateManualTaskFlag": false
        }`
         */
        TaskParams: string;
        /**
         * 资源组ID
         * @example `wg-3q9jo749ne5****`
         */
        ResourceGroupId: string;
        /**
         * EMR集群ID
         * @example `c-b933c5aac7f7***`
         */
        EmrClusterId: string;
    }[];
}
