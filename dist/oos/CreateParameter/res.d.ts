export interface CreateParameterResponse {
    /**
     * 请求ID
     * @example `0B419FF3-ABC6-4DF0-95E5-636DC8CBB8AF`
     */
    RequestId: string;
    /**
     * 普通参数信息
     */
    Parameter: {
        /**
         * 参数类型
         * @example `String`
         */
        Type: string;
        /**
         * 参数更新时间
         * @example `2020-09-01T08:01:43Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 标签
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: any;
        /**
         * 参数描述信息
         * @example `parameter`
         */
        Description: string;
        /**
         * 参数约束条件
         * @example `"{'AllowedValues':['parameter'],'AllowedPattern':'parameter','MinLength':0,'MaxLength':20}"`
         */
        Constraints: string;
        /**
         * 资源组
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 参数创建者
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 参数创建时间
         * @example `2020-09-01T08:01:43Z`
         */
        CreatedDate: string;
        /**
         * 参数版本号
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 参数名称
         * @example `MyParameter`
         */
        Name: string;
        /**
         * 参数ID
         * @example `p-4c4b401cab6747xxxxxx`
         */
        Id: string;
        /**
         * 参数共享类型
         * @example `Private`
         */
        ShareType: string;
    };
}
