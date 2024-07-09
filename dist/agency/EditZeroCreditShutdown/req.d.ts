export interface EditZeroCreditShutdownRequest {
    /**
     * 待编辑停机策略的分销客户uid
     * @example `1263644979775567`
     */
    "Uid"?: number;
    /**
     * ### **停机策略**
     * 详细介绍请参考官网文档：https://www.alibabacloud.com/help/zh/channel-platform/latest/shutdowndelayprivilege
     * - **immediatelyStop 立即停机**——当分销客户账号可用额度小于0，账号进入欠费状态，不可新购资源，后付费实例停机不再产生消费，预付费实例可以使用到有效期止。停机状态保持15天后，后付费实例将被释放。产品存在出账延迟，可能存在实例成功停机后，额度仍在扣减情况。
     * - **delayStop 延迟停机**——延停策略中的透支额度，由阿里云根据账号历史消费金额统计得出，最低600 USD，预计在欠费后实例可继续使用15天。透支金额适用于按量付费产品，启用后当客户欠费时（可用额度< 0），欠费金额在透支额度范围内时，不触发实例停机。透支额度并非欠费金额上限，产品存在出账延迟，可能存在实例成功停机后，额度仍在扣减情况。停机状态保持15天后，后付费实例将被释放。在延停额度<=剩余额度<0的情况下，可手动立刻停机。
     * - **noStop 不停机**——选择欠费不停机，当客户欠费（剩余额度< 0）后不会触发客户停机，客户欠费金额无上限，需要在ACPN人工操作“立即停机”修改实例状态，请慎重选择。
     * @example `noStop`
     */
    "ShutdownPolicy"?: string;
}
