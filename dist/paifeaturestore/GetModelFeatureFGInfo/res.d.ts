export interface GetModelFeatureFGInfoResponse {
    /**
     * 请求ID。
     * @example `6B662A64-E4BF-56F8-BF5F-4C63F34EC0A8`
     */
    RequestId: string;
    /**
     * fg.json文件配置内容。
     * @example `{"features": [{"feature_name": "item_id","feature_type": "id_feature","value_type": "String","expression": "item:item_id","default_value": "-1024","combiner": "mean","need_prefix": false},{"feature_name": "f1","feature_type": "lookup_feature","value_type": "Integer","map": "item:f1","key": "user:1","default_value": "0","combiner": "mean","need_prefix": false,"needDiscrete": false,"needWeighting": false,"needKey": false}],"reserves": ["f1"]}`
     */
    Content: string;
}
