interface QUALITYCHECK {
    AddRuleCategory(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteScoreForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetAudioUrl(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetFileDimension(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetRuleDetail(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetSkillGroupConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetUserInfo(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    OpenService(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitAudioLabel(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitReviewInfo(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateSkillGroupConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    AddBusinessCategory(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    AddThesaurusForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    AddUploadDataSet(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    AssignReviewer(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CloseService(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ConfigDataSet(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CreateAsrVocab(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CreateRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CreateSkillGroupConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CreateTaskAssignRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CreateUser(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    CreateWarningConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DelRuleCategory(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DelThesaurusForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteAsrVocab(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteBusinessCategory(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteCustomizationConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteDataSet(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeletePrecisionTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteSkillGroupConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteSubScoreForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteTaskAssignRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteUser(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DeleteWarningConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    DoCheckResource(query: {
        "RegionId"?: string;
        "Pk": string;
        "Interrupt"?: boolean;
        "Bid"?: string;
        "Hid"?: number;
        "Country"?: string;
        "TaskIdentifier"?: string;
        "TaskExtraData"?: string;
        "GmtWakeup"?: string;
        "Success"?: boolean;
        "Message"?: string;
        "Level"?: number;
        "Prompt"?: string;
    }): Promise<{}>;
    DoLogicalDeleteResource(query: {
        "RegionId"?: string;
        "Pk": string;
        "Interrupt"?: boolean;
        "Bid"?: string;
        "Hid"?: number;
        "Country"?: string;
        "TaskIdentifier"?: string;
        "TaskExtraData"?: string;
        "GmtWakeup"?: string;
        "Success"?: boolean;
        "Message"?: string;
    }): Promise<{}>;
    DoPhysicalDeleteResource(query: {
        "RegionId"?: string;
        "Pk": string;
        "Interrupt"?: boolean;
        "Bid"?: string;
        "Hid"?: number;
        "Country"?: string;
        "TaskIdentifier"?: string;
        "TaskExtraData"?: string;
        "GmtWakeup"?: string;
        "Success"?: boolean;
    }): Promise<{}>;
    EditThesaurusForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ExchangeAudio(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ExecuteAsrTransform(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GenerateCustomizationModelId(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    GetAccAsrResult(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetAsrVocab(query: {
        "RegionId"?: string;
        "JsonStr"?: string;
    }): Promise<{}>;
    GetAudioContentInfo(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetAudioDataStatus(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetBusinessCategoryList(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetCustomizationConfigList(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetDataSetList(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetDataSetOssHeader(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetNextResultToReview(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetNextResultToVerify(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetOssHeader(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetPocTestReport(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetPrecisionTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetRecognizeResult(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetResult(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetResultCount(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetResultReviewList(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetResultToReview(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetReviewInfo(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetRuleCategory(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetRuleDimension(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetScoreInfo(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetTaskFileResultList(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetTaskRuleList(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetThesaurusBySynonymForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetUserConfig(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    GetUserGroup(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    HandleComplaint(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    InsertScoreForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    InsertSubScoreForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    InvalidRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListAsrVocab(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListDataSetTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListPrecisionTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListRoles(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListSkillGroupConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListTaskAssignRules(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListUsers(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListWarningConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    RegisterNotice(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    RemoveAndGetTaskRules(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    RestartAsrTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ReviewSingleResultById(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SaveConfigDataSet(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SaveReviewResult(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitComplaint(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitCustomizationConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitModelTestTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitPrecisionTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    SubmitQualityCheckTask(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    TestNetwork(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    TestRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateAsrVocab(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateOnPurchaseSuccess(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateRuleForAnt(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateScoreForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateSubScoreForApi(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateTaskAssignRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateUser(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateUserConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UpdateWarningConfig(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadAudioData(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadAudioData4Pre(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadAudioDataWithRules(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadAudioDataWithRules4Pre(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadData(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadDataSync(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadDataWithRules(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadRule(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    UploadRuleForAnt(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ValidateRoleSet(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    VerifyFile(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    VerifySentence(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    GetHitResult(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
    ListHotWordsTasks(query: {
        "RegionId"?: string;
        "JsonStr": string;
    }): Promise<{}>;
}
export default QUALITYCHECK;
