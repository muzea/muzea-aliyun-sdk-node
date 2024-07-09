export interface CommitContactFlowRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 联系流ID。
     * @example `7d706489-d06d-4a92-8666-8c9dba2c5cb1`
     */
    "ContactFlowId": string;
    /**
     * IVR的定义。
     * @example `{"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到阿里云呼叫中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}`
     */
    "Definition": string;
    /**
     * 版本描述。
     * @example `1`
     */
    "Description": string;
    /**
     * 草稿ID，当前联系流对应的草稿版本ID。
     * @example `b28f74ca-5846-4496-8bbd-34fb1750798c`
     */
    "DraftId": string;
}
