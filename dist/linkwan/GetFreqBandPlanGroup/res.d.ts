export interface GetFreqBandPlanGroupResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 频段信息。
     */
    Data: {
        /**
         * 结束频点，单位为MHz。
         * @example `925`
         */
        EndFrequency: number;
        /**
         * 频段ID。
         * @example `201`
         */
        GroupId: number;
        /**
         * 频段类型。取值范围：
         * - **SAME_FREQUENCY**：同频
         * - **DIFF_FREQUENCY**：异频
         * @example `SAME_FREQUENCY`
         */
        FrequencyType: string;
        /**
         * Region标识。
         * @example `CN`
         */
        FrequencyRegionId: string;
        /**
         * 起始频点，单位为MHz。
         * @example `923`
         */
        BeginFrequency: number;
    };
}
