export interface PurgeDBInstanceLogRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 待清理或收缩日志的实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
}
