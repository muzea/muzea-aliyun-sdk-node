export interface DeleteApDeviceRequest {
    /**
     * 基站设备的Mac地址。
     * @example `11:22:33:44:55:66`
     */
    "ApMac": string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    "ExtraParams"?: string;
}
