export interface ListRecentViewReportsResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回查询结果。
     */
    Result: {
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示的数据条数。
         * - 默认为10条
         * - 最大为100条
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的作品列表。
         */
        Data: {
            /**
             * 作品ID。
             * @example `977c7698-****-****-****-44b7304d20fc`
             */
            TreeId: string;
            /**
             * 作品类型。取值范围 ：
             * - DATAPRODUCT：数据门户
             * - PAGE：仪表板
             * - REPORT：电子表格
             * @example `PAGE`
             */
            Type: string;
            /**
             * 作品名称。
             * @example `测试报表`
             */
            Name: string;
            /**
             * 作品所有者的UserID。
             * @example `1365*****238860`
             */
            OwnerNum: string;
            /**
             * 作品所有者的阿里云账号名。
             * @example `李四`
             */
            OwnerName: string;
            /**
             * 作品创建时间戳。
             * @example `1496651577000`
             */
            GmtCreate: string;
            /**
             * 作品修改的时间戳。
             * @example `1640595729000`
             */
            GmtModified: string;
            /**
             * 作品的发布状态。取值范围：
             * - 0：未发布
             * - 1：已发布
             * - 2：已修改保存未发布
             * - 3：已下线
             * @example `1`
             */
            PublishStatus: number;
            /**
             * 查询用户是否收藏了该作品。
             * @example `true`
             */
            Favorite: boolean;
            /**
             * 查询用户是拥有作品的查看权限。
             * @example `true`
             */
            HasViewAuth: boolean;
            /**
             * 查询用户是拥有作品的编辑权限。
             * @example `true`
             */
            HasEditAuth: boolean;
            /**
             * 作品所属的工作空间ID。
             * @example `523793cb-****-****-****-aa71c65ffa39`
             */
            WorkspaceId: string;
            /**
             * 作品所属的工作空间名称。
             * @example `测试工作空间`
             */
            WorkspaceName: string;
            /**
             * 作品被访问的次数。
             * @example `7`
             */
            ViewCount: number;
            /**
             * 作品最后一次被访问的时间戳。
             * @example `1642067498000`
             */
            LatestViewTime: string;
        }[];
        /**
         *
         * @example `当前API返回的分页参数如TotalNum等即将下线，如有使用请及时修改`
         */
        Attention: string;
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
