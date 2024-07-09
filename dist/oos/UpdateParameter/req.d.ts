export interface UpdateParameterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。取值范围：内容限制为字母、数字、中划线、下划线，长度不能超过200字符，且不能以ALIYUN、ACS、ALIBABA、ALICLOUD、OOS开头。
     * @example `MyParameter`
     */
    "Name": string;
    /**
     * 参数内容。长度限制为4096。
     * @example `update`
     */
    "Value": string;
    /**
     * 要给普通参数添加的描述信息。长度限制为200字符。
     * @example `update`
     */
    "Description"?: string;
    /**
     * 标签。
     * @example `{"k1": "v1", "k2": "v2"}`
     */
    "Tags"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
