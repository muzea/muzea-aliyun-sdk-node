export interface CertificatePrivateKeySignResponse {
    /**
     * 签名值。
     * 使用Base64编码。
     * @example `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`
     */
    SignatureValue: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5979d897-d69f-4fc9-87dd-f3bb73c40b80`
     */
    RequestId: string;
    /**
     * 证书ID。
     * @example `12345678-1234-1234-1234-12345678****`
     */
    CertificateId: string;
}
