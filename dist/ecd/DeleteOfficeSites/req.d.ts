export interface DeleteOfficeSitesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络ID。可设置1~100个。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string[];
}
