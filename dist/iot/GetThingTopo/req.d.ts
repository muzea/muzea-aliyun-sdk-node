export interface GetThingTopoRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 返回结果中每页显示的记录数量。最大值不超过50。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 网关设备所属的产品**ProductKey**。
     * > 如果传入该参数，需同时传入**DeviceName**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 网关设备的名称。
     * > 如果传入该参数，需同时传入**ProductKey**。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 从返回结果中的第几页开始显示。
     * 查询数据最多不能超过10,000条，**PageNo**值不能超过数据能显示的页数。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 网关设备ID。物联网平台为该网关设备颁发的ID，设备的唯一标识符。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
}
