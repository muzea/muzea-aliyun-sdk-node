export interface PreloadDcdnObjectCachesResponse {
    /**
     * 预热返回的任务ID，多个任务ID用半角逗号（,）分隔。预热返回的任务ID会按照以下两条规则对预热任务做合并：
     * - 同一个域名、同一秒钟提交的预热任务（URL颗粒度）会被合并为同一个RushTaskId。
     * - 同一个域名、同一秒钟提交的预热任务（URL颗粒度）如果超过500条，那么会按照每500条合并为一个RushTaskId的方式处理。
     * @example `95248880`
     */
    PreloadTaskId: string;
    /**
     * 请求ID。
     * @example `E5BD4B50-7A02-493A-AE0B-97B9024B4135`
     */
    RequestId: string;
}
