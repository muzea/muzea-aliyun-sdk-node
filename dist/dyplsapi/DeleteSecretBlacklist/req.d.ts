export interface DeleteSecretBlacklistRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC1232****`
     */
    "PoolKey": string;
    /**
     * 黑名单号码。根据**BlackType**参数值决定取值类型：
     * - **点对点黑名单**：一对号码，用英文冒号（:）分隔。
     * - **号池黑名单**：单个号码。
     * @example `1825****383:1825****483`
     */
    "BlackNo": string;
    /**
     * 黑名单备注。
     * @example `黑名单备注`
     */
    "Remark"?: string;
    /**
     * 黑名单类型。取值：
     * - **POINT\_TO\_POINT_BLACK**：点对点黑名单。
     * - **PARTNER\_GLOBAL\_NUMBER\_BLACK**：号池黑名单。
     * @example `POINT_TO_POINT_BLACK`
     */
    "BlackType": string;
    /**
     * 呼叫方向控制。取值：
     * - **PHONEA\_REJECT**：BlackNo中第一个号码可以呼叫第二个号码，第二个号码不能呼叫第一个。
     * - **PHONEB\_REJECT**：BlackNo中第一个号码不可呼叫第二个号码，第二个号码可呼叫第一个号码。
     * - **不填**：BlackNo中两个号码不可相互呼叫。
     * @example `PHONEA_REJECT`
     */
    "WayControl"?: string;
}
