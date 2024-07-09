export interface BatchCheckDeviceNamesResponse {
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
     * 返回的数据。
     */
    Data: {
        /**
         * 调用成功时，系统返回的申请批次ID。使用该ApplyId，调用[BatchRegisterDeviceWithApplyId](~~69514~~)接口来批量创建设备。
         * @example `1295006`
         */
        ApplyId: number;
        InvalidDetailList: {
            InvalidDetailList: {
                NickName: string;
                ErrorMsg: string;
                DeviceName: string;
            }[];
        };
        RepeatedDeviceNameList: {
            RepeatDevieNameList: string[];
        };
        InvalidDeviceNameList: {
            InvalidDeviceName: string[];
        };
        InvalidDeviceNicknameList: {
            InvalidDeviceNickname: string[];
        };
    };
}
