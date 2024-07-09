export interface QueryOrganizationRoleConfigResponse {
    /**
     * 请求ID。
     * @example `BCE45E6D-9304-4F94-86BB-5A772B1615FF`
     */
    RequestId: string;
    /**
     * 组织角色配置详情。
     */
    Result: {
        /**
         * 组织角色ID，包括预置角色和自定义角色：
         * - 组织管理员（预置角色）：111111111
         * - 权限管理员（预置角色）：111111112
         * - 普通用户（预置角色）：111111113
         * - 自定义角色：自定义角色对应的角色ID
         * @example `111111111`
         */
        RoleId: number;
        /**
         * 角色名称。
         * @example `组织管理员`
         */
        RoleName: string;
        /**
         * 角色的权限配置列表。
         */
        AuthConfigList: {
            /**
             * 权限类型：
             * - quick_monitor：指标监控
             * - subscription：订阅管理
             * - offline_download：自助取数
             * - resource_package：资源包管理
             * - organization_ask：组织识别码（AK/SK）
             * - developer_openapi：开放API
             * - data_service：数据服务
             * - admin_authorize3rd：嵌入分析
             * - component_manage：自定义组件
             * - template_open：自定义模版
             * - custom_driver：自定义驱动（仅独立部署支持）
             * - open_platform_custom_plugin：自定义插件（仅独立部署支持）
             * - enterprise_safety：企业安全
             * @example `quick_monitor`
             */
            AuthKey: string;
        }[];
        /**
         * 是否是预置角色。取值范围：
         * - true：是
         * - false：否
         * @example `true`
         */
        IsSystemRole: boolean;
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
