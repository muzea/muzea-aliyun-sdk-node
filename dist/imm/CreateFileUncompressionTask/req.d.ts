export interface CreateFileUncompressionTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example ` test-project`
     */
    "ProjectName": string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 压缩包加密的密码。
     * @example `123456`
     */
    "Password"?: string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `test-data`
     */
    "UserData"?: string;
    /**
     * 需要解压的文件列表，该参数为空时表示解压整个压缩包。默认为空。
     */
    "SelectedFiles"?: string[];
    /**
     * 压缩文件存放的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-object.zip`
     */
    "SourceURI": string;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
    /**
     * 解压文件的目标OSS地址。被选中的文件或压缩包会解压到该地址下。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test-bucket/test-dir/`
     */
    "TargetURI"?: string;
}
