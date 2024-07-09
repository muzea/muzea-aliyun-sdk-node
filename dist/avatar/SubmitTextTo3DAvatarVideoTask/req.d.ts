export interface SubmitTextTo3DAvatarVideoTaskRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `xxxx`
     */
    "TenantId": number;
    /**
     * App信息，代表一个业务配置
     */
    "App": {
        /**
         * App ID。在开发者中心-实例管理页面获取对应的appId，[参考文档](https://help.aliyun.com/document_detail/479093.html?spm=a2c4g.447644.0.0.406f66c95dI2Ee#6a48daa1ee899)。
         * @example `3d95xx946a`
         */
        AppId: string;
    };
    /**
     * 提交的视频合成的任务标题，最长不超过64个字符
     * @example `这是一个示例标题`
     */
    "Title": string;
    /**
     * 合成文本，最长不超过1000个字符。支持SSML指定TTS的多音字发音、停顿、特殊读法、数字人动作等，可参考：[3D数字人视频合成使用指南](https://help.aliyun.com/document_detail/447834.html)。
     * @example `这是一个示例文本`
     */
    "Text": string;
    /**
     * 视频格式
     */
    "VideoInfo"?: {
        /**
         * 是否需要透明通道， 默认false
         * - true： 开启透明通道，视频格式可通过AlphaFormat指定，支持webm、mov、mp4
         * - false：不开启透明通道，视频格式为mp4
         * @example `false`
         */
        IsAlpha: boolean;
        /**
         * 透明通道格式 ，默认值1
         * - 1：webm
         * - 2：mov
         * - 3：mp4
         * ><notice>当isAlpha为false时，该字段忽略。mov格式的透明视频文件大小会非常大，不推荐使用，建议使用webm或者mp4。></notice>
         * @example `1`
         */
        AlphaFormat: number;
        /**
         * 是否需要字幕，默认值：true
         * - true： 生成字幕，字幕文件格式为**ass**文件，会作为独立文件提供下载链接进行下载
         * - false：不生成字幕
         * ><warning>该字段已废弃，传入true和false都会生成单独字幕文件，新增SubtitleEmbedded字段可控制是否将字幕合并到视频中。></warning>
         * @example `true`
         */
        IsSubtitles: boolean;
        /**
         * 是否将字幕合并到视频中，默认值：false
         * - true：字幕合并到视频中
         * - false：字幕不合并到视频中
         * @example `false`
         */
        SubtitleEmbedded: boolean;
        /**
         * 生成的视频分辨率，目前支持：
         * - 1：720 * 1280（竖屏）
         * - 2：1280 * 720（横屏）
         * - 3：1080 * 1920（竖屏）
         * - 4：1920 * 1080（横屏）
         * @example `1`
         */
        Resolution: number;
        /**
         * 有效可访问的url背景图片地址，背景图片的分辨率必须要与生成的视频分辨率保持一致
         * - 目前支持jpg，jpeg，png的图片格式
         * @example `可访问的公网url地址`
         */
        BackgroundImageUrl: string;
        /**
         * 字幕样式。
         */
        SubtitleStyle: {
            /**
             * 字体名称，默认值：alibabapuhuiti
             * @example `alibabapuhuiti`
             */
            Name: string;
            /**
             * 字体颜色，十六进制颜色码RGBA。
             * @example `#000000FF`
             */
            Color: string;
            /**
             * 描边颜色，十六进制颜色码RGBA。
             * @example `#FFFFFF00`
             */
            OutlineColor: string;
            /**
             * 字幕y轴位置，画面顶端坐标为0。默认值，1920x1080：984，1080x1920：1824。
             * @example `984`
             */
            Y: number;
            /**
             * 字体大小，最小值：36，最大值：72，默认值：36。
             * @example `36`
             */
            Size: number;
        };
    };
    /**
     * 数字人相关配置
     */
    "AvatarInfo"?: {
        /**
         * 数字人机位
         * - 0: 全身近景机位，默认机位
         * - 1: 头部近景机位
         * - 2: 全身远景机位
         * - 3: 半身近景机位
         * - 4: 半身远景机位
         * - 5: 左边近景机位
         * - 6: 右边近景机位
         * 具体每个机位的效果预览可以参考：[3D数字人视频合成使用指南](https://help.aliyun.com/document_detail/447834.html#9c8a96707515k)
         * @example `0`
         */
        Locate: number;
        /**
         * 数字人角度
         * - 0: 正面，默认角度
         * - 1: 左侧30度
         * - 2: 右侧30度
         * 具体每个角度的效果预览可以参考：[3D数字人视频合成使用指南](https://help.aliyun.com/document_detail/447834.html#a989eb5075t9y)
         * @example `0`
         */
        Angle: number;
        /**
         * 人物code
         * @example `CH_xxxxxxx`
         */
        Code: string;
        /**
         * 行业code，默认值：default
         * - default - 默认通用
         * - kefu - 客服行业
         * - live - 直播场景
         * @example `default`
         */
        IndustryCode: string;
    };
    /**
     * 音频相关配置，不传则使用资产中配置的默认值。
     * > 部分阿里云语音合成的音色没有经过效果验证，可能会出现效果上的差异
     */
    "AudioInfo"?: {
        /**
         * TTS播报发音人code，从虚拟数字人开放平台-3D资产管理页面获取，不传则使用资产中配置的发音人。
         * @example `guijie`
         */
        Voice: string;
        /**
         * TTS播报声音语速，取值范围：-500～500，不传则使用资产中配置的默认值。
         * [-500, 0, 500] 对应的语速倍速区间为 [0.5, 1.0, 2.0]。
         * -500表示基准语速的0.5倍速；
         * 0表示基准语速的1倍速。1倍速是指模型默认输出的合成语速，语速会依据每一个发音人略有不同，大概每秒钟4个字左右；
         * 500表示基准语速的2倍速；
         * 计算方法如下：
         * 0.8倍速（1-1/0.8)/0.002 = -125
         * 1.2倍速（1-1/1.2)/0.001 = 166
         * @example `0`
         */
        SpeechRate: number;
        /**
         * TTS播报声音音量，取值范围：0～100，不传则使用资产中配置的默认值。
         * @example `0`
         */
        Volume: number;
        /**
         * TTS播报声音语调，取值范围：-500～500，不传则使用资产中配置的默认值。
         * @example `0`
         */
        PitchRate: number;
        /**
         * 输出音频采样率（单位: Hz）。
         * @example `16000`
         */
        SampleRate: number;
    };
    /**
     * 本次视频合成任务是否需要事件回调，默认false不回调。平台支持在任务开始和任务结束时进行事件回调，具体可参考文档：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html?spm=a2c4g.447644.0.0.406f5876hRJTVU)。
     * @example `false`
     */
    "Callback"?: boolean;
    /**
     * 回调时需要透传的一些参数，json格式字符串，callback=false时不生效。
     * @example `{
          "xxx": "xxx"
    }`
     */
    "CallbackParams"?: string;
    /**
     * 一些扩展参数。
     * @example `{"xxx": "xxx"}`
     */
    "ExtParams"?: string;
}
