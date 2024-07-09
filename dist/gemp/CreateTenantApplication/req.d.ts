export interface CreateTenantApplicationRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 应用协同渠道
         * @example `DINGDING`
         */
        channel: string;
        /**
         * 幂等标识
         * @example `7C56D225-7C34-40BB-9624-C8BA449260E6`
         */
        clientToken: string;
    };
}
