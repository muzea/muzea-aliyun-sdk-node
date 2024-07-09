export interface DescribeVulMetaCountStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `571B2642-BF51-5BDD-906B-D2340DB9****`
     */
    RequestId: string;
    /**
     * linux软件漏洞数。
     * @example `10`
     */
    CveCount: number;
    /**
     * windows系统漏洞数。
     * @example `10`
     */
    SysCount: number;
    /**
     * 应用漏洞数。
     * @example `0`
     */
    AppCount: number;
    /**
     * RASP支持防护的漏洞数。
     * @example `10`
     */
    RaspDefendCount: number;
}
