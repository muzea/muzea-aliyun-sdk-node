export interface RecognizeBankAcceptanceRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     *   * 图片链接（长度不超2048，不支持base64）。
     * @example `https://img.alicdn.com/imgextra/i1/O1CN016eNk0d1ubhKP4y6gK_!!6000000006056-2-tps-631-570.png`
     */
    "Url"?: string;
    /**
     * * 本字段和URL字段二选一，不可同时透传或同时为空。
     * * 图片二进制文件，最大10MB。
     * * 使用HTTP方式调用，把图片二进制文件放到HTTP body中上传即可。
     * * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制`
     */
    "body"?: string;
}
