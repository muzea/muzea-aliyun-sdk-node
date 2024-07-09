export interface GetUserGuideStatusRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 幂等校验
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
         */
        clientToken: string;
    };
}
