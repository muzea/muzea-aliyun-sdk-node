export interface ModifySceneDefensePolicyRequest {
    /**
     * 要编辑的策略ID。
     * > 您可以调用[DescribeSceneDefensePolicies](~~159382~~)查询所有策略ID。
     * @example `321a-fd31-df51-****`
     */
    "PolicyId": string;
    /**
     * 策略名称。
     * @example `testpolicy`
     */
    "Name": string;
    /**
     * 策略模板。取值：
     * - **promotion**：重大活动
     * - **bypass**：全量转发
     * @example `promotion`
     */
    "Template": string;
    /**
     * 生效开始时间。时间戳格式，单位：毫秒。
     * @example `1585670400000`
     */
    "StartTime": number;
    /**
     * 生效结束时间。时间戳格式，单位：毫秒。
     * @example `1586016000000`
     */
    "EndTime": number;
}
