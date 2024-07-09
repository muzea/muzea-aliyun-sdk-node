export interface RecognizeAirItineraryResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"internationalFlightSign": "国内(D)", 		"serialNumber": "50424498176", 		"passengerName": "闻一鸣", 		"idCardNumber": "410678199112139856", 		"endorsement": "Q/不得签转/变更退票收费", 		"fare": "1410.00", 		"caacDevelopmentFund": "50.00", 		"fuelSurcharge": "0.00", 		"totalAmount": "1460.00", 		"ticketNumber": "7813575259334", 		"validationCode": "9817", 		"promptMessage": "西安始发国际在T3国内在13", 		"insurance": "0.00", 		"agentCode": "SIA25608336893", 		"issueCompany": "成都携程旅行社有限公司北京分社", 		"issueDate": "2019-02-28", 		"pnrCode": "JNS20Q", 		"otherTaxes": "0.00", 		"flights": [{ 			"departureStation": "西安咸阳", 			"arrivalStation": "长春", 			"carrier": "东航", 			"flightNumber": "MU2271", 			"cabinClass": "M", 			"flightDate": "2019-02-27", 			"flightTime": "15:05", 			"seatClass": "M", 			"validFromDate": "", 			"validToDate": "", 			"freeBaggageAllowance": "20K" 		}] 	}, 	"height": 785, 	"orgHeight": 785, 	"orgWidth": 1833, 	"prism_keyValueInfo": [{ 		"key": "internationalFlightSign", 		"keyProb": 100, 		"value": "国内(D)", 		"valueProb": 100 	}, { 		"key": "serialNumber", 		"keyProb": 100, 		"value": "50424498176", 		"valuePos": [{ 			"x": 1676, 			"y": 113 		}, { 			"x": 1676, 			"y": 144 		}, { 			"x": 1371, 			"y": 144 		}, { 			"x": 1371, 			"y": 112 		}], 		"valueProb": 100 	}, { 		"key": "passengerName", 		"keyProb": 98, 		"value": "闻一鸣", 		"valuePos": [{ 			"x": 317, 			"y": 167 		}, { 			"x": 317, 			"y": 206 		}, { 			"x": 219, 			"y": 206 		}, { 			"x": 219, 			"y": 167 		}], 		"valueProb": 98 	}, { 		"key": "idCardNumber", 		"keyProb": 100, 		"value": "410678199112139856", 		"valuePos": [{ 			"x": 878, 			"y": 170 		}, { 			"x": 878, 			"y": 200 		}, { 			"x": 519, 			"y": 202 		}, { 			"x": 518, 			"y": 171 		}], 		"valueProb": 100 	}, { 		"key": "endorsement", 		"keyProb": 92, 		"value": "Q/不得签转/变更退票收费", 		"valuePos": [{ 			"x": 1581, 			"y": 161 		}, { 			"x": 1582, 			"y": 216 		}, { 			"x": 1114, 			"y": 218 		}, { 			"x": 1114, 			"y": 164 		}], 		"valueProb": 92 	}, { 		"key": "fare", 		"keyProb": 100, 		"value": "1410.00", 		"valuePos": [{ 			"x": 526, 			"y": 572 		}, { 			"x": 527, 			"y": 545 		}, { 			"x": 712, 			"y": 547 		}, { 			"x": 712, 			"y": 575 		}], 		"valueProb": 100 	}, { 		"key": "caacDevelopmentFund", 		"keyProb": 100, 		"value": "50.00", 		"valuePos": [{ 			"x": 788, 			"y": 576 		}, { 			"x": 789, 			"y": 548 		}, { 			"x": 935, 			"y": 550 		}, { 			"x": 935, 			"y": 578 		}], 		"valueProb": 100 	}, { 		"key": "fuelSurcharge", 		"keyProb": 100, 		"value": "0.00", 		"valuePos": [{ 			"x": 1113, 			"y": 551 		}, { 			"x": 1113, 			"y": 578 		}, { 			"x": 989, 			"y": 580 		}, { 			"x": 988, 			"y": 553 		}], 		"valueProb": 100 	}, { 		"key": "totalAmount", 		"keyProb": 100, 		"value": "1460.00", 		"valuePos": [{ 			"x": 1555, 			"y": 558 		}, { 			"x": 1555, 			"y": 583 		}, { 			"x": 1415, 			"y": 583 		}, { 			"x": 1415, 			"y": 558 		}], 		"valueProb": 100 	}, { 		"key": "ticketNumber", 		"keyProb": 98, 		"value": "7813575259334", 		"valuePos": [{ 			"x": 263, 			"y": 596 		}, { 			"x": 263, 			"y": 568 		}, { 			"x": 527, 			"y": 573 		}, { 			"x": 526, 			"y": 601 		}], 		"valueProb": 98 	}, { 		"key": "validationCode", 		"keyProb": 100, 		"value": "9817", 		"valuePos": [{ 			"x": 667, 			"y": 602 		}, { 			"x": 668, 			"y": 577 		}, { 			"x": 747, 			"y": 579 		}, { 			"x": 747, 			"y": 603 		}], 		"valueProb": 100 	}, { 		"key": "promptMessage", 		"keyProb": 99, 		"value": "西安始发国际在T3国内在13", 		"valuePos": [{ 			"x": 994, 			"y": 641 		}, { 			"x": 994, 			"y": 592 		}, { 			"x": 1478, 			"y": 601 		}, { 			"x": 1477, 			"y": 649 		}], 		"valueProb": 99 	}, { 		"key": "insurance", 		"keyProb": 100, 		"value": "0.00", 		"valuePos": [{ 			"x": 1572, 			"y": 614 		}, { 			"x": 1573, 			"y": 590 		}, { 			"x": 1635, 			"y": 591 		}, { 			"x": 1635, 			"y": 616 		}], 		"valueProb": 100 	}, { 		"key": "agentCode", 		"keyProb": 100, 		"value": "SIA25608336893", 		"valuePos": [{ 			"x": 263, 			"y": 685 		}, { 			"x": 264, 			"y": 631 		}, { 			"x": 422, 			"y": 633 		}, { 			"x": 421, 			"y": 687 		}], 		"valueProb": 100 	}, { 		"key": "issueCompany", 		"keyProb": 100, 		"value": "成都携程旅行社有限公司北京分社", 		"valuePos": [{ 			"x": 671, 			"y": 700 		}, { 			"x": 671, 			"y": 650 		}, { 			"x": 1271, 			"y": 661 		}, { 			"x": 1270, 			"y": 710 		}], 		"valueProb": 100 	}, { 		"key": "issueDate", 		"keyProb": 100, 		"value": "2019-02-28", 		"valuePos": [{ 			"x": 1634, 			"y": 648 		}, { 			"x": 1634, 			"y": 674 		}, { 			"x": 1430, 			"y": 677 		}, { 			"x": 1429, 			"y": 650 		}], 		"valueProb": 100 	}, { 		"key": "pnrCode", 		"keyProb": 100, 		"value": "JNS20Q", 		"valuePos": [{ 			"x": 335, 			"y": 229 		}, { 			"x": 335, 			"y": 258 		}, { 			"x": 211, 			"y": 259 		}, { 			"x": 210, 			"y": 231 		}], 		"valueProb": 100 	}, { 		"key": "otherTaxes", 		"keyProb": 100, 		"value": "0.00", 		"valueProb": 100 	}, { 		"key": "flights", 		"keyProb": 100, 		"value": "[{\"departureStation\":\"西安咸阳\",\"arrivalStation\":\"长春\",\"carrier\":\"东航\",\"flightNumber\":\"MU2271\",\"cabinClass\":\"M\",\"flightDate\":\"2019-02-27\",\"flightTime\":\"15:05\",\"seatClass\":\"M\",\"validFromDate\":\"\",\"validToDate\":\"\",\"freeBaggageAllowance\":\"20K\"}]", 		"valueProb": 100 	}], 	"width": 1833 }`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
