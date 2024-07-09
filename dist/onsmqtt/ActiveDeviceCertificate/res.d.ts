export interface ActiveDeviceCertificateResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 已激活设备证书的SN序列号，用于唯一标识一个设备证书。
     * @example `356217374433******`
     */
    DeviceSn: string;
}
