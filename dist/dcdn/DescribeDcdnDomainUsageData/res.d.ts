export interface DescribeDcdnDomainUsageDataResponse {
    /**
     * 查询到的加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 查询数据的结束时间。
     * @example `2015-12-10T22:00:00Z`
     */
    EndTime: string;
    /**
     * 查询数据的开始时间。
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 返回的用量类型。
     * @example `bps`
     */
    Type: string;
    /**
     * 返回的用量区域。
     * @example `CN`
     */
    Area: string;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 每条记录的时间间隔，单位为秒。
     * @example `/`
     */
    DataInterval: string;
    UsageDataPerInterval: {
        /**
         * 每个时间间隔的流量数据。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T21:30:00Z`
             */
            TimeStamp: string;
            /**
             * 当**Field**为**bps**时，该值为峰值带宽时刻，否则值和**TimeStamp**相同。
             * @example `2015-12-10T21:30:00Z`
             */
            PeakTime: string;
            /**
             * 用量。
             * @example `4233041**`
             */
            Value: string;
            /**
             * 特殊用量。
             * > 用来标记特殊情况下的用量值，没有特殊计费可忽略该参数。
             * @example `4233041**`
             */
            SpecialValue: string;
        }[];
    };
}
