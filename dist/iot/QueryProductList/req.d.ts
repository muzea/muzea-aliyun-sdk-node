export interface QueryProductListRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 指定返回结果中每页显示的产品数量，最大值是200。
     * @example `2`
     */
    "PageSize": number;
    /**
     * 资源组ID。
     * ><notice>目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * ></notice>
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 指定要查看的产品类型，取值：
     * - **iothub_senior**：使用物模型版产品。
     * - **iothub**：不使用物模型版产品。
     * > 如果不传入该参数，则返回所有产品的列表。
     * @example `iothub_senior`
     */
    "AliyunCommodityCode"?: string;
    /**
     * 指定显示返回结果中的第几页。
     * @example `1`
     */
    "CurrentPage": number;
}
