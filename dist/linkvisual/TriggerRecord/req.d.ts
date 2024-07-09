export interface TriggerRecordRequest {
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `zLZyi6aOLyOSHa****yD000100`
     */
    "IotId"?: string;
    /**
     * 码流类型：
     * - **0**（默认）：主码流。
     * - **1**：辅码流。
     * @example `0`
     */
    "StreamType"?: number;
    /**
     * 预录时长，取值范围0~10，单位为秒。
     * >设备具备预录功能时，才可生成预录时长，否则，预录时长为0。
     * @example `5`
     */
    "PreRecordDuration"?: number;
    /**
     * 录像时长，包括预录时长，取值范围10~7200，单位为秒。
     * > 单个录像文件长度最大为30分钟，当录像时长大于30分钟时，会自动切割成多个录像文件。
     * @example `60`
     */
    "RecordDuration": number;
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * <props="intl">无需传入此参数。</props>
     * @example `iot-cn-n6w1y5****0t`
     */
    "IotInstanceId"?: string;
}
