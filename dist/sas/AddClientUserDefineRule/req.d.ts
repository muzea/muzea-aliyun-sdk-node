export interface AddClientUserDefineRuleRequest {
    /**
     * 自定义规则名称。
     * @example `规则1`
     */
    "Name": string;
    /**
     * 规则类型。取值：
     * - **1**：进程hash
     * - **2**：命令行
     * - **3**：进程网络
     * - **4**：文件读写
     * - **5**：操作注册表
     * - **6**：加载动态链接库
     * - **7**：文件重命名
     * @example `1`
     */
    "Type": number;
    /**
     * 进程hash列表。
     * @example `0c9045b5bec90f9825f1f3f64dd4****`
     */
    "Md5List"?: string;
    /**
     * 操作类型。取值：
     * - **0**：加白
     * - **1**：加黑
     * @example `1`
     */
    "ActionType": number;
    /**
     * 进程路径。
     * @example `c:/windows/system32/i****`
     */
    "ProcPath"?: string;
    /**
     * 命令行。
     * @example `/usr/sbin/s****`
     */
    "Cmdline"?: string;
    /**
     * 操作系统类型。取值：
     * - **windows**：Widows
     * - **linux**：Linux
     * - **all**：全部
     * @example `linux`
     */
    "Platform"?: string;
    /**
     * IP地址。
     * @example `10.240.XX.XX`
     */
    "IP"?: string;
    /**
     * 端口号。已废弃。
     * @example `22`
     */
    "Port"?: number;
    /**
     * 文件路径。
     * @example `/etc/pam****`
     */
    "FilePath"?: string;
    /**
     * 注册表键。
     * @example `HKEY_DYN_****`
     */
    "RegistryKey"?: string;
    /**
     * 注册表值。
     * @example `*SECOH-QAD.exe*`
     */
    "RegistryContent"?: string;
    /**
     * 文件重命名的新文件路径。
     * @example `/etc/pam****`
     */
    "NewFilePath"?: string;
    /**
     * 父进程路径。
     * @example `c:/windows/system32/i****`
     */
    "ParentProcPath"?: string;
    /**
     * 父命令行。
     * @example `/usr/sbin/s****`
     */
    "ParentCmdline"?: string;
    /**
     * 端口号。取值范围：**1~65535**。
     * @example `80`
     */
    "PortStr"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "Domain"?: string;
}
