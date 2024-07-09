export interface DeleteAccessPointPolicyForObjectProcessRequest {
    /**
     * 要删除对象FC接入点策略的Bucket。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 填写对象FC接入点名称。
     * @example `fc-ap-01`
     */
    "x-oss-access-point-for-object-process-name": string;
}
