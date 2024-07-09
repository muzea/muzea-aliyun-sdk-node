export interface GetHotspotSceneDataRequest {
    /**
     * 预览token
     * @example `344794c32937474a9c59eb130936****`
     */
    "PreviewToken": string;
    /**
     * 0 未发布， 1 已发布
     * @example `0`
     */
    "Type": number;
    /**
     * 自定义OSS域名（可为CDN域名）
     * @example `www.aliyundoc.com`
     */
    "Domain"?: string;
    /**
     * 是否开启自用资源访问
     * @example `true`
     */
    "Enabled"?: boolean;
}
