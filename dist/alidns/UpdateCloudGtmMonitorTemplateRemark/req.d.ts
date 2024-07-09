export interface UpdateCloudGtmMonitorTemplateRemarkRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 健康探测模板ID，唯一标识健康探测模板。
     * @example `mtp-89518052455928**00`
     */
    "TemplateId": string;
    /**
     * 填写更新后的备注，传空值则删除备注。
     * @example `test`
     */
    "Remark"?: string;
}
