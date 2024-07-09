export interface ListUserSayRequest {
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 机器人ID
     * @example ` chatbot-cn-yjzbyrEvqd`
     */
    "InstanceId": string;
    /**
     * 意图ID
     * @example `232`
     */
    "IntentId": number;
    /**
     * 筛选用户话术
     * @example `您做核酸了嘛`
     */
    "Content"?: string;
    /**
     * 当前页，默认1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小，默认10，最大值1000
     * @example `10`
     */
    "PageSize"?: number;
}
