export interface DescribeConfigurationRequest {
    /**
     * 配置ID
     * @example `com.aliyun.acm.example`
     */
    "DataId": string;
    /**
     * 分组
     * @example `DEFAULT_GROUP`
     */
    "Group": string;
    /**
     * 命名空间ID
     * @example `101100d2-ca66-42ba-b706-****`
     */
    "NamespaceId": string;
}
