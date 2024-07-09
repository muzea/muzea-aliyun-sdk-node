export interface ListRepositoryTreeRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `624666bd54d036291ae13a36`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2851516`
     */
    "repositoryId": number;
    /**
     * 代码仓库内的文件路径，获取该路径下的文件目录，默认获取代码库文件树的全部结构
     * @example `module`
     */
    "path"?: string;
    /**
     * 分支名称、标签名称或CommitID，默认为代码库库默认分支
     * @example `master / tag1.0 / sjjfssa`
     */
    "refName"?: string;
    /**
     * 查找策略
     * DIRECT：仅展示当前目录下的内容
     * RECURSIVE：递归查找当前路径下的所有文件
     * FLATTEN：扁平化展示（如果是目录，递归查找，直到子目录包含文件或多个目录为止）
     * @example `RECURSIVE`
     */
    "type"?: string;
}
