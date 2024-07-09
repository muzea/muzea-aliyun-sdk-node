export interface ListDatabaseAccountsRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-7mz2za0ro06`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 指定要查询数据库账户的数据库实例ID。
     * > 您可以调用[ListDatabases](~~2758822~~)接口获取该参数。
     * @example `3`
     */
    "DatabaseId"?: string;
    /**
     * 指定分页查询时，当前页的页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的数据库账户名称。最多支持128字符，仅支持精确查询。
     * @example `test`
     */
    "DatabaseAccountName"?: string;
}
