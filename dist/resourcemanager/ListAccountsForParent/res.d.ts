export interface ListAccountsForParentResponse {
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Accounts: {
        /**
         * 成员信息。
         */
        Account: {
            /**
             * 成员加入状态。取值：
             * - CreateSuccess：创建成功。
             * - PromoteVerifying：升级确认中。
             * - PromoteFailed：升级失败。
             * - PromoteExpired：升级过期。
             * - PromoteCancelled：升级取消。
             * - PromoteSuccess：升级成功。
             * - InviteSuccess：邀请成功。
             * @example `CreateSuccess`
             */
            Status: string;
            /**
             * 成员类型。取值：
             * - CloudAccount：云账号。
             * - ResourceAccount：资源账号。
             * @example `ResourceAccount`
             */
            Type: string;
            /**
             * 成员名称。
             * @example `admin`
             */
            DisplayName: string;
            /**
             * 资源夹ID。
             * @example `fd-bVaRIG****`
             */
            FolderId: string;
            /**
             * 资源目录ID。
             * @example `rd-k4****`
             */
            ResourceDirectoryId: string;
            /**
             * 成员加入时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            JoinTime: string;
            /**
             * 成员账号ID。
             * @example `184311716100****`
             */
            AccountId: string;
            /**
             * 成员加入方式。取值：
             * - invited：邀请。
             * - created：创建。
             * @example `created`
             */
            JoinMethod: string;
            /**
             * 成员修改时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            ModifyTime: string;
            Tags: {
                /**
                 * 成员所有的标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `tag_key`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `tag_value`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
