export interface UpdateCloudGtmInstanceConfigRemarkRequest {
    /**
     * 返回值语言，取值：
     *
     * - **zh-CN**：中文。
     * - **en-US**：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 全局流量管理3.0实例id，唯一确定本次需要操作的实例对象。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId"?: string;
    /**
     * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识本次需要修改的域名实例配置。
     * @example `Config-000**11`
     */
    "ConfigId"?: string;
    /**
     * 备注，传入参数即为更新后的目标备注内容。
     * @example `API`
     */
    "Remark"?: string;
}
