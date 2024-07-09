export interface QueryResourceStaticsResponse {
    /**
     * 请求ID。
     * @example `7CCF7092-72CA-4431-90D6-C7D98752****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `ac1a08a015623098794277264e****`
     */
    TraceId: string;
    /**
     * 资源使用信息。
     */
    Data: {
        /**
         * 当月资源使用信息。
         */
        Summary: {
            /**
             * CPU使用量，单位：Core*min。
             * @example `3354`
             */
            Cpu: number;
            /**
             * 内存使用量，单位：GiB*min。
             * @example `6708`
             */
            Memory: number;
        };
        /**
         * 实时资源使用量。
         */
        RealTimeRes: {
            /**
             * CPU使用量，单位：Core*min。
             * @example `13`
             */
            Cpu: number;
            /**
             * 内存使用量，单位：GiB*min。
             * @example `26`
             */
            Memory: number;
        };
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取应用资源使用量是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
