interface OOS {
    CancelExecution(query: {
        "RegionId"?: string;
        "ExecutionId": string;
    }): Promise<{}>;
    CreateTemplate(query: {
        "RegionId"?: string;
        "Content": string;
        "TemplateName": string;
    }): Promise<{}>;
    DeleteExecutions(query: {
        "RegionId"?: string;
        "ExecutionIds": string;
    }): Promise<{}>;
    DeleteTemplate(query: {
        "RegionId"?: string;
        "TemplateName": string;
    }): Promise<{}>;
    GenerateExecutionPolicy(query: {
        "RegionId"?: string;
        "TemplateName": string;
    }): Promise<{}>;
    GetExecutionTemplate(query: {
        "RegionId"?: string;
        "ExecutionId": string;
    }): Promise<{}>;
    GetTemplate(query: {
        "RegionId"?: string;
        "TemplateName": string;
        "TemplateVersion"?: string;
    }): Promise<{}>;
    ListActions(query: {
        "RegionId"?: string;
        "OOSActionName"?: string;
        "MaxResults"?: number;
        "NextToken"?: string;
    }): Promise<{}>;
    ListExecutionLogs(query: {
        "RegionId"?: string;
        "ExecutionId": string;
        "TaskExecutionId"?: string;
        "LogType"?: string;
        "MaxResults"?: number;
        "NextToken"?: string;
    }): Promise<{}>;
    ListExecutions(query: {
        "RegionId"?: string;
        "TemplateName"?: string;
        "Status"?: string;
        "ExecutionId"?: string;
        "StartDateBefore"?: string;
        "StartDateAfter"?: string;
        "EndDateBefore"?: string;
        "EndDateAfter"?: string;
        "Mode"?: string;
        "ExecutedBy"?: string;
        "ParentExecutionId"?: string;
        "RamRole"?: string;
        "IncludeChildExecution"?: boolean;
        "MaxResults"?: number;
        "NextToken"?: string;
        "SortField"?: string;
        "SortOrder"?: string;
    }): Promise<{}>;
    ListTaskExecutions(query: {
        "RegionId"?: string;
        "ExecutionId"?: string;
        "Status"?: string;
        "StartDateBefore"?: string;
        "StartDateAfter"?: string;
        "EndDateBefore"?: string;
        "EndDateAfter"?: string;
        "TaskExecutionId"?: string;
        "TaskName"?: string;
        "TaskAction"?: string;
        "ParentTaskExecutionId"?: string;
        "IncludeChildTaskExecution"?: boolean;
        "MaxResults"?: number;
        "NextToken"?: string;
        "SortField"?: string;
        "SortOrder"?: string;
    }): Promise<{}>;
    ListTemplates(query: {
        "RegionId"?: string;
        "TemplateName"?: string;
        "TemplateFormat"?: string;
        "ShareType"?: string;
        "CreatedBy"?: string;
        "CreatedDateBefore"?: string;
        "CreatedDateAfter"?: string;
        "MaxResults"?: number;
        "NextToken"?: string;
        "SortField"?: string;
        "SortOrder"?: string;
        "HasTrigger"?: boolean;
    }): Promise<{}>;
    NotifyExecution(query: {
        "RegionId"?: string;
        "NotifyType": string;
        "ExecutionId": string;
        "NotifyNote"?: string;
        "TaskName"?: string;
        "TaskExecutionId"?: string;
        "ExecutionStatus"?: string;
        "Parameters"?: string;
        "LoopItem"?: string;
    }): Promise<{}>;
    StartExecution(query: {
        "RegionId"?: string;
        "TemplateName": string;
        "TemplateVersion"?: string;
        "Mode"?: string;
        "LoopMode"?: string;
        "ParentExecutionId"?: string;
        "SafetyCheck"?: string;
        "Parameters"?: string;
        "ClientToken"?: string;
    }): Promise<{}>;
    UpdateTemplate(query: {
        "RegionId"?: string;
        "Content": string;
        "TemplateName": string;
    }): Promise<{}>;
    ValidateTemplateContent(query: {
        "RegionId"?: string;
        "Content": string;
    }): Promise<{}>;
    DescribeRegions(query: {
        "RegionId"?: string;
        "AcceptLanguage"?: string;
    }): Promise<{}>;
    ListExecutionRiskyTasks(query: {
        "RegionId"?: string;
        "TemplateName": string;
    }): Promise<{}>;
}
export default OOS;
