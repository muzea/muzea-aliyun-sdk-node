export interface DescribeSlotResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF1****`
     */
    RequestId: string;
    /**
     * 数据集加速槽的创建者的Uid，在阿里云内为RAM用户ID（阿里云账号创建则直接为阿里云账号ID）。
     * @example `27606534679741****`
     */
    UserId: string;
    /**
     * 数据集加速槽资源拥有者的Uid，在阿里云内为阿里云账号ID。
     * @example `155770209819****`
     */
    OwnerId: string;
    /**
     * 数据集加速槽创建的时间。格式使用 ISO8601（RFC3339）。
     * @example `2014-10-02T15:01:23Z`
     */
    GmtCreateTime: string;
    /**
     * 数据集加速槽最后更新的时间。格式使用 ISO8601（RFC3339）。
     * @example `2014-10-02T15:01:23Z`
     */
    GmtModifiedTime: string;
    /**
     * 数据集加速槽的唯一标识符。
     * @example `slot-5zk866779me51j****`
     */
    Uuid: string;
    /**
     * 加速槽所对应的数据集加速实例的唯一标识符。
     * @example `inst-my1tk3jggooi5u****`
     */
    InstanceId: string;
    /**
     * 数据集加速槽名称。
     * @example `slot_1`
     */
    Name: string;
    /**
     * 数据集加速槽的描述与解释。
     * @example `xgboost数据集加速槽`
     */
    Description: string;
    /**
     * 用户为数据集加速槽添加的自定义标签。
     */
    Tags: {
        /**
         * 标签的键值。
         * @example `dataset_version`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `v0.1.0`
         */
        Value: string;
    }[];
    /**
     * 数据集加速槽的数据存储类型，可能值：
     * - OSS：OSS文件存储。
     * - NAS：NAS文件存储。
     * @example `OSS`
     */
    StorageType: string;
    /**
     * 数据集加速槽的数据的资源标识符，数据类型不同存在不同格式。
     * @example `oss://examplebucket/data/VOCdevkit/VOC2007/ImageSets/Main/val.txt`
     */
    StorageUri: string;
    /**
     * 数据集加速槽的最大容量。输入字符串的格式需要满足以下规范：[Quantity](https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/common-definitions/quantity/) 。
     * @example `30.0G`
     */
    Capacity: string;
    /**
     * 数据集加速槽的读写类型。
     * @example `readonly`
     */
    IoType: string;
    /**
     * 数据集加速槽的生命周期。
     */
    LifeCycle: any;
    /**
     * 数据集加速槽状态。
     */
    Status: any;
}
