export interface UpdateFaceUserGroupAndDeviceGroupRelationResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `access control not exist`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 用户组与设备组同步关系控制ID。
         * @example `qcb2yea4ha4d****`
         */
        ControlId: string;
        /**
         * 最后一次更新用户组与设备组之间的人脸同步关系时间。
         * @example `2020-04-25 19:29:30`
         */
        ModifiedTime: string;
    };
}
