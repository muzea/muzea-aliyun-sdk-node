export interface DeletePartitionRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         * 数据库分类命名空间，默认填写主账号Uid
         * @example `1344371`
         */
        CatalogId: string;
        /**
         * 元数据库名称
         * @example `database_test`
         */
        DatabaseName: string;
        /**
         * 如果相同名字的分区已经删除，是否忽略异常
         * @example `true`
         */
        IfExists: boolean;
        /**
         * 分区值
         */
        PartitionValues: any;
        /**
         * 元数据表名称
         * @example `test_table_20201225`
         */
        TableName: string;
    };
}
