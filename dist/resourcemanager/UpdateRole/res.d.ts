export interface UpdateRoleResponse {
    /**
     * RAM角色信息。
     */
    Role: {
        /**
         * RAM角色的信任策略。
         * @example `{ \"Statement\": [ { \"Action\": \"sts:AssumeRole\", \"Effect\": \"Allow\", \"Principal\": { \"RAM\": \"acs:ram::12345678901234****:root\" } } ], \"Version\": \"1\" }`
         */
        AssumeRolePolicyDocument: string;
        /**
         * 被授权RAM角色名称。
         * @example `ECSAdmin@role.123456.onaliyunservice.com`
         */
        RolePrincipalName: string;
        /**
         * RAM角色描述。
         * @example `ECS管理角色`
         */
        Description: string;
        /**
         * RAM角色更新时间。
         * @example `2016-01-23T12:33:18Z`
         */
        UpdateDate: string;
        /**
         * RAM角色最大会话时间。
         * @example `3600`
         */
        MaxSessionDuration: number;
        /**
         * RAM角色名称。
         * @example `ECSAdmin`
         */
        RoleName: string;
        /**
         * RAM角色创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * RAM角色ID。
         * @example `90123456789****`
         */
        RoleId: string;
        /**
         * RAM角色的资源描述符。
         * @example `acs:ram::123456789012****:role/ECSAdmin`
         */
        Arn: string;
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
