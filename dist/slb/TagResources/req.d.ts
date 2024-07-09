export interface TagResourcesRequest {
    /**
     * 负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义，取值：
     * - **instance**：负载均衡实例。
     * - **certificate**：证书。
     * - **acl**：访问控制。
     * - **listener**：监听。
     * - **vservergroup**：虚拟服务器组。
     * - **masterslaveservergroup**：主备服务器组。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源ID，最多支持20个资源ID。
     * > **listener**的**ResourceId**取值为**LoadBalancerId\_监听协议\_Port**，其中LoadBalancerId为实例ID，port为监听端口。示例：lb\-bp1snb10sbml4mqty\_http\_80。
     * @example `lb-bp16qjewdsunr41m1****`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
