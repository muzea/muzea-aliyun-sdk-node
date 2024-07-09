export interface CreateProvisionedProductPlanRequest {
    /**
     * 计划名称。
     * 长度为1~128个字符。
     * @example `DEMO-ECS实例`
     */
    "PlanName": string;
    /**
     * 计划类型。
     * 取值为Ros，表示阿里云资源编排服务（ROS）。
     * @example `Ros`
     */
    "PlanType": string;
    /**
     * 实例名称。
     * 长度为1~128个字符。
     * @example `DEMO-ECS实例`
     */
    "ProvisionedProductName": string;
    /**
     * 产品组合ID。
     * > 存在默认启动选项时，无需填写PortfolioId。没有默认启动选项时，必须填写PortfolioId。获取PortfolioId的方法，请参见[ListLaunchOptions](~~ListLaunchOptions~~)。
     * @example `port-bp1yt7582g****`
     */
    "PortfolioId"?: string;
    /**
     * 产品ID。
     * @example `prod-bp18r7q127****`
     */
    "ProductId": string;
    /**
     * 产品版本ID。
     * @example `pv-bp15e79d26****`
     */
    "ProductVersionId": string;
    /**
     * 用户输入的模板参数。
     * N最大值为200。
     * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
     */
    "Parameters"?: {
        /**
         * 模板中定义的参数名称。
         * @example `instance_type`
         */
        ParameterKey: string;
        /**
         * 用户输入的模板参数值。
         * @example `ecs.s6-c1m1.small`
         */
        ParameterValue: string;
    }[];
    /**
     * 阿里云资源编排服务（ROS）资源栈所属的地域ID。
     * 获取ROS支持的地域列表的方法，请参见[DescribeRegions](~~131035~~)。
     * @example `cn-hangzhou`
     */
    "StackRegionId": string;
    /**
     * 用户输入的自定义标签。
     * N最大值为20。
     * > - Tags为可选参数。如果需要指定Tags，则Tags.N.Key和Tags.N.Value必须同时指定。
     * > - 此标签会传递到资源栈中每个支持标签的资源中。
     */
    "Tags"?: {
        /**
         * 用户输入的自定义标签键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `k1`
         */
        Key: string;
        /**
         * 用户输入的自定义标签值。
         * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 计划操作类型，取值：
     * - LaunchProduct（默认）：启动产品。
     * - UpdateProvisionedProduct：更新实例。
     * - TerminateProvisionedProduct：终止实例。
     * @example `LaunchProduct`
     */
    "OperationType"?: string;
    /**
     * 计划描述。
     * 长度为1~128个字符。
     * @example `创建ECS`
     */
    "Description"?: string;
}
