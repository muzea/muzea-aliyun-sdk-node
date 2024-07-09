export interface GetTimingSyntheticTaskResponse {
    /**
     * 请求id
     * @example `E13430A6-57A9-56E9-9D8D-28FE8DEBCA40`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 云拨测任务ID。
         * @example `5308a2691f59422c8c3b7aeccec9cd3b`
         */
        TaskId: string;
        /**
         * 区域ID
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 拨测任务名称
         * @example `拨测任务`
         */
        Name: string;
        /**
         * 任务类型：
         * - 1：ICMP
         * - 2：TCP
         * - 3：DNS
         * - 4：HTTP
         * - 5：网站测速
         * - 6：文件下载
         * @example `5`
         */
        TaskType: number;
        /**
         * 任务配置
         */
        MonitorConf: {
            /**
             * ICMP拨测配置参数。当TaskType为1时必填。
             */
            NetICMP: {
                /**
                 * 拨测目标地址（主机）。只能是域名或者IP地址。
                 * @example `www.aliyun.com`
                 */
                TargetUrl: string;
                /**
                 * 建立TCP连接的时间间隔。单位为毫秒（ms），最小值为200，最大值为10000，默认为200。
                 * @example `200`
                 */
                Interval: number;
                /**
                 * 发送ICMP（Ping）数据包的数量。最小值为1，最大值为50，默认为4。
                 * @example `4`
                 */
                PackageNum: number;
                /**
                 * 发送ICMP（Ping）数据包的大小。单位为byte，允许设置为32, 64, 128, 256, 512, 1024。
                 * @example `1024`
                 */
                PackageSize: number;
                /**
                 * 是否拆分ICMP（Ping）数据包。默认为true。
                 * @example `true`
                 */
                SplitPackage: boolean;
                /**
                 * 超时时间，单位ms，默认20000，范围1000~300000。
                 * @example `2000`
                 */
                Timeout: number;
                /**
                 * 是否开启tracert。默认为true。
                 * @example `true`
                 */
                TracertEnable: boolean;
                /**
                 * tracert的最大跃点数。最小值为1，最大值为128，默认为64。
                 * @example `64`
                 */
                TracertNumMax: number;
                /**
                 * tracert的超时时间。单位为毫秒（ms），最小值为1000，最大值为300000，默认为60000。
                 * @example `60000`
                 */
                TracertTimeout: number;
            };
            /**
             * TCP拨测的配置参数。当TaskType为2时必填。
             */
            NetTCP: {
                /**
                 * 拨测目标地址。
                 * @example `127.0.0.1:8888`
                 */
                TargetUrl: string;
                /**
                 * 单次拨测建立连接的次数，1~16之间，默认4。
                 * @example `4`
                 */
                ConnectTimes: number;
                /**
                 * 建立TCP连接的时间间隔。单位为毫秒（ms），最小值为200，最大值为10000，默认为200。
                 * @example `200`
                 */
                Interval: number;
                /**
                 * TCP拨测超时时间。单位为毫秒（ms），最小值为1000，最大值为300000，默认为20000。
                 * @example `20000`
                 */
                Timeout: number;
                /**
                 * 是否开启tracert。默认为true。
                 * @example `true`
                 */
                TracertEnable: boolean;
                /**
                 * tracert的最大跃点数。最小值为1，最大值为128，默认为20。
                 * @example `20`
                 */
                TracertNumMax: number;
                /**
                 * tracert的超时时间。单位为毫秒（ms），最小值为1000，最大值为300000，默认为60000。
                 * @example `60000`
                 */
                TracertTimeout: number;
            };
            /**
             * DNS拨测的配置参数。当TaskType为3时必填。
             */
            NetDNS: {
                /**
                 * 拨测域名。
                 * @example `www.aliyun.com`
                 */
                TargetUrl: string;
                /**
                 * DNS服务器IP类型。
                 * - 0（默认）：ipv4
                 * - 1：ipv6
                 * - 2: 自动
                 * @example `0`
                 */
                DnsServerIpType: number;
                /**
                 * NS服务器IP，默认114.114.114.114。
                 * @example `114.114.114.114`
                 */
                NsServer: string;
                /**
                 * DNS查询方式，0: 递归， 1：迭代。
                 * @example `0`
                 */
                QueryMethod: number;
                /**
                 * DNS拨测超时时间。单位为毫秒（ms），最小值为1000，最大值为45000，默认为5000。
                 * @example `5000`
                 */
                Timeout: number;
            };
            /**
             * HTTP(S)类型任务配置信息。
             */
            ApiHTTP: {
                /**
                 * 拨测地址。
                 * @example `http://127.0.0.1:8090/api/list`
                 */
                TargetUrl: string;
                /**
                 * 请求方法。
                 * - POST
                 * - GET
                 * @example `POST`
                 */
                Method: string;
                /**
                 * HTTP请求头。
                 */
                RequestHeaders: any;
                /**
                 * HTTP 请求体。
                 */
                RequestBody: {
                    /**
                     * 请求体内容，为JSON字符串格式。当type为text/plain，application/json，application/xml，text/html，content内容转为JSON字符串即可。
                     * @example `text/plain`
                     */
                    Content: string;
                    /**
                     * 请求体类型，支持：text/plain、application/json、application/x-www-form-urlencoded、multipart/form-data、application/xml、text/html。
                     * @example `multipart/form-data`
                     */
                    Type: string;
                };
                /**
                 * 连接超时, ms，默认5000，范围为1000~300000ms。
                 * @example `5000`
                 */
                ConnectTimeout: number;
                /**
                 * 超时时间，ms，默认10000，范围为1000~300000ms。
                 * @example `10000`
                 */
                Timeout: number;
                /**
                 * 是否校验证书，默认为否。
                 * @example `false`
                 */
                CheckCert: boolean;
                /**
                 * ALPN 协议版本（wap移动端并且是HTTPS任务时可配置）：
                 * 0-default 系统默认行为
                 * 1-http/1.1
                 * 2-h2
                 * 3-off 关闭,不启用 alpn_protocol
                 * @example `1`
                 */
                ProtocolAlpnProtocol: number;
            };
            /**
             * 文件下载类型任务配置。
             */
            FileDownload: {
                /**
                 * 下载链接。
                 * @example `https://********`
                 */
                TargetUrl: string;
                /**
                 * 下载内核。
                 * - 1：curl
                 * - 0：WinInet
                 * @example `0`
                 */
                DownloadKernel: number;
                /**
                 * Quick协议
                 * - 1：http1
                 * - 2：http2
                 * - 3：http3
                 * @example `1`
                 */
                QuickProtocol: number;
                /**
                 * 连接超时。文件下载的连接超时必须在1000~120000ms之间，默认5000。
                 * @example `5000`
                 */
                ConnectionTimeout: number;
                /**
                 * 自定义请求头内容，JSON Map。
                 */
                CustomHeaderContent: any;
                /**
                 * 证书状态错误忽略。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateStatusError: number;
                /**
                 * 证书不可信忽略。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateUntrustworthyError: number;
                /**
                 * 主机无效错误忽略。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreInvalidHostError: number;
                /**
                 * 监测超时时间，ms，默认60000，范围1000~120000ms之间。
                 * @example `6000`
                 */
                MonitorTimeout: number;
                /**
                 * 是否支持重定向。
                 * - 0：不支持
                 * - 1（默认）：支持
                 * @example `0`
                 */
                Redirection: number;
                /**
                 * 传输大小，KB，默认2048KB，文件下载的传输大小必须在1~20480KB之间。
                 * @example `2048`
                 */
                TransmissionSize: number;
                /**
                 * 忽略证书撤销错误。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateCanceledError: number;
                /**
                 * 忽略CA证书授权错误。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateAuthError: number;
                /**
                 * 忽略证书过期错误。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateOutOfDateError: number;
                /**
                 * 忽略证书使用错误。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateUsingError: number;
                /**
                 * 验证方式。
                 * - 0：不验证
                 * - 1：验证字符串
                 * - 2：MD5验证
                 * @example `0`
                 */
                VerifyWay: number;
                /**
                 * 验证关键词。
                 * @example `success`
                 */
                ValidateKeywords: string;
                /**
                 * DNS劫持白名单。匹配规则支持IP、IP通配符、子网掩码和CNAME，可以填写多个匹配规则，多个匹配规则以竖线（|）隔开。例如：`www.aliyun.com:203.0.3.55|203.3.44.67`，表示www.aliyun.com域名下除203.0.3.55和203.3.44.67之外的其他IP都是被劫持的。
                 * @example `www.aliyun.com:203.0.3.55|203.3.44.67`
                 */
                WhiteList: string;
            };
            /**
             * 网站测速类型任务配置。
             */
            Website: {
                /**
                 * 目标网址。
                 * @example `http://www.aliyun.com`
                 */
                TargetUrl: string;
                /**
                 * 是否支持自动滚动屏幕，加载页面。0-否，1-是，默认为0。
                 * @example `0`
                 */
                AutomaticScrolling: number;
                /**
                 * 自定义header。
                 * - 0：关（默认）
                 * - 1：修改第一包
                 * - 2：修改全部包
                 * @example `0`
                 */
                CustomHeader: number;
                /**
                 * 自定义header，JSON Map格式。
                 */
                CustomHeaderContent: any;
                /**
                 * 是否禁用缓存。
                 * - 0：不禁用
                 * - 1（默认）：禁用
                 * @example `1
                `
                 */
                DisableCache: number;
                /**
                 * 通过Accept-Encoding字段判断是否接受压缩文件，0-不禁用，1-禁用，默认为0。
                 * @example `0`
                 */
                DisableCompression: number;
                /**
                 * 是否过滤非有效IP。
                 * - 1：不过滤
                 * - 0：过滤
                 * @example `0`
                 */
                FilterInvalidIP: number;
                /**
                 * 是否忽略在SSL握手中证书校验过程中的证书错误而继续浏览。
                 * - 0：不忽略
                 * - 1（默认）：忽略
                 * @example `0`
                 */
                IgnoreCertificateError: number;
                /**
                 * 监测超时，单位为ms。非必填，默认20000。
                 * 范围为5000~300000ms。
                 * @example `20000`
                 */
                MonitorTimeout: number;
                /**
                 * 当出现重定向后，是否要继续浏览。
                 * - 0：否
                 * - 1（默认）：是
                 * @example `1`
                 */
                Redirection: number;
                /**
                 * 慢元素阈值，单位为ms，默认5000，范围为1~300000ms。
                 * @example `5000`
                 */
                SlowElementThreshold: number;
                /**
                 * 最大等待完成时间，单位为ms，默认5000，范围为5000~300000ms。
                 * @example `5000`
                 */
                WaitCompletionTime: number;
                /**
                 * 验证字符串即监测页面源代码中的某个任意字符串。若客户端返回的源码中包含任一黑名单中的字符串则报650验证字符串失败的错误。多个字符串以竖线（|）隔开。
                 * @example `error`
                 */
                VerifyStringBlacklist: string;
                /**
                 * 验证字符串即监测页面源代码中的某个任意字符串。客户端返回的源码必须包含所有白名单中的字符串，否则报650验证字符串失败的错误。多个字符串以竖线（|）隔开。
                 * @example `success`
                 */
                VerifyStringWhitelist: string;
                /**
                 * 在页面加载过程中如果出现元素黑名单中配置的元素，不会请求加载该元素 。
                 * @example `www.example.com/a.jpg`
                 */
                ElementBlacklist: string;
                /**
                 * 域名（例如www.aliyun.com）解析时，解析出的IP地址或者CNAME不在DNS劫持白名单内，用户就会访问失败或者返回一个非Aliyun的目标IP；若解析结果中的IP或者CNAME在DNS白名单内，则会被认定为没有发生DNS劫持。
                 * 填写格式：`域名:匹配规则`。匹配规则支持IP、IP通配符、子网掩码和CNAME，可以填写多个匹配规则，多个匹配规则以竖线（|）隔开。例如：`www.aliyun.com:203.0.3.55|203.3.44.67`，表示www.aliyun.com域名下除203.0.3.55和203.3.44.67之外的其他IP都是被劫持的。
                 * @example `www.aliyun.com:203.0.3.55|203.3.44.67`
                 */
                DNSHijackWhitelist: string;
                /**
                 * 监测页面出现了域名设置之外的元素都属于页面被篡改。常见的表现形式为弹出广告、浮动广告、跳转等。
                 * 填写格式：`域名:元素`。元素支持填写通配符，可以填写多个元素，多个元素以竖线（|）隔开。例如：`www.aliyun.com:|/cc/bb/a.gif|/vv/bb/cc.jpg`，表示www.aliyun.com域名下除基础文档、/cc/bb/a.gif和/vv/bb/cc.jpg之外的其他元素都属于页面被篡改。
                 * @example `www.aliyun.com:|/cc/bb/a.gif|/vv/bb/cc.jpg`
                 */
                PageTamper: string;
                /**
                 * 识别元素：设置浏览页面元素总个数。
                 * @example `0`
                 */
                FlowHijackJumpTimes: number;
                /**
                 * 劫持标识：设置匹配的关键信息。填写劫持判断关键字或关键元素，允许带星号（*）。
                 * @example `aliyun`
                 */
                FlowHijackLogo: string;
            };
            /**
             * 流媒体拨测配置。
             */
            Stream: {
                /**
                 * 流媒体资源地址。
                 * @example `http://www.aliyun.com/stream/test.mp4`
                 */
                TargetUrl: string;
                /**
                 * 音视频标志：
                 * - 0：视频
                 * - 1：音频
                 * @example `0`
                 */
                StreamType: number;
                /**
                 * 监测时长，单位秒，最长支持60s，不传默认60。
                 * @example `30`
                 */
                StreamMonitorTimeout: number;
                /**
                 * 资源地址类型：
                 * - 1：资源地址。
                 * - 0：页面地址。不传默认0。
                 * @example `0`
                 */
                StreamAddressType: number;
                /**
                 * 播放器，不传默认12。
                 * - 12：VLC
                 * - 2：FlashPlayer
                 * @example `12`
                 */
                PlayerType: number;
                /**
                 * 自定义header，JSON Map格式。
                 */
                CustomHeaderContent: any;
                /**
                 * DNS劫持白名单。匹配规则支持IP、IP通配符、子网掩码和CNAME，可以填写多个匹配规则，多个匹配规则以竖线（|）隔开。例如：`www.aliyun.com:203.0.3.55|203.3.44.67`，表示www.aliyun.com域名下除203.0.3.55和203.3.44.67之外的其他IP都是被劫持的。
                 * @example `www.aliyun.com:203.0.3.55|203.3.44.67`
                 */
                WhiteList: string;
            };
        };
        /**
         * 监测点类型：
         * - 1：PC端
         * - 2：移动端
         * @example `1`
         */
        MonitorCategory: number;
        /**
         * 监测点列表。
         */
        Monitors: {
            /**
             * 城市编码。
             * @example `110100`
             */
            CityCode: string;
            /**
             * 运营商编码。
             * @example `1`
             */
            OperatorCode: string;
            /**
             * 拨测点客户端类型：
             * - 1：IDC
             * - 2：网民
             * - 3：移动端
             * - 4：云主机
             * @example `1`
             */
            ClientType: number;
        }[];
        /**
         * 拨测频率，可选范围：1m、5m、10m、15m、20m、30m、1h、2h、3h、4h、6h、8h、12h、24h。
         * @example `5m`
         */
        Frequency: string;
        /**
         * 自定义周期
         */
        CustomPeriod: {
            /**
             * 结束小时，0-24。
             * @example `22`
             */
            EndHour: number;
            /**
             * 开始小时，0-24。
             * @example `14`
             */
            StartHour: number;
        };
        /**
         * 通用设置。
         */
        CommonSetting: {
            /**
             * 自定义host。
             */
            CustomHost: {
                /**
                 * host列表。
                 */
                Hosts: {
                    /**
                     * 域名。
                     * @example `www.aliyun.com`
                     */
                    Domain: string;
                    /**
                     * IP类型：
                     * - 0：自动
                     * - 1：IPv4
                     * - 2：IPpv6
                     * @example `0`
                     */
                    IpType: number;
                    /**
                     * IP列表。
                     */
                    Ips: string[];
                }[];
                /**
                 * 选择方式：
                 * - 0：随机
                 * - 1：轮询
                 * @example `0`
                 */
                SelectType: number;
            };
            /**
             * IP类型：
             * - 0：自动
             * - 1：IPv4
             * - 2：IPpv6
             * @example `0`
             */
            IpType: number;
            /**
             * 是否均匀分配监测样本 ：
             * - 0：否
             * - 1：是
             * @example `0`
             */
            MonitorSamples: number;
            /**
             * 是否开启链路追踪。
             * @example `true`
             */
            IsOpenTrace: boolean;
            /**
             * 链路追踪客户端类型：
             * - 0：ARMS Agent
             * - 1：OpenTelemetry
             * - 2：Jaeger
             * @example `1`
             */
            TraceClientType: number;
            /**
             * 链路数据上报region。
             * @example `cn-hangzhou`
             */
            XtraceRegion: string;
            /**
             * 用户VPC信息，如果拨测的是阿里云内网地址，需要配置VPC信息。
             */
            CustomVPCSetting: {
                /**
                 * 地域ID。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * VPC ID.
                 * @example `vpc-2zexy5nae9q2otaxxxx`
                 */
                VpcId: string;
                /**
                 * 交换机ID。
                 * @example `vsw-bp1i0xezblf1yrz4xxxxx`
                 */
                VSwitchId: string;
                /**
                 * 安全组ID，此安全组是拨测客户端所在的安全组，安全组限定了拨测客户端在VPC中的出入站规则。需要设置您的VPC所在安全组的入站规则为允许拨测客户端所在的安全组访问。否则，拨测客户端无法顺畅地访问您的VPC内资源。
                 * @example `sg-xxxxxxx`
                 */
                SecureGroupId: string;
            };
            /**
             * 保留字段。
             */
            CustomPrometheusSetting: {
                /**
                 * 保留字段。
                 */
                PrometheusLabels: any;
                /**
                 * 保留字段。
                 * @example `保留字段。`
                 */
                PrometheusClusterId: string;
                /**
                 * 保留字段。
                 * @example `保留字段。`
                 */
                PrometheusClusterRegion: string;
            };
        };
        /**
         * 断言列表。
         */
        AvailableAssertions: {
            /**
             * 断言类型，包括：HttpResCode、HttpResHead、HttpResBody、HttpResBodyJson、HttpResponseTime、IcmpPackLoss（丢包率）、IcmpPackMaxLatency（最大包延时ms）、IcmpPackAvgLatency（平均延时）、TraceRouteHops（跃点数目）、DnsARecord（A记录）、DnsCName（Cname）、websiteTTFB（首包时间）、websiteTTLB（尾包时间）、websiteFST（首屏时间）、websiteFFST（首屏完全渲染时间）、websiteOnload（完全加载时间），具体使用见下文补充说明。
             * @example `websiteTTLB`
             */
            Type: string;
            /**
             * 检查目标，当为HttpResCode与HttpResBody、HttpResponseTime时，target不需要填，当为HttpResHead时，需指定header中的key，当为HttpResBodyJson时，使用jsonPath。
             * @example `key
            `
             */
            Target: string;
            /**
             * 条件：
             * - gt：大于
             * - gte：大于等于
             * - lt：小于
             * - te：小于或等于
             * - eq：等于
             * - neq：不等于
             * - ctn：包含
             * - nctn：不包含
             * - exist：存在
             * - n_exist：不存在
             * - belong：属于
             * - n_belong：不属于
             * - reg_match：正则匹配
             * @example `gt`
             */
            Operator: string;
            /**
             * 期望值。
             * @example `100`
             */
            Expect: string;
        }[];
        /**
         * - CREATING：任务创建中
         * - RUNNING：任务运行中
         * - PARTIAL_RUNNING：任务部分运行中
         * - STOP：任务停止
         * - LIMIT_STOP：任务由于限额停止
         * - EXCEPTION：任务异常
         * - DELETE：任务删除
         * - DELETE_EXCEPTION： 删除异常
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 资源组 ID。
         * @example `default`
         */
        ResourceGroupId: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * Tag的键。
             * @example `user1`
             */
            Key: string;
            /**
             * Tag的值
             * @example `p_运维`
             */
            Value: string;
        }[];
    };
}
