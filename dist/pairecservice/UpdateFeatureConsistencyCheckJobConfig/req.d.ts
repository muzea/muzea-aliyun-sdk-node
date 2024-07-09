export interface UpdateFeatureConsistencyCheckJobConfigRequest {
    /**
     * 特征一致性检查配置ID。如何获取配置ID，请参见[ListFeatureConsistencyCheckJobConfigs](~~2557567~~)。
     * @example `3`
     */
    "FeatureConsistencyCheckJobConfigId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
         * @example `pairec-cn-********`
         */
        InstanceId: string;
        /**
         * 特征一致性检查名称。
         * @example `feature_consistency_check1`
         */
        Name: string;
        /**
         * 场景ID。
         * @example `3`
         */
        SceneId: string;
        /**
         * 采样比例（0-1）。
         * @example `0.89`
         */
        SampleRate: number;
        /**
         * 数据回落数据源ID。
         * @example `reso-********`
         */
        FeatureLandingResourceId: string;
        /**
         * PAI-EAS服务名称。
         * @example `service_123`
         */
        EasServiceName: string;
        /**
         * fg_json文件名称。
         * @example `file.json`
         */
        FgJsonFileName: string;
        /**
         * user表名。
         * @example `user_table`
         */
        UserTable: string;
        /**
         * user_id字段名。
         * @example `user_id`
         */
        UserIdField: string;
        /**
         * user表分区字段。
         * @example `ds`
         */
        UserTablePartitionField: string;
        /**
         * user表分区字段格式。
         * - yyyymmdd
         * - yyyy-mm-dd
         * @example `yyyymmdd`
         */
        UserTablePartitionFieldFormat: string;
        /**
         * item表名。
         * @example `item_table`
         */
        ItemTable: string;
        /**
         * item_id字段名。
         * @example `item_id`
         */
        ItemIdField: string;
        /**
         * item表分区字段。
         * @example `ds`
         */
        ItemTablePartitionField: string;
        /**
         * item表分区字段格式：
         * - yyyymmdd
         * - yyyy-mm-dd
         * @example `yyyymmdd`
         */
        ItemTablePartitionFieldFormat: string;
        /**
         * 是否需要特征比对。
         * @example `true`
         */
        CompareFeature: boolean;
        /**
         * 是否需要生成zip包。
         * @example `true`
         */
        GenerateZip: boolean;
        /**
         * 服务ID。
         * @example `4`
         */
        ServiceId: string;
        /**
         * 工作流名称。
         * @example `work_flow_1`
         */
        WorkflowName: string;
        /**
         * OSS数据源ID。
         * @example `reso-********`
         */
        OssResourceId: string;
        /**
         * EasyRec版本。
         * @example `1.3.60`
         */
        EasyRecVersion: string;
        /**
         * EasyRec包路径。
         * @example `oss://********`
         */
        EasyRecPackagePath: string;
        /**
         * fg_jar版本。
         * @example `1.0.0`
         */
        FgJarVersion: string;
        /**
         * 特征优先级，多个特征通过半角逗号（,）分开，表示哪些特征优先从user表读取，若user表为空，则从行为表查询。
         * @example `feature1,feature2,feature3`
         */
        FeaturePriority: string;
        /**
         * 特征展示过滤，多个特征通过半角逗号（,）分开。
         * @example `feature1,feature2`
         */
        FeatureDisplayExclude: string;
        IsUseFeatureStore: boolean;
        FeatureStoreProjectName: string;
        FeatureStoreModelId: string;
        FeatureStoreUserId: string;
        FeatureStoreItemId: string;
        FeatureStoreSeqFeatureView: string;
        FeatureStoreProjectId: string;
    };
}
