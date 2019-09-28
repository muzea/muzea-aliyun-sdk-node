interface IMM {
    CompareFace(query: {
        "RegionId"?: string;
        "SrcUriA": string;
        "SrcUriB": string;
        "Project": string;
    }): Promise<{}>;
    ConvertOfficeFormat(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "TgtUri": string;
        "Project": string;
        "TgtType"?: string;
        "ExternalID"?: string;
        "ImageSpec"?: string;
        "SrcType"?: string;
        "StartPage"?: number;
        "EndPage"?: number;
        "MaxSheetRow"?: number;
        "MaxSheetCol"?: number;
        "MaxSheetCount"?: number;
        "SheetOnePage"?: boolean;
        "ModelId"?: string;
        "Password"?: string;
    }): Promise<{}>;
    CreateFaceSet(query: {
        "RegionId"?: string;
        "Project": string;
    }): Promise<{}>;
    CreateOfficeConversionTask(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "TgtUri": string;
        "Project": string;
        "TgtType"?: string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "SrcType"?: string;
        "StartPage"?: number;
        "EndPage"?: number;
        "MaxSheetRow"?: number;
        "MaxSheetCol"?: number;
        "MaxSheetCount"?: number;
        "SheetOnePage"?: boolean;
        "ModelId"?: string;
        "Password"?: string;
        "TgtFilePrefix"?: string;
        "TgtFileSuffix"?: string;
        "TgtFilePages"?: string;
        "FitToPagesTall"?: boolean;
        "FitToPagesWide"?: boolean;
        "IdempotentToken"?: string;
    }): Promise<{}>;
    CreatePornBatchDetectJob(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "TgtUri": string;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "ExternalID"?: string;
    }): Promise<{}>;
    CreateTagJob(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "ExternalID"?: string;
    }): Promise<{}>;
    CreateTagSet(query: {
        "RegionId"?: string;
        "Project": string;
    }): Promise<{}>;
    DeleteFaceJob(query: {
        "RegionId"?: string;
        "JobId": string;
        "Project": string;
        "ClearIndexData"?: string;
    }): Promise<{}>;
    DeleteFaceSearchGroup(query: {
        "RegionId"?: string;
        "GroupName": string;
        "Project": string;
    }): Promise<{}>;
    DeleteFaceSearchImageById(query: {
        "RegionId"?: string;
        "GroupName": string;
        "ImageId": string;
        "User": string;
        "SrcUri": string;
        "Project": string;
    }): Promise<{}>;
    DeleteFaceSearchUser(query: {
        "RegionId"?: string;
        "GroupName": string;
        "User": string;
        "Project": string;
    }): Promise<{}>;
    DeleteOfficeConversionTask(query: {
        "RegionId"?: string;
        "TaskId": string;
        "Project": string;
    }): Promise<{}>;
    DeletePhotoProcessTask(query: {
        "RegionId"?: string;
        "TaskId": string;
        "Project": string;
    }): Promise<{}>;
    DeletePornBatchDetectJob(query: {
        "RegionId"?: string;
        "JobId": string;
        "Project": string;
    }): Promise<{}>;
    DeleteProject(query: {
        "RegionId"?: string;
        "Project": string;
    }): Promise<{}>;
    DeleteTagByName(query: {
        "RegionId"?: string;
        "SetId": string;
        "SrcUri": string;
        "TagName": string;
        "Project": string;
    }): Promise<{}>;
    DeleteTagByUrl(query: {
        "RegionId"?: string;
        "SetId": string;
        "SrcUri": string;
        "Project": string;
    }): Promise<{}>;
    DeleteTagJob(query: {
        "RegionId"?: string;
        "Project": string;
        "JobId": string;
        "ClearIndexData"?: string;
    }): Promise<{}>;
    DeleteTagSet(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
        "CheckEmpty"?: string;
        "LazyMode"?: string;
    }): Promise<{}>;
    DescribeRegions(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    DetectClothes(query: {
        "RegionId"?: string;
        "SrcUris": string;
        "Project": string;
    }): Promise<{}>;
    DetectLogo(query: {
        "RegionId"?: string;
        "SrcUris": string;
        "Project": string;
    }): Promise<{}>;
    DetectQRCodes(query: {
        "RegionId"?: string;
        "SrcUris": string;
        "Project": string;
    }): Promise<{}>;
    DetectTag(query: {
        "RegionId"?: string;
        "SrcUris": string;
        "Project": string;
        "ModelId"?: string;
    }): Promise<{}>;
    GetFaceSearchGroup(query: {
        "RegionId"?: string;
        "GroupName": string;
        "Project": string;
    }): Promise<{}>;
    GetFaceSearchImage(query: {
        "RegionId"?: string;
        "ImageId": string;
        "GroupName": string;
        "SrcUri": string;
        "Project": string;
        "User"?: string;
    }): Promise<{}>;
    GetFaceSearchUser(query: {
        "RegionId"?: string;
        "GroupName": string;
        "User": string;
        "Project": string;
    }): Promise<{}>;
    GetOfficeConversionTask(query: {
        "RegionId"?: string;
        "TaskId": string;
        "Project": string;
    }): Promise<{}>;
    GetPhotoProcessTask(query: {
        "RegionId"?: string;
        "TaskId": string;
        "Project": string;
    }): Promise<{}>;
    GetPornBatchDetectJob(query: {
        "RegionId"?: string;
        "JobId": string;
        "Project": string;
    }): Promise<{}>;
    GetProject(query: {
        "RegionId"?: string;
        "Project": string;
    }): Promise<{}>;
    GetTagJob(query: {
        "RegionId"?: string;
        "JobId": string;
        "Project": string;
    }): Promise<{}>;
    GetTagSet(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
    }): Promise<{}>;
    IndexTag(query: {
        "RegionId"?: string;
        "SetId": string;
        "SrcUris": string;
        "Project": string;
        "Force"?: string;
        "ModelId"?: string;
    }): Promise<{}>;
    ListFaceGroups(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
        "Marker"?: number;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListFaceSearchGroupImages(query: {
        "RegionId"?: string;
        "GroupName": string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
        "User"?: string;
    }): Promise<{}>;
    ListFaceSearchGroupUsers(query: {
        "RegionId"?: string;
        "GroupName": string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListFaceSearchGroups(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListOfficeConversionTask(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListPhotoProcessTasks(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListPornBatchDetectJobs(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListProjects(query: {
        "RegionId"?: string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListTagJobs(query: {
        "RegionId"?: string;
        "Marker"?: string;
        "Condition"?: string;
        "Project": string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    ListTagNames(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
    }): Promise<{}>;
    ListTagPhotos(query: {
        "RegionId"?: string;
        "SetId": string;
        "TagName": string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: string;
    }): Promise<{}>;
    ListTagSets(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
    }): Promise<{}>;
    PhotoProcess(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "TgtUri": string;
        "Project": string;
        "Style"?: string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "ExternalID"?: string;
    }): Promise<{}>;
    PutProject(query: {
        "RegionId"?: string;
        "Type": string;
        "Project": string;
        "ServiceRole"?: string;
        "CU"?: number;
        "BillingType"?: string;
    }): Promise<{}>;
    RegistFace(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "GroupName": string;
        "Project": string;
        "User"?: string;
        "IsQualityLimit"?: boolean;
        "ChooseBiggestFace"?: boolean;
        "RegisterCheckLevel"?: string;
    }): Promise<{}>;
    SearchFace(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "GroupName": string;
        "Project": string;
        "ResultNum"?: number;
        "IsThreshold"?: boolean;
        "SearchThresholdLevel"?: string;
    }): Promise<{}>;
    UpdateProject(query: {
        "RegionId"?: string;
        "Project": string;
        "NewCU"?: number;
        "NewServiceRole"?: string;
    }): Promise<{}>;
    CompareImageFaces(query: {
        "RegionId"?: string;
        "SetId"?: string;
        "ImageUriA"?: string;
        "Project": string;
        "ImageUriB"?: string;
        "FaceIdA"?: string;
        "FaceIdB"?: string;
    }): Promise<{}>;
    CreateCADConversionTask(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "TgtUri": string;
        "Project": string;
        "TgtType"?: string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "SrcType"?: string;
        "ZoomFactor"?: number;
        "ZoomLevel"?: number;
        "UnitHeight"?: number;
        "UnitWidth"?: number;
        "BaseRow"?: number;
        "BaseCol"?: number;
        "Thumbnails"?: boolean;
        "ModelId"?: string;
    }): Promise<{}>;
    CreateDocIndexTask(query: {
        "RegionId"?: string;
        "SrcUri": string;
        "Set": string;
        "Project": string;
        "UniqueId"?: string;
        "Name"?: string;
        "ContentType"?: string;
        "CustomKey1"?: string;
        "CustomKey2"?: string;
        "CustomKey3"?: string;
        "CustomKey4"?: string;
        "CustomKey5"?: string;
        "CustomKey6"?: string;
    }): Promise<{}>;
    CreateGroupFacesJob(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
    }): Promise<{}>;
    CreateMergeFaceGroupsJob(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "GroupIdFrom"?: string;
        "GroupIdTo"?: string;
    }): Promise<{}>;
    CreateSet(query: {
        "RegionId"?: string;
        "Project": string;
        "SetId"?: string;
        "SetName"?: string;
    }): Promise<{}>;
    CreateVideoAnalyseTask(query: {
        "RegionId"?: string;
        "VideoUri": string;
        "Project": string;
        "GrabType"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "SaveType"?: boolean;
        "Interval"?: string;
        "TgtUri"?: string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
    }): Promise<{}>;
    CreateVideoCompressTask(query: {
        "RegionId"?: string;
        "VideoUri": string;
        "TargetList": string;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
    }): Promise<{}>;
    DeleteDocIndex(query: {
        "RegionId"?: string;
        "UniqueId": string;
        "Set": string;
        "Project": string;
    }): Promise<{}>;
    DeleteImage(query: {
        "RegionId"?: string;
        "SetId": string;
        "ImageUri": string;
        "Project": string;
    }): Promise<{}>;
    DeleteImageJob(query: {
        "RegionId"?: string;
        "JobType": string;
        "Project": string;
        "JobId"?: string;
    }): Promise<{}>;
    DeleteSet(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
    }): Promise<{}>;
    DeleteVideo(query: {
        "RegionId"?: string;
        "SetId": string;
        "VideoUri": string;
        "Resources"?: boolean;
        "Project": string;
    }): Promise<{}>;
    DeleteVideoTask(query: {
        "RegionId"?: string;
        "TaskType": string;
        "Project": string;
        "TaskId"?: string;
    }): Promise<{}>;
    DetectImageBodies(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "Project": string;
    }): Promise<{}>;
    DetectImageCelebrity(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "Library"?: string;
        "Project": string;
        "RealUid"?: string;
    }): Promise<{}>;
    DetectImageFaces(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "Project": string;
        "RealUid"?: string;
    }): Promise<{}>;
    DetectImageLogos(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "Project": string;
    }): Promise<{}>;
    DetectImageTags(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "Project": string;
        "RealUid"?: string;
    }): Promise<{}>;
    DetectImageTexts(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "Project": string;
    }): Promise<{}>;
    FindImages(query: {
        "RegionId"?: string;
        "SetId": string;
        "ImageSizeRange"?: string;
        "ExternalId"?: string;
        "Project": string;
        "ImageTimeRange"?: string;
        "CreateTimeRange"?: string;
        "ModifyTimeRange"?: string;
        "SourceType"?: string;
        "SourceUriPrefix"?: string;
        "RemarksAPrefix"?: string;
        "RemarksBPrefix"?: string;
        "TagNames"?: string;
        "OCRContentsMatch"?: string;
        "AgeRange"?: string;
        "Gender"?: string;
        "Emotion"?: string;
        "OrderBy"?: string;
        "Order"?: string;
        "Marker"?: string;
        "LocationBoundary"?: string;
        "RemarksCPrefix"?: string;
        "RemarksDPrefix"?: string;
        "GroupId"?: string;
        "Limit"?: number;
        "FacesModifyTimeRange"?: string;
        "TagsModifyTimeRange"?: string;
        "AddressLineContentsMatch"?: string;
    }): Promise<{}>;
    FindImagesByTagNames(query: {
        "RegionId"?: string;
        "SetId": string;
        "TagNames": string;
        "Project": string;
        "Marker"?: string;
        "Limit"?: number;
    }): Promise<{}>;
    FindSimilarFaces(query: {
        "RegionId"?: string;
        "SetId": string;
        "ImageUri"?: string;
        "Project": string;
        "FaceId"?: string;
        "Limit"?: number;
        "MinSimilarity"?: number;
        "ResponseFormat"?: string;
    }): Promise<{}>;
    GetDocIndex(query: {
        "RegionId"?: string;
        "UniqueId": string;
        "Set": string;
        "Project": string;
    }): Promise<{}>;
    GetDocIndexTask(query: {
        "RegionId"?: string;
        "TaskId": string;
        "Project": string;
    }): Promise<{}>;
    GetImage(query: {
        "RegionId"?: string;
        "SetId": string;
        "ImageUri": string;
        "Project": string;
    }): Promise<{}>;
    GetImageJob(query: {
        "RegionId"?: string;
        "JobType": string;
        "Project": string;
        "JobId"?: string;
    }): Promise<{}>;
    GetSet(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
    }): Promise<{}>;
    GetVideo(query: {
        "RegionId"?: string;
        "SetId": string;
        "VideoUri": string;
        "Project": string;
    }): Promise<{}>;
    GetVideoTask(query: {
        "RegionId"?: string;
        "TaskType": string;
        "Project": string;
        "TaskId"?: string;
    }): Promise<{}>;
    IndexImage(query: {
        "RegionId"?: string;
        "SetId": string;
        "ImageUri": string;
        "Project": string;
        "RemarksA"?: string;
        "RemarksB"?: string;
        "SourceType"?: string;
        "SourceUri"?: string;
        "SourcePosition"?: string;
        "RemarksC"?: string;
        "RemarksD"?: string;
        "ExternalId"?: string;
        "RealUid"?: string;
        "NotifyEndpoint"?: string;
        "NotifyTopicName"?: string;
    }): Promise<{}>;
    IndexVideo(query: {
        "RegionId"?: string;
        "SetId": string;
        "VideoUri": string;
        "RemarksC"?: string;
        "Project": string;
        "RemarksA"?: string;
        "RemarksB"?: string;
        "GrabType"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "SaveType"?: boolean;
        "Interval"?: string;
        "TgtUri"?: string;
        "RemarksD"?: string;
        "ExternalId"?: string;
    }): Promise<{}>;
    ListImageJobs(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
        "JobType"?: string;
    }): Promise<{}>;
    ListImages(query: {
        "RegionId"?: string;
        "SetId": string;
        "CreateTimeStart"?: string;
        "Project": string;
        "Marker"?: string;
        "Limit"?: number;
    }): Promise<{}>;
    ListProjectAPIs(query: {
        "RegionId"?: string;
        "Project": string;
    }): Promise<{}>;
    ListSetTags(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
    }): Promise<{}>;
    ListSets(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
    }): Promise<{}>;
    ListVideoAudios(query: {
        "RegionId"?: string;
        "SetId": string;
        "VideoUri": string;
        "Project": string;
        "Marker"?: string;
    }): Promise<{}>;
    ListVideoFrames(query: {
        "RegionId"?: string;
        "SetId": string;
        "VideoUri": string;
        "Project": string;
        "Marker"?: string;
    }): Promise<{}>;
    ListVideoTasks(query: {
        "RegionId"?: string;
        "Project": string;
        "Marker"?: string;
        "MaxKeys"?: number;
        "TaskType"?: string;
    }): Promise<{}>;
    ListVideos(query: {
        "RegionId"?: string;
        "SetId": string;
        "CreateTimeStart"?: string;
        "Project": string;
        "Marker"?: string;
    }): Promise<{}>;
    SearchDocIndex(query: {
        "RegionId"?: string;
        "Set": string;
        "Content"?: string;
        "Project": string;
        "Name"?: string;
        "ContentType"?: string;
        "ModifiedTimeStart"?: number;
        "ModifiedTimeEnd"?: number;
        "SizeLimitStart"?: number;
        "SizeLimitEnd"?: number;
        "PageNumLimitStart"?: number;
        "PageNumLimitEnd"?: number;
        "CustomKey1"?: string;
        "CustomKey2"?: string;
        "CustomKey3"?: string;
        "CustomKey4"?: string;
        "CustomKey5"?: string;
        "CustomKey6"?: string;
        "Offset"?: number;
        "Limit"?: number;
    }): Promise<{}>;
    UpdateDocIndexMeta(query: {
        "RegionId"?: string;
        "UniqueId": string;
        "Set": string;
        "Project": string;
        "Name"?: string;
        "CustomKey1"?: string;
        "CustomKey2"?: string;
        "CustomKey3"?: string;
        "CustomKey4"?: string;
        "CustomKey5"?: string;
        "CustomKey6"?: string;
    }): Promise<{}>;
    UpdateFaceGroup(query: {
        "RegionId"?: string;
        "SetId": string;
        "GroupId": string;
        "GroupName"?: string;
        "Project": string;
        "GroupCoverFaceId"?: string;
    }): Promise<{}>;
    UpdateImage(query: {
        "RegionId"?: string;
        "SetId": string;
        "ImageUri": string;
        "Project": string;
        "RemarksA"?: string;
        "RemarksB"?: string;
        "SourceType"?: string;
        "SourceUri"?: string;
        "SourcePosition"?: string;
        "RemarksC"?: string;
        "RemarksD"?: string;
        "ExternalId"?: string;
    }): Promise<{}>;
    UpdateSet(query: {
        "RegionId"?: string;
        "SetId": string;
        "Project": string;
        "SetName"?: string;
    }): Promise<{}>;
    GetMediaMeta(query: {
        "RegionId"?: string;
        "MediaUri": string;
        "Project": string;
    }): Promise<{}>;
    CreateMediaComplexTask(query: {
        "RegionId"?: string;
        "Parameters": string;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
    }): Promise<{}>;
    DecodeBlindWatermark(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "OriginalImageUri": string;
        "TargetUri"?: string;
        "WatermarkType"?: string;
        "ImageQuality"?: number;
        "Project": string;
    }): Promise<{}>;
    EncodeBlindWatermark(query: {
        "RegionId"?: string;
        "ImageUri": string;
        "TargetUri": string;
        "WatermarkUri"?: string;
        "Project": string;
        "ImageQuality"?: string;
        "Content"?: string;
        "TargetImageType"?: string;
        "WatermarkType"?: string;
    }): Promise<{}>;
    CreateVideoAbstractTask(query: {
        "RegionId"?: string;
        "VideoUri": string;
        "AbstractLength": number;
        "Project": string;
        "NotifyTopicName"?: string;
        "NotifyEndpoint"?: string;
        "TargetVideoUri"?: string;
        "TargetClipsUri"?: string;
    }): Promise<{}>;
}
export default IMM;
