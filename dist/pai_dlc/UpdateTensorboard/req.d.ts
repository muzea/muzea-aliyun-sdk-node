export interface UpdateTensorboardRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `380`
     */
    "WorkspaceId"?: string;
    /**
     * Tensorboard ID。如何获取Tensorboard ID，请参见[ListTensorboards](~~459689~~)。
     * @example `tensorboard-20210114104214-vf9lowjt3pso`
     */
    "TensorboardId": string;
    /**
     * 最长运行时长，单位为：分钟。
     * @example `300`
     */
    "MaxRunningTimeMinutes"?: number;
}
