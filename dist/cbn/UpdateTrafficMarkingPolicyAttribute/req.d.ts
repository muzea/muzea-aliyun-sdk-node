export interface UpdateTrafficMarkingPolicyAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改流量标记策略的名称，描述信息以及流分类规则。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改流量标记策略的名称，描述信息以及流分类规则
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 流量标记策略ID。
     * @example `tm-u9nxup5kww5po8****`
     */
    "TrafficMarkingPolicyId": string;
    /**
     * 流量标记策略的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TrafficMarkingPolicyName"?: string;
    /**
     * 流量标记策略新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TrafficMarkingPolicyDescription"?: string;
    /**
     * 增加的流分类规则列表。
     * 一次最多支持添加50个流分类规则。
     */
    "AddTrafficMatchRules"?: {
        /**
         * 流量报文的DSCP值。取值范围：**0**~**63**。
         * 流分类规则匹配包含指定DSCP值的流量，如果不设置则代表使流分类规则匹配任意DSCP值的流量。
         * > 当前DSCP值是指流量报文进入跨地域连接前已携带的DSCP值。
         * 一次最多支持创建50个流分类规则，每个流分类规则可指定匹配一个DSCP值。
         * @example `1`
         */
        MatchDscp: number;
        /**
         * 流量报文的目的网段。
         * 流分类匹配目的IP地址在目的网段中的流量，如果不设置则代表使流分类规则匹配任意目的IP地址的流量。
         * 一次最多支持创建50个流分类规则，每个流分类规则可指定一个目的网段。
         * @example `172.30.0.0/24`
         */
        DstCidr: string;
        /**
         * 流分类规则的描述信息。
         * 一次最多支持创建50个流分类规则，每个流分类规则可添加一个描述信息。
         * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
         * @example `test1`
         */
        TrafficMatchRuleDescription: string;
        /**
         * 流量报文的协议类型。
         * 流量标记策略支持匹配**HTTP**、**HTTPS**、**TCP**、**UDP**、**SSH**、**Telnet**等多种协议类型的流量。更多协议类型，请登录[云企业网管理控制台](https://cen.console.aliyun.com/cen/list)查看。
         * <details>
         * <summary>部分协议拥有固定的端口。单击查看端口详情。</summary>
         * - 协议类型为**ICMP**时，目的端口号需指定为-**1**。
         * - 协议类型为**GRE**时，目的端口号需指定为-**1**。
         * - 协议类型为**SSH**时，目的端口号需指定为**22**。
         * - 协议类型为**Telnet**时，目的端口号需指定为**23**。
         * - 协议类型为**HTTP**时，目的端口号需指定为**80**。
         * - 协议类型为**HTTPS**时，目的端口号需指定为**443**。
         * - 协议类型为**MS SQL** 时，目的端口号需指定为**1443**。
         * - 协议类型为**Oracle**时，目的端口号需指定为**1521**。
         * - 协议类型为**Mysql**时，目的端口号需指定为**3306**。
         * - 协议类型为**RDP**时，目的端口号需指定为**3389**。
         * - 协议类型为**Postgre SQL**时，目的端口号需指定为**5432**。
         * - 协议类型为**Redis**时，目的端口号需指定为**6379**。
         * </details>
         * 一次最多支持创建50个流分类规则，每个流分类规则可指定匹配一个协议类型。
         * @example `UDP`
         */
        Protocol: string;
        /**
         * 流量报文的目的端口。取值范围：**-1**、**1**~**65535**。
         * 流分类规则匹配目的端口号在目的端口范围中的流量，如果不设置则代表使流分类规则匹配任意目的端口号的流量。
         * 当前参数最多支持输入两个端口号。输入格式说明如下：
         * - 如果您只输入一个端口号，例如1，则系统默认匹配目的端口为1的流量。如果为-1，则表示匹配任意目的端口。
         * - 如果您输入了两个端口号，例如1和200，则系统默认匹配目的端口处于1至200范围内的流量。
         * - 如果您输入了两个端口号且其中一个端口号为-1，则另一个端口也必须为-1，表示匹配任意目的端口。
         * 一次最多支持创建50个流分类规则，每个流分类规则可指定一个目的端口范围。
         */
        DstPortRange: number[];
        /**
         * 流量报文的源网段。
         * 流分类规则匹配源IP地址在源网段中的流量，如果不设置则代表使流分类规则匹配任意源IP地址的流量。
         * 一次最多支持创建50个流分类规则，每个流分类规则可指定匹配一个源网段。
         * @example `10.128.32.0/19`
         */
        SrcCidr: string;
        /**
         * 流量报文的源端口。取值范围：**-1**、**1**~**65535**。
         * 流分类规则匹配源端口号在源端口范围中的流量，如果不设置则代表使流分类规则匹配任意源端口。
         * 当前参数最多支持输入两个端口号。输入格式说明如下：
         * - 如果您只输入一个端口号，例如1，则系统默认匹配源端口为1的流量。如果为-1，则表示匹配任意源端口。
         * - 如果您输入了两个端口号，例如1和200，则系统默认匹配源端口处于1至200范围内的流量。
         * - 如果您输入了两个端口号且其中一个端口号为-1，则另一个端口也必须为-1，表示匹配任意源端口。
         * 一次最多支持创建50个流分类规则，每个流分类规则可指定一个源端口范围。
         */
        SrcPortRange: number[];
        /**
         * 流分类规则的名称。
         * 一次最多支持创建50个流分类规则，每个流分类规则可添加一个名称。
         * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
         * @example `广州测试`
         */
        TrafficMatchRuleName: string;
    }[];
    /**
     * 删除的流分类规则列表。
     * >请您要尽可能添加完整的流分类规则信息比如源网段、目标网段、源端口、目标端口、DSCP值等，否则系统可能定位不到要删除的流分类规则，则不会删除目标流分类规则列表。
     */
    "DeleteTrafficMatchRules"?: {
        /**
         * 流量报文的DSCP值。
         * @example `3`
         */
        MatchDscp: number;
        /**
         * 流量报文的目标网段。
         * @example `192.168.200.3/32`
         */
        DstCidr: string;
        /**
         * 流分类规则的描述信息。
         * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
         * @example `杭州区连青岛区CAT`
         */
        TrafficMatchRuleDescription: string;
        /**
         * 流量报文的协议类型。
         * 您可以调用[ListTrafficMarkingPolicies](~~468322~~)接口查询要删除的流分类规则的详细信息。
         * @example `TCP`
         */
        Protocol: string;
        /**
         * 流量报文的目的端口。
         */
        DstPortRange: number[];
        /**
         * 流量报文的源网段。
         * @example `10.72.0.0/16`
         */
        SrcCidr: string;
        /**
         * 流量报文的源端口。
         */
        SrcPortRange: number[];
        /**
         * 流分类规则的名称。
         * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
         * @example `test`
         */
        TrafficMatchRuleName: string;
    }[];
}
