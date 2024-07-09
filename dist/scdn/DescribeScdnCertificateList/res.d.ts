export interface DescribeScdnCertificateListResponse {
    /**
     * 请求ID
     * @example `FC0E34AC-0239-44A7-AB0E-800DE522C8DA`
     */
    RequestId: string;
    /**
     * CertificateListModel类型
     */
    CertificateListModel: {
        /**
         * 证书个数
         * @example `2`
         */
        Count: number;
        CertList: {
            /**
             * 证书列表信息
             */
            Cert: {
                /**
                 * 时间戳
                 * @example `1512388610`
                 */
                LastTime: number;
                /**
                 * 证书指纹
                 * @example `xxx`
                 */
                Fingerprint: string;
                /**
                 * 证书名称
                 * @example `证书1`
                 */
                CertName: string;
                /**
                 * 证书发行商
                 * @example `xxx`
                 */
                Issuer: string;
                /**
                 * 证书ID
                 * @example `123`
                 */
                CertId: number;
                /**
                 * 证书中的CN属性，一般是一个域名
                 * @example `example.com`
                 */
                Common: string;
            }[];
        };
    };
}
