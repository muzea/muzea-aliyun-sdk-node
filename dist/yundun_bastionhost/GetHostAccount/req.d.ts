export interface GetHostAccountRequest {
    /**
     * 指定要查询的主机账户所在堡垒机的实例ID。
     * >您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的主机账户所在堡垒机的区域ID。
     * >区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询的主机账户ID。
     * > 您可以调用[ListHostAccounts](~~204372~~)接口获取该参数。
     * @example `1`
     */
    "HostAccountId": string;
}
