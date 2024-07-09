export interface ListClientKeysResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2312e45f-b2fa-4c34-ad94-3eca50932916`
     */
    RequestId: string;
    /**
     * ClientKey列表。
     */
    ClientKeys: {
        /**
         * ClientKey的ID。
         * @example `KAAP.66abf237-63f6-4625-b8cf-47e1086e****`
         */
        ClientKeyId: string;
        /**
         * ClientKey的创建时间。
         * @example `2023-08-31T09:14:38Z`
         */
        CreateTime: string;
        /**
         * ClientKey的公钥内容。
         * @example `-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIQT/sAVRxwYp54mrw****-----END CERTIFICATE-----`
         */
        PublicKeyData: string;
        /**
         * ClientKey的私钥算法。
         * @example `RSA_2048`
         */
        KeyAlgorithm: string;
        /**
         * ClientKey的有效期起始时间。
         * @example `2023-08-31T17:14:33Z`
         */
        NotBefore: string;
        /**
         * ClientKey的有效期结束时间。
         * @example `2028-08-31T17:14:33Z`
         */
        NotAfter: string;
        /**
         * ClientKey由谁生成。
         * 目前仅支持由KMS生成，取值为KMS_PROVIDED。
         * @example `KMS_PROVIDED`
         */
        KeyOrigin: string;
        /**
         * 绑定的应用接入点名称。
         * @example `aap_test`
         */
        AapName: string;
    }[];
}
