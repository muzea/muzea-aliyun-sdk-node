export interface TempPreviewResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 临时预览链接，12小时内有效
     * @example `https://preview-lyj.aliyuncs.com/preview/temp/xxx****`
     */
    PreviewUrl: string;
    /**
     * 场景ID
     * @example `m+0cmndEGjg9pv/hy4jh****`
     */
    SceneId: string;
}
