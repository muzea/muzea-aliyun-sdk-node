export interface RunCommandResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 命令ID。
     * @example `c-7d2a745b412b4601b2d47f6a768d****`
     */
    CommandId: string;
    /**
     * 命令执行ID。
     * @example `t-7d2a745b412b4601b2d47f6a768d****`
     */
    InvokeId: string;
}
