export interface DeleteMediaRequest {
    /**
     * 需要删除的媒体ID列表。半角逗号（,）分隔，一次最多10个。
     * > 媒体ID可以从[新增媒体](~~44458~~)的返回参数中获取，也可以登录媒体处理控制台，通过**媒体管理**>**媒体列表**找到目标视频，单击**管理**，从目标视频的基础信息页签获取。
     * @example `3e1cd21131a94525be55acf65888****,3e6149d5a8c944c09b1a8d2dc3e4****`
     */
    "MediaIds": string;
}
