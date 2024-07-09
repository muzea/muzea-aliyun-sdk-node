export interface QuerySoundCodeLabelBatchListRequest {
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
     * 排程唯一标识。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "ScheduleCode": string;
    /**
     * 指定每页返回的时间段条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定显示返回结果中的第几页。取值范围1~10,000，默认值为1。
     * @example `1`
     */
    "PageId"?: number;
}
