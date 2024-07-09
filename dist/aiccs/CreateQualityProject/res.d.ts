export interface CreateQualityProjectResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        InstanceId: string;
        Version: number;
        ProjectId: number;
    };
}
