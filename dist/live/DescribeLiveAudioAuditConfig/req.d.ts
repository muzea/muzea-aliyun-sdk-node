export interface DescribeLiveAudioAuditConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属的应用名称。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName"?: string;
}
