export interface BatchDeleteWebHostingFilesRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 需要删除的文件路径。
     * @example `/static/test.png`
     */
    "FilePaths": string[];
}
