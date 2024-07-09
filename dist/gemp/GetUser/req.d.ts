export interface GetUserRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 用户ID
         * @example `63`
         */
        userId: number;
        /**
         * 幂等号
         * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
         */
        clientToken: string;
    };
}
