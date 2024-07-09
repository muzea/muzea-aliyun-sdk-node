export interface SetLoadBalancerTCPListenerAttributeRequest {
    /**
     * 负载均衡实例的ID。
     * @example `lb-5snthcyu1x10g7tywj7iu****`
     */
    "LoadBalancerId": string;
    /**
     * 需要修改属性的监听端口。取值：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 设置监听的描述信息。长度限制为**1**~**80**个字符。
     * > 不能以`http://`和`https://`开头。
     * @example `example`
     */
    "Description"?: string;
    /**
     * 调度算法。取值：
     * - **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * - **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
     * - **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * - **sch**：基于源IP地址的一致性Hash，相同的源地址会调度到相同的后端服务器。
     * - **qch**：基于QUIC Connection ID一致性Hash，相同的QUIC Connection ID会调度到相同的后端服务器。
     * - **iqch**：针对iQUIC CID的特定三个字节进行一致Hash，第2~第4三个字节相同的会调度到相同的后端服务器。
     * @example `wrr`
     */
    "Scheduler"?: string;
    /**
     * 会话保持的超时时间。
     * - 默认值：0，表示关闭会话保持。
     * - 取值：**0**~**3600**。
     * - 单位：秒。
     * @example `0`
     */
    "PersistenceTimeout"?: number;
    /**
     * 连接超时时间，取值：**10**~**900**，单位：秒。
     * @example `500`
     */
    "EstablishedTimeout"?: number;
    /**
     * 健康检查连续成功多少次后，将后端服务器的健康检查状态由fail（后台服务器不可达）判定为success（后台服务器可达）。取值：**2**~**10**。
     * @example `4`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查连续失败多少次后，将后端服务器的健康检查状态由success（后台服务器可达）判定为fail（后台服务器不可达）。取值：**2**~**10**。
     * @example `4`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。如果后端ENS在指定的时间内没有响应，则判定为健康检查失败。
     * - 默认值：5秒。
     * - 取值：**1**~**300**。
     * - 单位：秒。
     * > 如果HealthCheckConnectTimeout的值小于HealthCheckInterval的值，则HealthCheckConnectTimeout无效，超时时间为HealthCheckInterval的值。
     * @example `100`
     */
    "HealthCheckConnectTimeout"?: number;
    /**
     * 健康检查使用的端口，取值：**1**~**65535**。不设置此参数时，表示使用后端服务端口（BackendServerPort）。
     * @example `8000`
     */
    "HealthCheckConnectPort"?: number;
    /**
     * 健康检查的时间间隔。取值：**1**~**50**，单位：秒。
     * @example `5`
     */
    "HealthCheckInterval"?: number;
    /**
     * 用于健康检查的域名。
     * @example `www.aliyundoc.com`
     */
    "HealthCheckDomain"?: string;
    /**
     * 用于健康检查的URI。长度限制为**1**~**80**。
     * > URL不能只有`/`，但必须以`/`开头。
     * @example `/aliyundoc/index.html`
     */
    "HealthCheckURI"?: string;
    /**
     * 健康检查正常时的HTTP状态码。取值：
     * - **http_2xx**（默认值）。
     * - **http_3xx**。
     * - **http_4xx**。
     * - **http_5xx**。
     * @example `http_2xx`
     */
    "HealthCheckHttpCode"?: string;
    /**
     * 健康检查类型。取值：
     * - **tcp**（默认值）。
     * - **http**。
     * @example `tcp`
     */
    "HealthCheckType"?: string;
    /**
     * 是否开启EIP透传，取值：
     * - **on**：开启。
     * - **off**（默认值）：关闭。
     * @example `on`
     */
    "EipTransmit"?: string;
}
