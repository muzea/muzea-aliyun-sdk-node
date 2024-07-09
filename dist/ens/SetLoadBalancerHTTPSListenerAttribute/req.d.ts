export interface SetLoadBalancerHTTPSListenerAttributeRequest {
    /**
     * 负载均衡实例的ID。
     * @example `lb-5snthcyu1x10g7tywj7iu****`
     */
    "LoadBalancerId": string;
    /**
     * 需要修改属性的监听端口。取值：**1**~**65535**。
     * @example `10002`
     */
    "ListenerPort": number;
    /**
     * 设置监听名称。长度限制为**1**~**80**个字符。
     * > 不能以`http://`和`https://`开头。
     * @example `监听说明`
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
     * 是否开启健康检查。取值：
     * - **on**：开启。
     * - **off**：关闭。
     * @example `on`
     */
    "HealthCheck"?: string;
    /**
     * 用于健康检查的域名。
     * > 在HealthCheck值为on时才会有效。
     * @example `www.example.com`
     */
    "HealthCheckDomain"?: string;
    /**
     * 用于健康检查的URI。长度限制为**1**~**80**。
     * > - URL不能只有`/`，但必须以`/`开头。
     * >- HealthCheck值为on时才会有效。
     * @example `/checkpreload.htm`
     */
    "HealthCheckURI"?: string;
    /**
     * 健康检查连续成功多少次后，将后端服务器的健康检查状态由fail（后台服务器不可达）判定为success（后台服务器可达）。取值：**2**~**10**。
     * > HealthCheck值为on时才会有效。
     * @example `3`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查连续失败多少次后，将后端服务器的健康检查状态由success（后台服务器可达）判定为fail（后台服务器不可达）。取值：**2**~**10**。
     * > HealthCheck值为on时才会有效。
     * @example `3`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。如果后端ENS在指定的时间内没有响应，则判定为健康检查失败。
     * - 默认值：5秒。
     * - 取值：**1**~**300**。
     * - 单位：秒。
     * > - HealthCheck值为on时才会有效。
     * >- 如果HealthCHeckTimeout的值小于HealthCheckInterval的值，则HealthCHeckTimeout无效，超时时间为HealthCheckInterval的值。
     * @example `9`
     */
    "HealthCheckTimeout"?: number;
    /**
     * 健康检查使用的端口，取值：**1**~**65535**。不设置此参数时，表示使用后端服务端口（BackendServerPort）。
     * > HealthCheck值为on时才会有效。
     * @example `7001`
     */
    "HealthCheckConnectPort"?: number;
    /**
     * 健康检查的时间间隔。取值：**1**~**50**，单位：秒。
     * > 在HealthCheck值为on时才会有效。
     * @example `2`
     */
    "HealthCheckInterval"?: number;
    /**
     * 健康检查正常时的HTTP状态码。取值：
     * - **http_2xx**（默认值）。
     * - **http_3xx**。
     * - **http_4xx**。
     * - **http_5xx**。
     * > HealthCheck值为on时才会有效。
     * @example `http_2xx`
     */
    "HealthCheckHttpCode"?: string;
    /**
     * 指定连接空闲超时时间，默认值：15秒，取值：**1**~**60**，单位：秒。
     * > 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
     * @example `15`
     */
    "IdleTimeout"?: number;
    /**
     * 指定请求超时时间，默认值：60秒，取值：**1**~**180**，单位：秒。
     * > 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP的504错误码。
     * @example `60`
     */
    "RequestTimeout"?: number;
    /**
     * 服务器证书的ID。
     * @example `6027667`
     */
    "ServerCertificateId"?: string;
    /**
     * 监听HTTP类型健康检查的健康检查方法。取值：
     * - **head**（默认值）：只请求页面的首部。
     * - **get**：请求指定的页面信息，并返回实体主体。
     * > HealthCheck值为on时才会有效。
     * @example `get`
     */
    "HealthCheckMethod"?: string;
}
