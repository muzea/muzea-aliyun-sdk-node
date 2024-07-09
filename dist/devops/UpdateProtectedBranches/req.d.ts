export interface UpdateProtectedBranchesRequest {
    /**
     * 企业标识，也称企业ID，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "organizationId"?: string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2835387`
     */
    "repositoryId": number;
    /**
     * 保护分支规则ID
     * @example `19224`
     */
    "id": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 保护分支规则ID
         * @example `19224`
         */
        id: number;
        /**
         * 代码分支名称（若不修改保护分支，则维持原来的分支名；若需要修改保护分支，则给予修改的分支名称）
         * @example `master`
         */
        branch: string;
        /**
         * 允许推送的角色列表
         */
        allowPushRoles: number[];
        /**
         * 允许推送的用户ID列表
         */
        allowPushUserIds: string[];
        /**
         * 允许合并的角色列表
         */
        allowMergeRoles: number[];
        /**
         * 允许合并的用户ID列表
         */
        allowMergeUserIds: string[];
        /**
         * 合并前的代码评审设置
         */
        mergeRequestSetting: {
            /**
             * 是否开启
             * @example `true`
             */
            isRequired: boolean;
            /**
             * 评审模式
             * general - 普通
             * codeowner - CodeOwner模式
             * @example `general`
             */
            mrMode: string;
            /**
             * 是否允许创建者通过代码评审
             * 可选值：true / false
             * @example `true`
             */
            isAllowSelfApproval: boolean;
            /**
             * 是否要求评论全部已解决
             * 可选值：true / false
             * @example `true`
             */
            isRequireDiscussionProcessed: boolean;
            /**
             * 是否在有新的提交时重置评审
             * 可选值：true / false
             * @example `false`
             */
            isResetApprovalWhenNewPush: boolean;
            /**
             * 评审通过的最少人数
             * 注：仅普通模式生效
             * @example `1`
             */
            minimumApproval: number;
            /**
             * 允许通过合并请求的角色列表
             */
            allowMergeRequestRoles: number[];
            /**
             * 默认评审者的ID列表
             */
            defaultAssignees: string[];
            /**
             * 评审文件白名单
             * 注意：加入白名单的文件不受「评审通过的最少人数」限制，无需强制人工评审
             * @example `**.java`
             */
            whiteList: string;
        };
        /**
         * 合并前的自动化状态检查设置
         */
        testSettingDTO: {
            /**
             * 是否开启
             * @example `false`
             */
            isRequired: boolean;
            /**
             * 代码规约扫描
             */
            codeGuidelinesDetection: {
                /**
                 * 是否开启
                 * @example `false`
                 */
                enabled: boolean;
                /**
                 * 描述信息
                 * @example `test_code_guide_lines`
                 */
                message: string;
            };
            /**
             * 敏感信息扫描
             */
            sensitiveInfoDetection: {
                /**
                 * 是否开启敏感信息扫描
                 * @example `false`
                 */
                enabled: boolean;
                /**
                 * 描述信息
                 * @example `test_code_sensitive_info`
                 */
                message: string;
            };
            /**
             * 代码质量检测
             */
            checkTaskQualityConfig: {
                /**
                 * 是否开启代码质量检测
                 * @example `false`
                 */
                enabled: boolean;
                /**
                 * 任务流水号
                 * @example `123456`
                 */
                bizNo: string;
                /**
                 * 任务名称
                 * @example `bz-task-quality`
                 */
                taskName: string;
                /**
                 * 信息
                 * @example `test_task_quality`
                 */
                message: string;
            };
            /**
             * MR卡点流水线配置
             */
            checkConfig: {
                /**
                 * 配置项列表
                 */
                checkItems: {
                    /**
                     * 流水线名称
                     * @example `测试流水线`
                     */
                    name: string;
                    /**
                     * 是否卡点
                     * @example `false`
                     */
                    isRequired: boolean;
                }[];
            };
        };
    };
}
