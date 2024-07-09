export interface ListDegradeRulesOfAppRequest {
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台“应用管理>基本信息”中查看对应的ID。
     * @example `ahas-demo`
     */
    "AppName": string;
    /**
     * 当前页码，默认为1。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页数据条数，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
