export interface UpdateTransitRouterRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次修改请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，通过检查后直接修改转发路由器实例的信息。
     * - **true**：发送检查请求，只进行校验，不会修改转发路由器实例的信息。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 转发路由器实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 转发路由器实例ID。
     * @example `tr-uf654ttymmljlvh2x****`
     */
    "TransitRouterId": string;
    /**
     * 转发路由器实例的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterName"?: string;
    /**
     * 转发路由器实例新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterDescription"?: string;
}
