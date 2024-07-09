export interface DescribeCustomRoutingEndPointTrafficPolicyResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 终端节点所属全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    AcceleratorId: string;
    /**
     * 终端节点所属监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
    /**
     * 终端节点所属终端节点组ID。
     * @example `epg-bp1bpn0kn908w4nb****`
     */
    EndpointGroupId: string;
    /**
     * 流量通行目标所属终端节点ID。
     * @example `ep-2zewuzypq5e6r3pfh****`
     */
    EndpointId: string;
    /**
     * 流量通行目标所属终端节点交换机（vSwitch）实例的名称。
     * @example `vsw-test01`
     */
    Endpoint: string;
    /**
     * 流量通行目标ID。
     * @example `ply-bptest2****`
     */
    PolicyId: string;
    /**
     * 流量通行目标IP地址。
     * @example `10.0.XX.XX`
     */
    Address: string;
    /**
     * 流量通行目标端口范围。
     */
    PortRanges: {
        /**
         * 流量通行目标处理请求的起始端口。
         * @example `80`
         */
        FromPort: number;
        /**
         * 流量通行目标处理请求的结束端口。
         * @example `80`
         */
        ToPort: number;
    }[];
    /**
     * 流量通行目标的状态。
     * - **init**：初始化。
     * - **active**：正常。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `active`
     */
    State: string;
    /**
     * 托管实例所属的服务方ID。
     * > 仅在**ServiceManaged**参数为**True**时有效。
     * @example `ALB`
     */
    ServiceId: string;
    /**
     * 是否为托管实例。取值：
     * - **true**：是托管实例。
     * - **false**：不是托管实例。
     * @example `true`
     */
    ServiceManaged: boolean;
    /**
     * 用户在此托管实例下可执行的动作策略列表。
     * > - 仅在**ServiceManaged**参数为**True**时有效。
     * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
     */
    ServiceManagedInfos: {
        /**
         * 托管策略动作名称，取值：
         * - **Create**：创建实例。
         * - **Update**：更新当前实例。
         * - **Delete**：删除当前实例。
         * - **Associate**：引用/被引用当前实例。
         * - **UserUnmanaged**：用户解托管实例。
         * - **CreateChild**：在当前实例下创建子资源。
         * @example `Update`
         */
        Action: string;
        /**
         * 子资源类型，取值：
         * - **Listener**：监听资源。
         * - **IpSet**：加速地域资源。
         * - **EndpointGroup**：终端节点组资源。
         * - **ForwardingRule**：转发策略资源。
         * - **Endpoint**：终端节点资源。
         * - **EndpointGroupDestination**：自定义路由监听下的终端节点组协议映射资源。
         * - **EndpointPolicy**：自定义路由监听下的终端节点通行策略资源。
         * > 仅在**Action**参数为**CreateChild**时有效
         * @example `Listener`
         */
        ChildType: string;
        /**
         * 托管策略动作是否被托管，取值：
         * - **true**：托管策略动作被托管，用户无权在托管实例下执行Action指定的操作。
         * - **false**：托管策略动作未被托管，用户可在托管实例下执行Action指定的操作。
         * @example `false`
         */
        IsManaged: boolean;
    }[];
}
