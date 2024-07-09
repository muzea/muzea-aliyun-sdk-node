export interface FindVersionDeviceGroupsResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 查询结果列表
     */
    DeviceGroupList: {
        /**
         * 返回记录列表
         */
        Items: {
            /**
             * 修改时间戳
             * @example `16834654000000`
             */
            GmtModifyTimestamp: number;
            /**
             * 创建时间戳
             * @example `16834654000000`
             */
            GmtCreateTimestamp: number;
            /**
             * 修改时间
             * @example `2018-01-01 00:01:00`
             */
            GmtModify: string;
            /**
             * 分组描述
             * @example `测试`
             */
            Description: string;
            /**
             * 创建时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
            /**
             * 分组名
             * @example `升级分组`
             */
            Name: string;
            /**
             * ID
             * @example `1`
             */
            Id: number;
            /**
             * 最大设备数
             * @example `100`
             */
            MaxCount: string;
        }[];
        /**
         * 符合条件的记录总数
         * @example `10`
         */
        TotalCount: number;
    };
}
