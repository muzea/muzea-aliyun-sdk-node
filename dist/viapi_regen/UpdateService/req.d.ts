export interface UpdateServiceRequest {
    /**
     * 服务ID，用以标识唯一服务。
     * @example `28`
     */
    "Id": number;
    /**
     * 服务名称。
     * @example `test3`
     */
    "Name": string;
    /**
     * 服务描述。
     * @example `test3描述`
     */
    "Description"?: string;
    /**
     * 授权类型。取值：
     * - PUBLIC：指当前服务可被任何账号调用访问。
     * - DESIGNATED_ACCOUNT：指当前服务只能被指定的账户访问。
     * @example `DESIGNATED_ACCOUNT`
     */
    "AuthorizationType"?: string;
    /**
     * 授权账号，可以指定允许访问当前服务的账户。
     * @example `1716735326807772,1219984605228589`
     */
    "AuthorizedAccount"?: string;
}
