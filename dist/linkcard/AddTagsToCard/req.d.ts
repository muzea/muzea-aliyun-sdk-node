export interface AddTagsToCardRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在物联网SIM服务控制台的卡管理页面查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 标签名称。
     */
    "TagNameList"?: string[];
}
