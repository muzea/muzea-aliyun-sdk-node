export interface PushDeviceDataResponse {
    /**
     * 请求ID。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 数据是否推送成功。
     *  成功返回success。
     * @example `success`
     */
    data: string;
}
