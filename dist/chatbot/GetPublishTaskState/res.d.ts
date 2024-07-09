export interface GetPublishTaskStateResponse {
    /**
     * 请求ID
     * @example `5CBF0581-EAE7-1DC4-95C6-A089656A1E2D`
     */
    RequestId: string;
    /**
     * 发布任务ID
     * @example `8522`
     */
    Id: number;
    /**
     * 发布任务ID，冗余字段，建议使用发布任务ID
     * @example `8522`
     */
    Response: string;
    /**
     * 任务状态
     * 枚举值：
     * - FE_RUNNING：正在发布中
     * - FE_SUCCESS：发布成功
     * - FE_FAILED：发布失败
     * - FE_ABORTED：发布取消
     * @example `FE_RUNNING`
     */
    Status: string;
    /**
     * 业务类型列表
     */
    BizTypeList: string[];
    /**
     * 任务失败信息
     * @example `检查待发布模块是否空闲发生错误，faq`
     */
    Error: string;
    /**
     * 任务创建的 UTC 时间
     * @example `2022-04-12T06:30:17Z`
     */
    CreateTime: string;
    /**
     * 任务修改的 UTC 时间
     * @example `2022-04-12T06:30:33Z`
     */
    ModifyTime: string;
    /**
     * 各子发布模块的错误信息，key是子发布模块，value是错误信息
     * @example `{
        "faq": [
            "答案资源未发布, 资源类型: 全局服务 名称: 动态答案服务"
        ]
    }`
     */
    Errors: any;
    /**
     * 各子发布模块的警告信息，key是子发布模块，value是警告信息
     * @example `{
        "faq": [
            "答案资源未发布, 类型: service 名称: null、答案资源未发布, 类型: service 名称: null"
        ]
    }
    `
     */
    Warnings: any;
}
