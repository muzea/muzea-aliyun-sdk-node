export interface GetChatappTemplateMetricRequest {
    /**
     * 模板Code。
     * @example `744c4b5c79c9432497a075bdfca3****`
     */
    "TemplateCode": string;
    /**
     * 模板语言。
     * @example `en`
     */
    "Language"?: string;
    /**
     * ISV校验码，用于校验子账号是否由ISV授权。
     * @example `skdi3kksloslikd****`
     */
    "IsvCode"?: string;
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId"?: string;
    /**
     * 模板的模板类型。
     * 当未传递此值时，默认值为WHATSAPP。
     * @example `WHATSAPP`
     */
    "TemplateType"?: string;
    /**
     * 指标粒度。
     * @example `DAILY`
     */
    "Granularity"?: string;
    /**
     * 查询开始时间。
     * @example `1693107714687`
     */
    "Start": number;
    /**
     * 查询结束时间。
     * @example `1693407714687`
     */
    "End": number;
}
