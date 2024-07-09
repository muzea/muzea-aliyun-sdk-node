export interface RegisterResourceTypeRequest {
    /**
     * 实体类型。取值：Module，模块。
     * @example `Module`
     */
    "EntityType": string;
    /**
     * 资源类型。
     * @example `MODULE::MyOrganization::MyService::MyUsecase`
     */
    "ResourceType": string;
    /**
     * 模板主体的结构。长度为1~524,288个字节。模板即为模块内容。如果长度较大，建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * > - 仅在EntityType为Module时生效。
     * > - 您仅能指定TemplateBody、TemplateURL其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大为524,288个字节。模板即为模块内容。
     * > - 如果OSS地域未指定，默认与接口参数RegionId相同。
     * > - 仅在EntityType为Module时生效。
     * > - 您仅能指定TemplateBody、TemplateURL其中一个参数。
     * URL的最大长度为：1024个字节。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 资源类型的描述。最大长度为512个字符。
     * @example `It is a demo.`
     */
    "Description"?: string;
    /**
     * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。
     * 长度最大为64个字符，可包含英文字符、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
