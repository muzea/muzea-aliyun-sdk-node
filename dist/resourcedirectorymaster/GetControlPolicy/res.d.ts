export interface GetControlPolicyResponse {
    /**
     * 管控策略详情。
     */
    ControlPolicy: {
        /**
         * 管控策略内容。
         * @example `{\"Version\":\"1\",\"Statement\":[{\"Effect\":\"Deny\",\"Action\":[\"ram:UpdateRole\",\"ram:DeleteRole\",\"ram:AttachPolicyToRole\",\"ram:DetachPolicyFromRole\"],\"Resource\":\"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole\"}]}`
         */
        PolicyDocument: string;
        /**
         * 管控策略更新时间。
         * @example `2021-03-18T08:51:33Z`
         */
        UpdateDate: string;
        /**
         * 管控策略描述。
         * @example `ExampleControlPolicy`
         */
        Description: string;
        /**
         * 管控策略生效范围。取值：
         * - All：表示该管控策略针对阿里云账号、RAM用户或RAM角色生效。
         * - RAM：表示该管控策略仅针对RAM用户或RAM角色生效。
         * @example `RAM`
         */
        EffectScope: string;
        /**
         * 管控策略被引用的次数。
         * @example `0`
         */
        AttachmentCount: string;
        /**
         * 管控策略名称。
         * @example `test`
         */
        PolicyName: string;
        /**
         * 管控策略ID。
         * @example `cp-SImPt8GCEwiq****`
         */
        PolicyId: string;
        /**
         * 管控策略创建时间。
         * @example `2021-03-18T08:51:33Z`
         */
        CreateDate: string;
        /**
         * 管控策略类型。取值：
         * - System：系统管控策略。
         * - Custom：自定义管控策略。
         * @example `Custom`
         */
        PolicyType: string;
    };
    /**
     * 请求ID。
     * @example `AB769936-CDFA-4D52-8CE2-A3581800044A`
     */
    RequestId: string;
}
