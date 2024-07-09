export interface DescribeAntChainTransactionReceiptV2Request {
    /**
     * 区块链ID
     * @example `8bd720bde18c4b37b0f4a1c7834db163`
     */
    "AntChainId": string;
    /**
     * 交易哈希
     * @example `8bd720bde18c4b37b0f4a1c7834db163`
     */
    "Hash": string;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId"?: string;
}
