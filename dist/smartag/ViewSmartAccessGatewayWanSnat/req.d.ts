export interface ViewSmartAccessGatewayWanSnatRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-iv408aov6k7xxm****`
     */
    "SagInsId"?: string;
    /**
     * 智能接入网关设备序列号。
     * @example `sagf4ea****`
     */
    "SagSn"?: string;
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 是否只查询跨账号所属的智能接入网关实例。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "CrossAccount"?: boolean;
    /**
     * 智能接入网关实例所属的阿里云账号（主账号）ID。
     * @example `109790620697****`
     */
    "ResourceUid"?: string;
}
