export interface QueryDeviceCertRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 设备所属产品的ProductKey。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 设备名称。
     * @example `light`
     */
    "DeviceName": string;
}
