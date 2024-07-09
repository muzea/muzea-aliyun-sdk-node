export interface ListListenersResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 网络型负载均衡监听列表。
     */
    Listeners: {
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `Created`
             */
            Key: string;
            /**
             * 标签值。
             * @example `TF`
             */
            Value: string;
        }[];
        /**
         * 网络型负载均衡实例ID。
         * @example `nlb-83ckzc8d4xlp8o****`
         */
        LoadBalancerId: string;
        /**
         * 监听ID。
         * @example `lsn-ga6sjjcll6ou34l1et****`
         */
        ListenerId: string;
        /**
         * 监听协议。取值：**TCP**、**UDP**或**TCPSSL**。
         * @example `TCPSSL`
         */
        ListenerProtocol: string;
        /**
         * 监听端口。
         * @example `443`
         */
        ListenerPort: number;
        /**
         * 全端口监听起始端口。
         * @example `233`
         */
        StartPort: string;
        /**
         * 全端口监听结束端口。
         * @example `455`
         */
        EndPort: string;
        /**
         * 自定义监听名称。
         * 长度限制为2~256个字符，支持中文和英文字母，可包含数字、半角逗号（,）、半角句号（.）、半角分号（;）、正斜线（/）、at（@）、下划线（_）和短划线（-）。
         * @example `tcpssl_443`
         */
        ListenerDescription: string;
        /**
         * 服务器组ID。
         * @example `sgp-ppdpc14gdm3x4o****`
         */
        ServerGroupId: string;
        /**
         * 连接空闲超时时间。单位：秒。取值范围：**1**~**900**。默认值：**900**。
         * @example `900`
         */
        IdleTimeout: number;
        /**
         * 安全策略ID。
         * > 仅对TCPSSL监听生效。
         * @example `tls_cipher_policy_1_1`
         */
        SecurityPolicyId: string;
        /**
         * 服务器证书列表信息。
         * > 仅对TCPSSL监听生效。
         */
        CertificateIds: string[];
        /**
         * CA证书列表信息。
         * > 仅对TCPSSL监听生效。
         */
        CaCertificateIds: string[];
        /**
         * 是否启动双向认证。取值：
         * - **true**：启动。
         * - **false**：关闭。
         * @example `false`
         */
        CaEnabled: boolean;
        /**
         * 当前监听的状态，取值：
         * - **Provisioning**：创建中。
         * - **Running**：运行中。
         * - **Configuring**：配置中。
         * - **Stopping**：停止中。
         * - **Stopped**：已停止。
         * - **Starting**：启动中。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * @example `Running`
         */
        ListenerStatus: string;
        /**
         * 网络型负载均衡实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 是否开启ALPN。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        AlpnEnabled: boolean;
        /**
         * ALPN策略。取值：
         * - **HTTP1Only**
         * - **HTTP2Only**
         * - **HTTP2Preferred**
         * - **HTTP2Optional**
         * @example `HTTP1Only`
         */
        AlpnPolicy: string;
        /**
         * 是否开启秒级监控功能。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        SecSensorEnabled: boolean;
        /**
         * 是否开启通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        ProxyProtocolEnabled: boolean;
        /**
         * 通过Proxy Protocol协议携带VpcId、PrivateLinkEpId、PrivateLinkEpsId信息到后端服务器配置。
         */
        ProxyProtocolV2Config: {
            /**
             * 是否开启通过Proxy Protocol协议携带VpcId到后端服务器。取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `false`
             */
            Ppv2VpcIdEnabled: boolean;
            /**
             * 是否开启通过Proxy Protocol协议携带PrivateLinkEpId到后端服务器。取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `false`
             */
            Ppv2PrivateLinkEpIdEnabled: boolean;
            /**
             * 是否开启通过Proxy Protocol协议携带PrivateLinkEpsId到后端服务器。取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `false`
             */
            Ppv2PrivateLinkEpsIdEnabled: boolean;
        };
        /**
         * 网络型负载均衡实例每秒新建连接限速值。取值范围：**0**~**1000000**。**0**表示不限速。
         * @example `1000`
         */
        Cps: number;
        /**
         * TCP报文的最大段大小。单位：字节，取值范围：**0**~**1500**。**0**表示不修改用户TCP报文的MSS值。
         * > 仅TCP、TCPSSL类型的监听支持该字段值。
         * @example `200`
         */
        Mss: number;
    }[];
    /**
     * 列表条目数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
