export interface ConfigureSynchronizationJobReplicatorCompareRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用[DescribeSynchronizationJobs](~~49454~~)接口查询。
     * @example `dtsexjk1alb116****`
     */
    "SynchronizationJobId": string;
    /**
     * 指定同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当数据同步实例的同步拓扑为双向同步时，才需要传入本参数。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 全镜像开关，取值：
     * - **true**：打开。
     * - **false**：关闭。
     * @example `true`
     */
    "SynchronizationReplicatorCompareEnable"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
}
