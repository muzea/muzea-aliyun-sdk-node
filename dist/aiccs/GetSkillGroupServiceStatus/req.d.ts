export interface GetSkillGroupServiceStatusRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**实例管理**中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 开始日期时间戳。单位：毫秒。
     * @example `1615083365000`
     */
    "StartDate"?: number;
    /**
     * 结束日期时间戳。单位：毫秒。
     * @example `1617761765000`
     */
    "EndDate"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 坐席ID列表。
     */
    "AgentIds"?: number[];
    /**
     * 部门ID列表。
     */
    "DepIds"?: number[];
    /**
     * 技能组ID列表。
     */
    "GroupIds"?: number[];
    /**
     * 时间纬度类型。取值：
     * - **minute**：分钟。
     * - **hour**：小时。
     * - **day**：天。
     * @example `minute`
     */
    "TimeLatitudeType"?: string;
    /**
     * 是否根据技能组分组查询。默认值：**false**。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ExistAgentGrouping"?: boolean;
    /**
     * 是否根据部门分组查询。默认值：**false**。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ExistDepartmentGrouping"?: boolean;
    /**
     * 是否根据技能组分组查询。默认值：**false**。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ExistSkillGroupGrouping"?: boolean;
    /**
     * 是否根据机器实例分组查询。默认值：**false**。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ExistRobotInstanceGrouping"?: boolean;
    /**
     * 是否根据渠道实例分组查询。默认值：**false**。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ExistChannelInstanceGrouping"?: boolean;
}
