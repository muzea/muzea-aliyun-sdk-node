export interface StopDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 关机后的计费模式。
     * @example `StopCharging`
     */
    "StoppedMode"?: string;
    /**
     * 云电脑ID。可设置1~20个。
     * @example `ecd-7w78ozhjcwa3u****`
     */
    "DesktopId": string[];
}
