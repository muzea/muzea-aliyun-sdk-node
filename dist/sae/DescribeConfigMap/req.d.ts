export interface DescribeConfigMapRequest {
    /**
     * 查询的ConfigMap实例ID。需要调用[ListNamespacedConfigMaps](~~176917~~)接口查看。
     * @example `1`
     */
    "ConfigMapId": number;
}
