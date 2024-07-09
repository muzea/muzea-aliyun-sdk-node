export interface GetConnDataResponse {
    /**
     * Id of the request
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
     * 版本
     * @example `2.1`
     */
    Version: string;
    /**
     * 扩展信息
     * @example `{}`
     */
    Extend: string;
    /**
     * 关联信息
     */
    List: {
        /**
         * ID
         * @example `1#234#abc`
         */
        Id: string;
        /**
         * 关联的ID
         * @example `1#456#def`
         */
        MapId: string;
        /**
         * outer：外关联 inner：内关联 stair：楼梯关联
         * @example `outer`
         */
        Type: string;
    }[];
}
