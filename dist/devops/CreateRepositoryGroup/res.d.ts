export interface CreateRepositoryGroupResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 代码组的主键ID
         * @example `18685`
         */
        id: number;
        /**
         * 代码组名称
         * @example `test-create-group`
         */
        name: string;
        /**
         * 代码组路径
         * @example `test-create-group`
         */
        path: string;
        /**
         * 代码组的描述信息
         * @example `描述信息的具体内容`
         */
        description: string;
        /**
         * 代码组头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 页面访问时的URL
         * @example `""`
         */
        webUrl: string;
        /**
         * 路径（含父路径）
         * @example `codeup-test-org/test-create-group`
         */
        pathWithNamespace: string;
        /**
         * 名称（含父路径）
         * @example `codeup-test-org / test-create-group （斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 类型，默认为Group
         * @example `Group`
         */
        type: string;
        /**
         * 代码组的可见性
         * - 0：私有
         * - 10：企业可见
         * @example `10`
         */
        visibilityLevel: number;
        /**
         * 父路径ID
         * @example `26842`
         */
        parentId: number;
        /**
         * 拥有者ID
         * @example `19230`
         */
        ownerId: number;
    };
}
