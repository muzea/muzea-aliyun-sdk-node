export interface BatchUnbindTemplateResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Bindings: {
        /**
         * 错误信息。
         * > 仅当操作出错时存在。
         * @example `some error`
         */
        Error: string;
        /**
         * 实例ID。
         * @example `323*****994-cn-qingdao`
         */
        InstanceId: string;
        /**
         * 实例类型。
         * @example `group`
         */
        InstanceType: string;
        /**
         * 模板ID。
         * @example `323*****998-cn-qingdao`
         */
        TemplateId: string;
    }[];
}
