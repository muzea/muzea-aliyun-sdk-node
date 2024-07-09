export interface ListTableVersionsRequest {
    /**
     * 数据库分类命名空间，默认填写主账号Uid
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 元数据库名称
     * @example `database_test`
     */
    "DatabaseName"?: string;
    /**
     * 元数据表名称
     * @example `test_table_20200715162543389`
     */
    "TableName"?: string;
    /**
     * 翻页token，从返回结果返回，无则传空字符串或''
     * @example `''`
     */
    "NextPageToken"?: string;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
}
