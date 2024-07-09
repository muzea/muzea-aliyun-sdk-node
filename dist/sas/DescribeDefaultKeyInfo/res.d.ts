export interface DescribeDefaultKeyInfoResponse {
    /**
     * 公司名称。
     * @example `****技术股份有限公司`
     */
    Names: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578A****`
     */
    RequestId: string;
    /**
     * 域名列表。
     */
    DomainList: string[];
}
