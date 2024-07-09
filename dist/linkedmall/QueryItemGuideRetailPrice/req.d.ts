export interface QueryItemGuideRetailPriceRequest {
    /**
     * 分销商id
     * @example `75547******9212928`
     */
    "DistributorId"?: string;
    /**
     * 分销商商城id
     * @example `122889******114694`
     */
    "DistributionMallId"?: string;
    /**
     * 商品id集合
     */
    "LmItemIds"?: string[];
    /**
     * 租户Id
     * @example `18******263`
     */
    "TenantId"?: string;
}
