export interface ListDevicesResponse {
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 返回内容
     */
    Devices: {
        /**
         * 设备序列号
         * @example `xxxxxxxx`
         */
        SerialNumber: string;
        /**
         * 设备状态
         * @example `0`
         */
        Status: string;
        /**
         * 设备型号ID
         * @example `10`
         */
        DeviceModelId: number;
        /**
         * MAC地址
         * @example `00:00:00:00:00:00`
         */
        MacAddress: string;
        /**
         * 设备ID
         * @example `cn.1234567890`
         */
        DeviceId: string;
        /**
         * 设备类型
         * @example `car_auto	`
         */
        DeviceType: string;
        /**
         * 项目ID
         * @example `projectTest`
         */
        ProjectId: string;
        /**
         * 设备型号
         * @example `ROEWE RX5	`
         */
        DeviceModel: string;
        /**
         * 设备使用性质。
         * 0表示私人设备，1表示运营或共享设备。
         * @example `0`
         */
        UsageType: number;
        /**
         * 设备车架号（汽车相关产品使用）
         * @example `xxxxxxxx`
         */
        Vin: string;
        /**
         * 设备使用性质描述。
         *  **private**表示私人设备，**business**表示运营或共享设备。
         * @example `private`
         */
        UsageTypeDesc: string;
        /**
         * 设备UUID
         * @example `xxxxxxxx`
         */
        Uuid: string;
        /**
         * 硬件ID
         * @example `xxxxxxxx`
         */
        HardwareId: string;
        /**
         * 设备所在国家代码
         * @example `cn`
         */
        Region: string;
        /**
         * 软件ID
         * @example `xxxxxxxx`
         */
        SoftwareId: string;
        /**
         * 设备昵称
         * @example `我的设备`
         */
        Name: string;
        /**
         * 设备品牌
         * @example `ROEWE`
         */
        DeviceBrand: string;
    }[];
}
