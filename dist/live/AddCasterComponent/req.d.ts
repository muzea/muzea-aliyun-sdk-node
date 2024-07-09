export interface AddCasterComponentRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * >直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 组件名称。默认为组件ID。
     * @example `text01`
     */
    "ComponentName"?: string;
    /**
     * 用于指定组件位置，每个位置至多设置一个组件，格式需符合“RC01~RC99”。
     * > 组件类型为caption时，表示引用的视频源Location。
     * @example `RC01`
     */
    "LocationId": string;
    /**
     * 组件类型。取值：
     * - **text**：文字组件。如果选择text类型，必须同时设置请求参数TextLayerContent。
     * - **image**：图片组件。如果选择image类型，必须同时设置请求参数ImageLayerContent。
     * -  **caption**：翻译字幕组件。如果选择caption类型，必须同时设置请求参数CaptionLayerContent。
     * @example `text`
     */
    "ComponentType": string;
    /**
     * 组件显示的特效 。取值：
     *
     * - **none**（默认值）：无。
     * - **animateH**：水平滚动。
     * - **animateV**：垂直滚动。
     * @example `animateH`
     */
    "Effect"?: string;
    /**
     * 该组件Layer的尺寸，布局等信息。设置元素说明如下：
     * - **HeightNormalized**：高度归一化比例值。
     * - **WidthNormalized**：宽度归一化比例值。
     * - **PositionNormalized**：layer 元素的位置归一化值。
     * - **PositionRefer**：元素的位置参考坐标值。
     * JSON格式字符串，参数名采用首字母大写、驼峰格式。
     * @example `{"HeightNormalized":"1","PositionRefer":"topRight","WidthNormalized":"0","PositionNormalized":["0.1","0.2"]}`
     */
    "ComponentLayer": string;
    /**
     * 组件层叠次序。
     * - cover：覆盖。
     * - background：背景。
     * @example `cover`
     */
    "LayerOrder"?: string;
    /**
     * Layer元素属性。元素属性说明如下：
     * ><notice>当ComponentType为text时，本参数才可用且必传。
     * ></notice>
     * - **SizeNormalized**：字体归一化大小，字体设置大小为“font_size/output_height”，取值范围`[0,1]`，如果系统根据归一化方式反计算出来的字体大小大于1024，取1024。
     * - **BorderWidthNormalized**：文字边框宽度归一化值，该归一化值是基于文字的size来计算的，即“BorderWidth/FontSize”，取值范围`[0,1]`，如果根据归一化方式反计算出来的值超过16，取16，默认0。
     * - **FontName**：字体名称，取值请参见**导播台字体说明**，默认楷体，“KaiTi”。
     * - **BorderColor**：文字边框色彩，取值“0x000000-0xffffff”，默认“”，表示无效。
     * - **Text**：文本内容，默认“”。
     * - **Color**：文字色彩，默认“0xff0000”，红色。
     * JSON格式字符串，参数名采用首字母大写，驼峰格式。
     * @example `{"BorderWidthNormalized":"1","SizeNormalized":"0.2","Color":"0x000000","FontName":"KaiTi","BorderColor":"0x000000","Text":"hello world!"}`
     */
    "TextLayerContent"?: string;
    /**
     * Layer元素属性。元素属性说明如下：
     * ><notice> ComponentType为image时，该参数必传。
     * ></notice>
     * MaterialId：媒资库素材ID。上传素材时设置的名称就是媒资库素材ID。
     * JSON格式字符串，参数名采用首字母大写，驼峰格式。
     * @example `{"MaterialId":"6cf724c6ebfd4a59b5b3cec6f10d****"}`
     */
    "ImageLayerContent"?: string;
    /**
     * Layer元素属性。元素属性说明如下：
     * ><notice>当ComponentType为caption时，该参数必传。
     * ></notice>
     * - **SizeNormalized**：字体归一化大小，字体设置大小为“font_size/output_height”，取值范围`[0,1]`，精确到小数点后两位，如果系统根据归一化方式反计算出来的字体大小大于**1024**，取**1024**。
     * - **BorderWidthNormalized**：文字边框宽度归一化值，该归一化值是基于文字的size来计算的，即“BorderWidth/FontSize”，取值范围`[0,1]`，精确到小数点后两位，如果根据归一化方式反计算出来的值超过**16**，取**16**，默认**0**。
     * - **FontName**：字体名称，取值请参见**云导播字体说明**，默认楷体，“KaiTi”。
     * - **BorderColor**：文字边框色彩，取值“0x000000-0xffffff”，默认“”，表示无效。
     * - **LocationId**: 翻译源的channelId。
     * - **SourceLan**: 视频源的原始音频语言。En-英文，cn-中文，es-西班牙文，ru-俄文，默认为cn-中文。
     * - **TargetLan**：视频源的目标音频语言。不设置表示语音识别，设置表示翻译。取值：en-英文，cn-中文，es-西班牙文，ru-俄文，cn-中文。
     * - **ShowSourceLan**：是否显示源语言。取值：true-显示，false-不显示，默认为false。
     * - **Truncation**：字幕是否可以被截断。取值：true-可以被截断，false-不可以被截断，默认为false。
     * - **SourceLanPerLineWordCount**：源语言每行字数，默认20。
     * - **TargetLanPerLineWordCount**：目标语言每行字数，默认20。
     * - **SourceLanReservePages**：源语言保留行数，Truncation为true的时候生效，默认2行。
     * - **TargetLanReservePages**：目标语言保留行数，Truncation为true的时候生效，默认2行。
     * JSON格式字符串，参数名采用首字母大写，驼峰格式。
     * @example `{"BorderWidthNormalized":0.01,"SizeNormalized":0.05,"Color":"0x000000","LocationId":"RV01","SourceLan":"cn","FontName":"KaiTi","BorderColor":"0xffffff"}`
     */
    "CaptionLayerContent"?: string;
    /**
     * H5组件配置。
     * @example `{"htmlUrl":http://caster.example.com}`
     */
    "HtmlLayerContent"?: string;
}
