export interface GetGrafanaWorkspaceRequest {
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 工作区 ID。
     * @example `grafana-cn-4xl3g******`
     */
    "GrafanaWorkspaceId": string;
    /**
     * 语言环境，默认为中文：zh， 英文： en。
     * @example `zh`
     */
    "AliyunLang"?: string;
}
