export interface CreateKeyPairResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
    /**
     * 密钥对名称。长度为2~64个英文或中文字符。必须以大小写字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `KeyPairName`
     */
    KeyPairName: string;
    /**
     * 密钥对的私钥。PEM编码的PKCS#8格式的私钥部分。
     * @example `MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****`
     */
    PrivateKeyBody: string;
}
