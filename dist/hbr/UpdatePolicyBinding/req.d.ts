export interface UpdatePolicyBindingRequest {
    /**
     * 策略ID。
     * @example `po-000************ky9`
     */
    "PolicyId": string;
    /**
     * 数据源ID。
     * @example `i-bp1************dtv`
     */
    "DataSourceId": string;
    /**
     * 数据源类型，取值范围：
     * - **UDM_ECS**：表示ECS整机备份
     * @example `UDM_ECS`
     */
    "SourceType": string;
    /**
     * 绑定策略描述。
     * @example `po-000************5xx-i-2ze************nw4`
     */
    "PolicyBindingDescription"?: string;
    /**
     * 策略对该数据源是否暂停生效。
     * - true：暂停
     * - false：未暂停
     * @example `true`
     */
    "Disabled"?: boolean;
    /**
     * - 当SourceType取值为**OSS**时，表示备份某个prefix，如果不指定，则表示备份整个Bucket根目录。
     * - 当SourceType取值为**ECS_FILE**或**File**时，表示备份的文件目录，如果不指定，则表示备份全部目录。
     * @example `backup/`
     */
    "Source"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**或**File**时，需要配置该参数。表示要进行备份的文件类型，这些类型的所有文件都备份。最多支持255个字符。
     * @example `[\"*.doc\",\"*.xltm\"]`
     */
    "Include"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**或**File**时，需要配置该参数。表示不需要进行备份的文件类型，该类型的所有文件都不备份。最多支持255个字符。
     * @example `[\"*.doc\",\"*.xltm\"]`
     */
    "Exclude"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**或**File**时，需要配置该参数。表示备份流量控制。格式为`{start}{end}{bandwidth}`。多个流量控制配置使用分隔，并且配置时间不允许有重叠。
     * - **start**：起始小时。
     * - **end**：结束小时。
     * - **bandwidth**：限制速率，单位KB/s。
     * @example `0:24:5120`
     */
    "SpeedLimit"?: string;
    /**
     * 高级选项。
     */
    "AdvancedOptions"?: {
        /**
         * ECS整机备份详情。
         */
        UdmDetail: {
            /**
             * 不需要保护的云盘ID列表。当DiskIdList不为空时，将忽略该参数。
             */
            ExcludeDiskIdList: string[];
            /**
             * 需要保护的云盘ID列表。保护所有云盘时，该值为空。
             */
            DiskIdList: string[];
            /**
             * 是否创建快照一致性组。仅云盘类型全部为ESSD时，支持创建快照一致性组。
             * @example `true`
             */
            SnapshotGroup: boolean;
            /**
             * 是否创建应用一致性。仅云盘类型全部为ESSD时，支持创建快照应用一致性。
             * @example `false`
             */
            AppConsistent: boolean;
            /**
             * 仅当**AppConsistent**为**true**时，需要配置该参数。创建应用一致性快照需要配置的RAM角色名称。
             * @example `AliyunECSInstanceForHbrRole`
             */
            RamRoleName: string;
            /**
             * 仅当**AppConsistent**为**true**时，需要配置该参数。创建应用一致性快照前执行的冻结脚本路径。
             * @example `/tmp/prescript.sh`
             */
            PreScriptPath: string;
            /**
             * 仅当**AppConsistent**为**true**时，需要配置该参数。创建应用一致性快照后执行的解冻脚本路径。
             * @example `/tmp/postscript.sh`
             */
            PostScriptPath: string;
            /**
             * 仅当**AppConsistent**为**true**时，需要配置该参数。是否在创建应用一致性快照前使用Linux的FsFreeze机制确保文件系统处于只读一致性。默认为true。
             * @example `true`
             */
            EnableFsFreeze: boolean;
            /**
             * 仅当**AppConsistent**为**true**时，需要配置该参数。IO冻结超时时间。默认为30秒。
             * @example `30`
             */
            TimeoutInSeconds: number;
            /**
             * 仅当**AppConsistent**为**true**时，需要配置该参数。是否设置应用一致性快照：
             * - true：创建应用一致性快照
             * - false：创建文件系统一致性快照
             * 默认为true。
             * @example `true`
             */
            EnableWriters: boolean;
        };
        /**
         * OSS备份详情。
         */
        OssDetail: {
            /**
             * OSS清单名称，该值不为空时将使用OSS清单用于性能调优。
             * - 建议备份1亿以上OSS对象采用清单提升增量性能，由清单文件产生的存储费用由OSS服务单独收取。
             * - OSS清单文件生成需要时间，在OSS清单文件生成完成之前可能会备份失败，可以等待下个周期执行。
             * @example `30663060`
             */
            InventoryId: string;
            /**
             * 备份后是否删除清单文件。仅当使用OSS清单时有效。支持：
             * - **NO_CLEANUP**：不删除。
             * - **DELETE_CURRENT**：删除当前文件。
             * - **DELETE_CURRENT_AND_PREVIOUS**：删除所有文件。
             * @example `NO_CLEANUP`
             */
            InventoryCleanupPolicy: string;
        };
        /**
         * 大规模文件系统备份详情。
         */
        CommonFileSystemDetail: {
            /**
             * 增量备份失败时是否转为全量备份。取值：
             * - **true**：失败时转为全量备份。
             * - **false**：失败时不转为全量备份。
             * @example `true`
             */
            FullOnIncrementFail: boolean;
            /**
             * 备份分片大小（文件数）。
             * @example `100000`
             */
            FetchSliceSize: number;
        };
    };
}
