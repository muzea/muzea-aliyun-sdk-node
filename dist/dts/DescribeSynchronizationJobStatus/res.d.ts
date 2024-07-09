export interface DescribeSynchronizationJobStatusResponse {
    /**
     * 同步实例名称。
     * @example `MySQL同步`
     */
    SynchronizationJobName: string;
    /**
     * 同步实例的状态，返回值：
     * - **notStarted**：未启动。
     * - **prechecking**：预检查中。
     * - **precheckFailed**：预检查失败。
     * - **initializating**：同步初始化中。
     * - **initializeFailed**：同步初始化失败。
     * - **synchronizing**：同步中。
     * - **failed**：同步失败。
     * - **suspending**：暂停。
     * - **modifying**：同步对象变更中。
     * - **finished**：完成。
     * @example `synchronizing`
     */
    Status: string;
    /**
     * 是否执行全量数据初始化，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    DataInitialization: string;
    /**
     * 同步延迟，单位为秒。
     * @example `0`
     */
    Delay: string;
    /**
     * 数据同步失败的错误提示。
     * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
     */
    ErrorMessage: string;
    /**
     * 同步实例的到期时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
     * @example `2021-03-07T16:00:00Z`
     */
    ExpireTime: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 是否执行结构初始化，返回值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    StructureInitialization: string;
    /**
     * 同步实例的付费类型，返回值：
     * - **PrePaid**：包年包月（预付费）。
     * - **PostPaid**：按量付费（后付费）。
     * @example `PrePaid`
     */
    PayType: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 同步链路规格。
     * @example `large`
     */
    SynchronizationJobClass: string;
    /**
     * 请求ID。
     * @example `DACDF659-AFC6-4DC8-ADB8-4569419A4****`
     */
    RequestId: string;
    /**
     * 数据同步实例ID。
     * @example `dtsexjk1alb116****`
     */
    SynchronizationJobId: string;
    /**
     * 同步延迟，单位为毫秒。
     * @example `506`
     */
    DelayMillis: number;
    /**
     * 同步方向，返回值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * @example `Forward`
     */
    SynchronizationDirection: string;
    /**
     * 数据同步任务ID，可用于配置控制台任务详情页面的链接。
     * > 同步任务详情页的链接为：https://dts.console.aliyun.com/#/syncmore/exjk1alb116****​/config/ 。
     * @example `exjk1alb116****`
     */
    TaskId: string;
    /**
     * 同步最新一条数据的时间戳，格式为Unix时间戳。
     * > Unix时间戳转换工具可用搜索引擎获取。
     * @example `1610616144`
     */
    Checkpoint: string;
    /**
     * 全量数据初始化状态。
     */
    DataInitializationStatus: {
        /**
         * 全量数据初始化状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：初始化中。
         * - **Failed**：初始化失败。
         * - **Finished**：初始化完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 全量数据初始化进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 全量数据初始化失败的错误提示。
         * @example `java.lang.NumberFormatException: For input string: ""`
         */
        ErrorMessage: string;
        /**
         * 已完成全量数据初始化的记录数。
         * @example `200001`
         */
        Progress: string;
    };
    /**
     * 增量数据同步状态。
     */
    DataSynchronizationStatus: {
        /**
         * 增量数据同步状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：同步中。
         * - **Failed**：同步失败。
         * - **Finished**：同步完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 增量数据同步延迟，单位为秒。
         * @example `0`
         */
        Delay: string;
        /**
         * 增量数据同步进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 增量数据同步失败的错误提示。
         * @example `任务失败太久无法恢复`
         */
        ErrorMessage: string;
        /**
         * 增量数据同步延迟，单位为毫秒。
         * @example `856`
         */
        DelayMillis: number;
        /**
         * 同步最新一条数据的时间戳，格式为Unix时间戳。
         * @example `1610709865`
         */
        Checkpoint: string;
    };
    /**
     * 目标实例的连接信息。
     */
    DestinationEndpoint: {
        /**
         * 目标实例ID。
         * @example `rm-bp162d4tp0500****`
         */
        InstanceId: string;
        /**
         * 目标实例的连接地址。
         * @example `172.16.88.***`
         */
        IP: string;
        /**
         * 目标实例类型。
         * @example `RDS`
         */
        InstanceType: string;
        /**
         * 目标实例的数据库服务端口。
         * @example `3306`
         */
        Port: string;
        /**
         * 目标实例的数据库账号。
         * @example `dtstest`
         */
        UserName: string;
        /**
         * 目标实例的数据库类型。
         * @example `MySQL`
         */
        EngineName: string;
    };
    /**
     * 同步链路概况信息。
     */
    Performance: {
        /**
         * 每秒同步SQL语句的次数，包括BEGIN、COMMIT 、DML语句（INSERT、DELETE、UPDATE）及DDL语句。
         * @example `100`
         */
        RPS: string;
        /**
         * 每秒同步数据的流量，单位为MB/s。
         * @example `1`
         */
        FLOW: string;
    };
    /**
     * 预检查状态。
     */
    PrecheckStatus: {
        /**
         * 预检查结果，返回值：
         * - **Success**：通过该项检查。
         * - **Failed**：未通过该项检查。
         * @example `Success`
         */
        Status: string;
        /**
         * 预检查整体进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 各预检查项的执行情况。
         */
        Detail: {
            /**
             * 检查结果，返回值：
             * - **Success**：通过该项检查。
             * - **Failed**：未通过该项检查。
             * @example `Success`
             */
            CheckStatus: string;
            /**
             * 预检查未通过的错误提示。
             * > 当**CheckStatus**参数返回值为**Failed**时，才会返回本参数。
             * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
             */
            ErrorMessage: string;
            /**
             * 预检查项目。
             * @example `CHECK_CONN_SRC`
             */
            ItemName: string;
            /**
             * 预检查未通过时对应的修复方法。
             * > 当**CheckStatus**参数返回值为**Failed**时，才会返回本参数。
             * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
             */
            RepairMethod: string;
        }[];
    };
    /**
     * 源实例连接信息。
     */
    SourceEndpoint: {
        /**
         * 源实例ID。
         * @example `rm-bp1i99e8l7913****`
         */
        InstanceId: string;
        /**
         * 源实例的连接地址。
         * @example `172.16.88.***`
         */
        IP: string;
        /**
         * 源实例类型。
         * @example `RDS`
         */
        InstanceType: string;
        /**
         * 源实例的数据库服务端口。
         * @example `3306`
         */
        Port: string;
        /**
         * 源实例的数据库账号。
         * @example `dtstest`
         */
        UserName: string;
        /**
         * 源实例的数据库类型。
         * @example `MySQL`
         */
        EngineName: string;
    };
    /**
     * 结构初始化状态。
     */
    StructureInitializationStatus: {
        /**
         * 结构初始化状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：初始化中。
         * - **Failed**：初始化失败。
         * - **Finished**：初始化完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 结构初始化进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 结构初始化出现异常的错误提示。
         * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;`
         */
        ErrorMessage: string;
        /**
         * 已完成结构初始化的表的数量。
         * @example `1`
         */
        Progress: string;
    };
    /**
     * 同步对象。
     */
    SynchronizationObjects: {
        /**
         * 待同步的库在目标数据库中映射的名称。
         * @example `newdtstestdatabase`
         */
        NewSchemaName: string;
        /**
         * 待同步的库名。
         * @example `dtstestdatabase`
         */
        SchemaName: string;
        /**
         * 待同步库中排除的表，这些表将不会被同步。
         */
        TableExcludes: {
            /**
             * 排除的表的名称。
             * @example `order`
             */
            TableName: string;
        }[];
        /**
         * 待同步的表。
         */
        TableIncludes: {
            /**
             * 待同步表名。
             * @example `customer`
             */
            TableName: string;
        }[];
    }[];
}
