export interface GetTableProfileRequest {
    /**
     * 数据目录ID，默认填写主账号ID
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 元数据库名称
     * @example `test_db`
     */
    "DatabaseName": string;
    /**
     * 元数据表名称
     * @example `test_tbl`
     */
    "TableName": string;
}
