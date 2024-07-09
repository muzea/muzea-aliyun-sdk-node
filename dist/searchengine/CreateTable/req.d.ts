export interface CreateTableRequest {
    /**
     * 实例id。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：-true 是 -false 否
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * body
     */
    "body"?: {
        /**
         * 索引名
         * @example `api_index_1`
         */
        name: string;
        /**
         * 数据更新资源数
         * @example `1`
         */
        dataProcessorCount: number;
        /**
         * 数据分片数
         * @example `1`
         */
        partitionCount: number;
        /**
         * 数据源配置
         */
        dataSource: {
            /**
             * 数据源类型: 仅支持odps、swift、oss三种类型 (odps, swift, saro, oss, unKnow)
             * @example `odps`
             */
            type: string;
            /**
             * 追增量时间戳
             * @example `1715160176`
             */
            dataTimeSec: number;
            /**
             * 是否自动索引重建
             * @example `true`
             */
            autoBuildIndex: boolean;
            /**
             * 数据源配置
             */
            config: {
                /**
                 * odps相关
                 * @example `http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api`
                 */
                endpoint: string;
                /**
                 * odps数据源ak
                 * @example `L***p`
                 */
                accessKey: string;
                /**
                 * odps数据源ak secret
                 * @example `5**9a6`
                 */
                accessSecret: string;
                /**
                 * odps数据源项目名称
                 * @example `test_project`
                 */
                project: string;
                /**
                 * 数据源为odps时必填
                 * @example `ds=20220713`
                 */
                partition: string;
                /**
                 * saro、odps相关
                 * @example `test56`
                 */
                table: string;
                /**
                 * oss数据源相关
                 * @example `/opensearch/test.txt`
                 */
                ossPath: string;
                /**
                 * oss bucket
                 * @example `test-bucket`
                 */
                bucket: string;
            };
        };
        /**
         * 如果用户传了rawSchema，则直接使用rawSchema作为ha3 schema结构，不用手动拼装
         * @example `{}`
         */
        rawSchema: string;
        /**
         * 主键字段
         * @example `id`
         */
        primaryKey: string;
        /**
         * key: 字段名
         */
        fieldSchema: any;
        /**
         * 索引结构
         */
        vectorIndex: {
            /**
             * 索引结构名称
             * @example `test_index`
             */
            indexName: string;
            /**
             * 向量字段
             * @example `source_image_vector`
             */
            vectorField: string;
            /**
             * 稀疏向量下标字段
             * @example `sparse_indices`
             */
            sparseIndexField: string;
            /**
             * 稀疏向量值字段
             * @example `sparse_values`
             */
            sparseValueField: string;
            /**
             * 向量维度
             * @example `128`
             */
            dimension: string;
            /**
             * 向量索引算法
             * @example `Qc`
             */
            vectorIndexType: string;
            /**
             * 距离类型
             * @example `SquaredEuclidean`
             */
            distanceType: string;
            /**
             * 命名空间字段
             * @example `namespace`
             */
            namespace: string;
            /**
             * 索引结构配置
             */
            advanceParams: {
                /**
                 * 索引构建参数
                 * @example `{}`
                 */
                buildIndexParams: string;
                /**
                 * 索引检索参数
                 * @example `{}`
                 */
                searchIndexParams: string;
                /**
                 * 召回候选集的个数最小值
                 * @example `20000`
                 */
                minScanDocCnt: string;
                /**
                 * 线性构建的阈值
                 * @example `5000`
                 */
                linearBuildThreshold: string;
            };
        }[];
        /**
         * 字段处理配置
         */
        dataProcessConfig: {
            /**
             * 字段处理方式 (copy: 将源字段拷贝至目标字段, vectorize: 使用模型对源字段进行向量化，向量存储在目标字段中)
             * @example `vectorize`
             */
            operator: string;
            /**
             * 目标字段
             * @example `source_image_vector`
             */
            dstField: string;
            /**
             * 源字段
             * @example `source_image`
             */
            srcField: string;
            /**
             * 配置模型信息
             */
            params: {
                /**
                 * 向量化模型
                 * @example `clip`
                 */
                vectorModel: string;
                /**
                 * 数据类型
                 * @example `image`
                 */
                vectorModal: string;
                /**
                 * 向量化信息来源
                 */
                srcFieldConfig: {
                    /**
                     * OSS区域地址。
                     * @example `oss-cn-hangzhou-internal.aliyuncs.com`
                     */
                    ossEndpoint: string;
                    /**
                     * OSSBucket
                     * @example `test-bucket`
                     */
                    ossBucket: string;
                    /**
                     * 云账号id
                     * @example `1062017779051424`
                     */
                    uid: string;
                };
            };
        }[];
    };
}
