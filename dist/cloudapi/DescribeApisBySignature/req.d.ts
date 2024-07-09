export interface DescribeApisBySignatureRequest {
    /**
     * 指定查询要用的签名密钥ID
     * @example `dd05f1c54d6749eda95f9fa6d491449a`
     */
    "SignatureId": string;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
}
