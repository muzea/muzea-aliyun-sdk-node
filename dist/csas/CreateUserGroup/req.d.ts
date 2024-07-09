export interface CreateUserGroupRequest {
    /**
     * 用户组名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `user_group_name`
     */
    "Name": string;
    /**
     * 用户组描述。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）和空格。
     * @example `这是一条用户组`
     */
    "Description"?: string;
    /**
     * 用户组属性集合。最大数量3000个。多个用户组属性之间是或的关系，按照合集生效。
     */
    "Attributes": {
        /**
         * 用户组的类型。取值：
         * - **username**：用户名。
         * - **department**：部门。
         * - **email**：邮箱。
         * - **telephone**：手机。
         * @example `department`
         */
        UserGroupType: string;
        /**
         * 用户组的关系。取值：
         * - **Equal**：等于。
         * - **Unequal**：不等于。
         * @example `Equal`
         */
        Relation: string;
        /**
         * 用户组属性的值。
         * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）、星号（*）、at（@）和空格。
         * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
         * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
         * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
         * @example `OU=部门1,OU=SASE钉钉`
         */
        Value: string;
        /**
         * 用户组的身份源ID。当自定义用户组类型为**department**时，存在该值。
         * @example `12`
         */
        IdpId: number;
    }[];
}
