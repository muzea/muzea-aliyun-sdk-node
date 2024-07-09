export interface QueryDeviceInfoResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回设备的基本信息。
     */
    Data: {
        /**
         * 设备的备注名称。
         * @example `detectors_in_beijing`
         */
        Nickname: string;
        /**
         * 设备所属产品的ProductKey。
         * @example `a1rYuVF****`
         */
        ProductKey: string;
        /**
         * 设备名称。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 设备密钥。
         * @example `mz2Canp4GB7qRVf1OYPNtRqB2anu****`
         */
        DeviceSecret: string;
        /**
         * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
         * @example `Q7uOhVRdZRRlDnTLv****00100`
         */
        IotId: string;
    };
}
