export interface DescribeInstanceSpecInfoResponse {
    /**
     * 本次请求的ID。
     * @example `E906513E-F6B5-495E-98DC-7BA8****1D76`
     */
    RequestId: string;
    /**
     * WAF实例ID。
     * @example `waf-cn-st2225l****`
     */
    InstanceId: string;
    /**
     * WAF实例的到期时间。格式为毫秒级时间戳。
     * > 对于按量计费实例，返回的值表示试用版的到期时间。
     * @example `1677168000000`
     */
    ExpireTime: number;
    /**
     * WAF实例的版本。取值：
     * <props="china">
     * - **version_3**：表示中国内地高级版。
     * - **version_4**：表示中国内地企业版。
     * - **version_5**：表示中国内地旗舰版。
     * - **version_exclusive_cluster**：表示中国内地虚拟独享集群版。
     * - **version_hybrid_clou_standard**：表示中国内地混合云WAF版。
     * - **version_pro_asia**：表示海外地区高级版。
     * - **version_business_asia**：表示海外地区企业版。
     * - **version_enterprise_asia**：表示海外地区旗舰版。
     * - **version_exclusive_cluster_asia**：表示海外地区虚拟独享集群版。
     * - **version_hybrid_cloud_standard_asia**：表示海外地区混合云WAF版。
     * - **version_elastic_bill**：表示按量计费版。
     * - **version_elastic_bill_new**：表示按量计费2.0版。
     * </props>
     * <props="intl">
     * - **version_pro_china**：表示中国内地高级版。
     * - **version_business_china**：表示中国内地企业版。
     * - **version_enterprise_china**：表示中国内地旗舰版。
     * - **version_exclusive_china**：表示中国内地虚拟独享集群版。
     * - **version_hybrid_cloud_standard_china**：表示中国内地混合云WAF版。
     * - **version_pro**：表示海外地区高级版。
     * - **version_business**：表示海外地区企业版。
     * - **version_enterprise**：表示海外地区旗舰版。
     * - **version_exclusive**：表示海外地区虚拟独享集群版。
     * - **version_hybrid_cloud_standard**：表示海外地区混合云WAF版。
     * </props>
     * <props="china">如果返回的version参数值不在上述列表中，请确认您使用的是阿里云中国站账号。</props>
     * <props="intl">如果返回的version参数值不在上述列表中，请确认您使用的是阿里云国际站账号。</props>
     * @example `version_3`
     */
    Version: string;
    /**
     * WAF实例的规格信息，以**Code**与**Value**的数组形式返回实例的各项规格信息。其中，**Code**表示规格代码，**Value**表示对应的规格值。
     */
    InstanceSpecInfos: {
        /**
         * WAF实例规格的代码。取值：
         * - **100**：表示是否支持HTTPS业务防护。
         * - **101**：表示日常业务流量阈值。
         * - **102**：表示CC攻击防护阈值。
         * - **103**：表示支持接入防护的域名总数。
         * - **104**：表示是否支持泛域名。
         * - **105**：表示支持配置的自定义防护策略（ACL访问控制）规则的数量。
         * - **106**：表示域名回源IP的数量。
         * - **107**：表示是否支持云外房机。
         * - **108**：表示是否支持自定义高级Web访问控制功能。
         * - **109**：表示是否支持非标准端口。
         * - **110**：表示是否支持扫描防护功能。
         * - **111**：表示是否支持数据风控。
         * - **112**：表示支持配置的数据风控记录数。
         * - **113**：表示支持接入防护的主域名数（一级域名）。
         * - **114**：表示正常业务带宽阈值。
         * - **115**：表示绑定的域名包的数量。
         * - **116**：表示是否支持添加不同阿里云账号下的ECS IP作为源站服务器IP。
         * - **117**：表示是否支持添加虚拟主机IP作为源站服务器IP。
         * - **118**：表示支持配置的数据风控规则场景的数量。
         * - **119**：表示是否支持语义分析引擎功能。
         * - **12**：表示是否支持业务流量分析功能。
         * - **120**：表示接入域名是否需要判断备案。
         * - **121**：表示是否支持配置自定义防护策略（CC攻击防护）规则。
         * - **122**：表示支持配置的自定义防护策略（CC攻击防护）规则的数量。
         * - **123**：表示是否支持地域级IP黑名单功能。
         * - **124**：表示是否支持网站防篡改功能。
         * - **125**：表示支持配置的自定义防篡改防护规则的数量。
         * - **126**：表示是否支持收集日志功能。
         * - **127**：表示支持添加的非标端口数。
         * - **128**：表示支持添加的HTTP协议端口。
         * - **129**：表示支持添加的HTTPS协议端口。
         * - **13**：表示是否支持切换CC安全防护的模式。
         * - **130**：表示是否支持黑客画像功能。
         * - **131**：表示是否支持防敏感信息泄露功能。
         * - **132**：表示支持配置的防敏感信息泄露规则的数量。
         * - **133**：表示自定义防护策略及白名单策略中支持使用的条件字段。
         * - **134**：表示绑定的独享IP的数量。
         * - **135**：表示是否支持数据大屏功能。
         * - **136**：表示支持的数据大屏数量。
         * - **137**：表示是否支持深度学习引擎功能。
         * - **138**：表示是否支持全量日志功能。
         * - **139**：表示全量日志的存储时长。
         * - **14**：表示是否支持查看CC攻击日志详情。
         * - **140**：表示全量日志的最大存储容量。
         * - **141**：表示是否支持告警设置功能。
         * - **142**：表示全量日志的存储空间可清空次数。
         * - **143**：表示是否支持自定义防护规则组功能。
         * - **144**：表示支持配置的自定义规则组的数量。
         * - **145**：表示是否支持使用防护模块通用网关代理。
         * - **146**：表示是否支持使用防护模块通用规则代理。
         * - **147**：表示是否支持安全专家服务平台。
         * - **148**：表示是否支持试用。
         * - **149**：表示是否支持使用透明代理模式。
         * - **150**：表示是否支持IPv6。
         * - **151**：表示是否支持主动防御功能。
         * - **152**：表示支持配置的主动防护规则的数量。
         * - **153**：表示是否支持HTTP 2.0业务防护。
         * - **154**：表示是否支持域名配置功能。
         * - **155**：表示是否支持资产识别功能。
         * - **156**：表示是否具有预发测试规格。
         * - **157**：表示是否支持使用虚拟独立集群。
         * - **158**：表示虚拟独立集群支持的端口数量。
         * - **159**：表示是否支持账号安全功能。
         * - **160**：表示账号安全防护的接口数量。
         * - **162**：表示支持添加的白名单规则的数量。
         * - **163**：表示自定义防护规则的数量。
         * - **164**：表示IP黑名单规则的数量。
         * - **167**：表示是否支持自定义扫描防护配置。
         * - **168**：表示全局负载均衡（GSLB）防护域名的数量。
         * - **169**：表示是否支持智能负载均衡。
         * - **171**：表示是否支持App防护功能。
         * - **172**：表示App防护的规则数量。
         * - **173**：表示是否支持典型爬虫行为识别功能。
         * - **176**：表示是否支持合法爬虫功能。
         * - **177**：表示是否支持爬虫威胁情报功能。
         * - **181**：表示透明接入支持添加的引流配置（对应一个具体的实例IP+端口）的数量。
         * - **190**：表示是否支持CC防护能力。
         * - **191**：表示是否支持账户安全防御能力。
         * - **192**：表示是否支持扫描防护能力。
         * - **193**：表示是否支持自定义TLS安全策略。
         * - **194**：表示是否支持自定义TLS安全策略的高级设置。
         * - **196**：表示透明接入是否支持接入任意接口。
         * - **199**：表示是否支持IPv6回源。
         * - **200**：表示是否支持防爬场景化配置。
         * - **201**：表示防爬场景化配置的数量。
         * @example `103`
         */
        Code: string;
        /**
         * WAF实例规格代码对应的值。取值可以为**true**（表示是）或**false**（表示否）；也可以为具体的数值。
         * > 例如，如果**Code**取值为**103**，则**Value**取值为**640**；如果**Code**取值为**104**，则**Value**取值为**true**。
         * @example `640`
         */
        Value: string;
    }[];
}
