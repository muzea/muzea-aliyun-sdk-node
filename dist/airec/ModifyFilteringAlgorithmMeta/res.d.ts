export interface ModifyFilteringAlgorithmMetaResponse {
    /**
     * 召回表信息。
     */
    result: {
        /**
         * 最后更新时间，单位为UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtModified: string;
        /**
         * 表示单签召回表的状态。
         * 取值：
         * - **Draft**：草稿。
         * - **Running**：运行中。
         * - **Offline**：已下线。
         * - **Deleted**：已删除。
         * @example `Running`
         */
        status: string;
        /**
         * 创建时间的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 指定的召回ID。
         * @example `abc`
         */
        algorithmId: string;
        /**
         * Meta源数据。
         */
        meta: {
            /**
             * 任务ID。
             * @example `taskId`
             */
            taskId: string;
            /**
             * 算法类型，当前只支持ODPS。
             * @example `metaType`
             */
            metaType: string;
            /**
             * 数据源类型，当前只支持ODPS。
             * @example `ODPS`
             */
            type: string;
            /**
             * 召回表类型包含内容。
             */
            extInfo: {
                /**
                 * kv分隔符。
                 * @example `:`
                 */
                kvSeparator: string;
                /**
                 * Item分隔符。
                 * @example `,`
                 */
                itemSeparator: string;
            };
            /**
             * 召回类别。
             * @example `1_2`
             */
            category: string;
            /**
             * ODPS表的阈值配置信息。
             */
            threshold: {
                /**
                 * 源数据大小波动阈值。
                 * @example `1`
                 */
                sourceDataSizeThreshold: number;
                /**
                 * 源数据条目数波动阈值。
                 * @example `1`
                 */
                sourceDataRecordThreshold: number;
                /**
                 * 索引大小波动阈值。
                 * @example `1`
                 */
                indexSizeThreshold: number;
                /**
                 * 索引丢失阈值。
                 * @example `1`
                 */
                indexLossThreshold: number;
            };
            /**
             * ODPS召回表名称。
             * @example `test_table`
             */
            tableName: string;
            /**
             * 集群ID。
             * @example `244`
             */
            clusterId: string;
            /**
             * 定时调度任务Cron。
             * @example `* * 24 7 0`
             */
            cron: string;
            /**
             * 召回算法配置描述。
             * @example `test`
             */
            description: string;
            /**
             * ODPS中的ProjectName。
             * @example `test`
             */
            projectName: string;
            /**
             * 召回算法配置名称。
             * @example `test`
             */
            algorithmName: string;
            /**
             * 是否开启定时启动实验任务配置。
             * 取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `true`
             */
            cronEnabled: boolean;
        };
    };
    /**
     * 请求的ID。
     * @example `7585C2B2-0D61-4C96-AC5D-B960BFEDD4A3`
     */
    requestId: string;
}
