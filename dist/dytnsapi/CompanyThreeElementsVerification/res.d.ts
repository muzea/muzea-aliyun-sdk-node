export interface CompanyThreeElementsVerificationResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `-`
     */
    AccessDeniedDetail: string;
    /**
     * 公共参数，每个请求返回的ID都是唯一的，可用于排查和定位问题。
     * @example `68A40250-50CD-034C-B728-0BD135850177`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 结构体。
     */
    Data: {
        /**
         * 企业详细信息。
         * @example `{
              "enterpriseStatus": "在营（开业）",
              "openTime": "2023-05-25/2053-05-24"
        }`
         */
        DetailInfo: {
            /**
             * 企业营业期限。
             * @example `2023-05-25/2053-05-24`
             */
            OpenTime: string;
            /**
             * 企业经营状态。
             * @example `在营（开业）`
             */
            EnterpriseStatus: string;
        };
        /**
         * 校验不一致的字段
         */
        InconsistentData: string[];
        /**
         * 核验结果。取值：
         * - true：信息核验一致，且企业正常经营。
         * - false：核验不通过。
         * @example `false`
         */
        VerifyResult: string;
        /**
         * 核验结果编码。取值：
         * - 0：核验一致
         * - 1：核验一致，企业非正常营业
         * - 2：人企核验不一致
         * - 3：企业二要素不通过
         * - 4：查无企业
         * - 5：人在库中不存在
         * @example `2`
         */
        ReasonCode: number;
    };
    /**
     * 请求状态码。
     * @example `OK`
     */
    Code: string;
}
