export interface RecognizeMixedInvoicesResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"count": 2, 	"height": 2341, 	"orgHeight": 2341, 	"orgWidth": 1654, 	"subMsgs": [{ 		"index": 1, 		"op": "invoice", 		"result": { 			"data": { 				"invoiceCode": "044031800111", 				"invoiceNumber": "35080026", 				"printedInvoiceCode": "", 				"printedInvoiceNumber": "", 				"invoiceDate": "2018年11月05日", 				"machineCode": "499099825015", 				"checkCode": "10039568112588495269", 				"purchaserName": "深圳市中兴新云服务有限公司", 				"purchaserTaxNumber": "91440300MA5EXWHW6F", 				"purchaserContactInfo": "深市海作一1号A室市有限12", 				"purchaserBankAccountInfo": "中信银行深圳市民中心支行8110301013100278455", 				"passwordArea": "0394+-*​/4+640<-<1>>>59861>57 869-1>9/46544754742426235-8- 42<12-+6<3<30*927-64--7-+5-- 7++713>+<201-3>91951+4412>47", 				"invoiceAmountPreTax": "18.87", 				"invoiceTax": "1.13", 				"totalAmountInWords": "贰拾元整", 				"totalAmount": "20.00", 				"sellerName": "顺丰速运有限公司", 				"sellerTaxNumber": "914403000743520254", 				"sellerContactInfo": "深圳市宝安区国际机场航站四路1111号0755-36395027", 				"sellerBankAccountInfo": "中国工商银行深圳车公庙支行4000025319200395130", 				"recipient": "廖柳英", 				"reviewer": "陈虎", 				"drawer": "：张德胜", 				"remarks": "", 				"title": "深圳增值税电子普通发票", 				"formType": "", 				"invoiceType": "电子普通发票", 				"specialTag": "", 				"invoiceDetails": [{ 					"itemName": "*物流辅助服务*收派服务费", 					"specification": "", 					"unit": "次", 					"quantity": "1.000000", 					"unitPrice": "18.870000", 					"amount": "18.87", 					"taxRate": "6%", 					"tax": "1.13" 				}] 			}, 			"ftype": 0, 			"height": 720, 			"orgHeight": 720, 			"orgWidth": 1067, 			"prism_keyValueInfo": [{ 				"key": "invoiceCode", 				"keyProb": 99, 				"value": "044031800111", 				"valuePos": [{ 					"x": 861, 					"y": 50 				}, { 					"x": 971, 					"y": 50 				}, { 					"x": 971, 					"y": 67 				}, { 					"x": 861, 					"y": 67 				}], 				"valueProb": 99 			}, { 				"key": "invoiceNumber", 				"keyProb": 100, 				"value": "35080026", 				"valuePos": [{ 					"x": 862, 					"y": 79 				}, { 					"x": 938, 					"y": 78 				}, { 					"x": 938, 					"y": 93 				}, { 					"x": 863, 					"y": 95 				}], 				"valueProb": 100 			}, { 				"key": "printedInvoiceCode", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "printedInvoiceNumber", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "invoiceDate", 				"keyProb": 100, 				"value": "2018年11月05日", 				"valuePos": [{ 					"x": 861, 					"y": 107 				}, { 					"x": 964, 					"y": 106 				}, { 					"x": 964, 					"y": 122 				}, { 					"x": 862, 					"y": 124 				}], 				"valueProb": 100 			}, { 				"key": "machineCode", 				"keyProb": 100, 				"value": "499099825015", 				"valuePos": [{ 					"x": 208, 					"y": 138 				}, { 					"x": 208, 					"y": 154 				}, { 					"x": 97, 					"y": 154 				}, { 					"x": 97, 					"y": 138 				}], 				"valueProb": 100 			}, { 				"key": "checkCode", 				"keyProb": 100, 				"value": "10039568112588495269", 				"valuePos": [{ 					"x": 865, 					"y": 134 				}, { 					"x": 1053, 					"y": 133 				}, { 					"x": 1053, 					"y": 149 				}, { 					"x": 866, 					"y": 151 				}], 				"valueProb": 100 			}, { 				"key": "purchaserName", 				"keyProb": 100, 				"value": "深圳市中兴新云服务有限公司", 				"valuePos": [{ 					"x": 179, 					"y": 171 				}, { 					"x": 376, 					"y": 170 				}, { 					"x": 376, 					"y": 186 				}, { 					"x": 180, 					"y": 188 				}], 				"valueProb": 100 			}, { 				"key": "purchaserTaxNumber", 				"keyProb": 100, 				"value": "91440300MA5EXWHW6F", 				"valuePos": [{ 					"x": 179, 					"y": 197 				}, { 					"x": 367, 					"y": 195 				}, { 					"x": 367, 					"y": 212 				}, { 					"x": 180, 					"y": 213 				}], 				"valueProb": 100 			}, { 				"key": "purchaserContactInfo", 				"keyProb": 99, 				"value": "深市海作一1号A室市有限12", 				"valuePos": [{ 					"x": 178, 					"y": 226 				}, { 					"x": 550, 					"y": 223 				}, { 					"x": 550, 					"y": 236 				}, { 					"x": 178, 					"y": 240 				}], 				"valueProb": 99 			}, { 				"key": "purchaserBankAccountInfo", 				"keyProb": 100, 				"value": "中信银行深圳市民中心支行8110301013100278455", 				"valuePos": [{ 					"x": 180, 					"y": 251 				}, { 					"x": 491, 					"y": 250 				}, { 					"x": 491, 					"y": 266 				}, { 					"x": 181, 					"y": 268 				}], 				"valueProb": 100 			}, { 				"key": "passwordArea", 				"keyProb": 100, 				"value": "0394+-*​/4+640<-<1>>>59861>57 869-1>9/46544754742426235-8- 42<12-+6<3<30*927-64--7-+5-- 7++713>+<201-3>91951+4412>47", 				"valuePos": [{ 					"x": 704, 					"y": 167 				}, { 					"x": 961, 					"y": 167 				}, { 					"x": 961, 					"y": 255 				}, { 					"x": 704, 					"y": 255 				}], 				"valueProb": 100 			}, { 				"key": "invoiceAmountPreTax", 				"keyProb": 100, 				"value": "18.87", 				"valuePos": [{ 					"x": 786, 					"y": 472 				}, { 					"x": 847, 					"y": 471 				}, { 					"x": 847, 					"y": 485 				}, { 					"x": 787, 					"y": 487 				}], 				"valueProb": 100 			}, { 				"key": "invoiceTax", 				"keyProb": 100, 				"value": "1.13", 				"valuePos": [{ 					"x": 1052, 					"y": 469 				}, { 					"x": 1052, 					"y": 486 				}, { 					"x": 999, 					"y": 486 				}, { 					"x": 999, 					"y": 469 				}], 				"valueProb": 100 			}, { 				"key": "totalAmountInWords", 				"keyProb": 100, 				"value": "贰拾元整", 				"valuePos": [{ 					"x": 364, 					"y": 518 				}, { 					"x": 364, 					"y": 536 				}, { 					"x": 304, 					"y": 536 				}, { 					"x": 304, 					"y": 518 				}], 				"valueProb": 100 			}, { 				"key": "totalAmount", 				"keyProb": 100, 				"value": "20.00", 				"valuePos": [{ 					"x": 1049, 					"y": 512 				}, { 					"x": 1049, 					"y": 530 				}, { 					"x": 987, 					"y": 530 				}, { 					"x": 987, 					"y": 512 				}], 				"valueProb": 100 			}, { 				"key": "sellerName", 				"keyProb": 100, 				"value": "顺丰速运有限公司", 				"valuePos": [{ 					"x": 183, 					"y": 553 				}, { 					"x": 304, 					"y": 552 				}, { 					"x": 305, 					"y": 568 				}, { 					"x": 183, 					"y": 570 				}], 				"valueProb": 100 			}, { 				"key": "sellerTaxNumber", 				"keyProb": 100, 				"value": "914403000743520254", 				"valuePos": [{ 					"x": 184, 					"y": 578 				}, { 					"x": 345, 					"y": 576 				}, { 					"x": 345, 					"y": 591 				}, { 					"x": 185, 					"y": 594 				}], 				"valueProb": 100 			}, { 				"key": "sellerContactInfo", 				"keyProb": 100, 				"value": "深圳市宝安区国际机场航站四路1111号0755-36395027", 				"valuePos": [{ 					"x": 185, 					"y": 604 				}, { 					"x": 526, 					"y": 600 				}, { 					"x": 527, 					"y": 619 				}, { 					"x": 185, 					"y": 622 				}], 				"valueProb": 100 			}, { 				"key": "sellerBankAccountInfo", 				"keyProb": 100, 				"value": "中国工商银行深圳车公庙支行4000025319200395130", 				"valuePos": [{ 					"x": 187, 					"y": 631 				}, { 					"x": 509, 					"y": 628 				}, { 					"x": 509, 					"y": 646 				}, { 					"x": 187, 					"y": 649 				}], 				"valueProb": 100 			}, { 				"key": "recipient", 				"keyProb": 100, 				"value": "廖柳英", 				"valuePos": [{ 					"x": 108, 					"y": 663 				}, { 					"x": 158, 					"y": 661 				}, { 					"x": 159, 					"y": 680 				}, { 					"x": 108, 					"y": 681 				}], 				"valueProb": 100 			}, { 				"key": "reviewer", 				"keyProb": 100, 				"value": "陈虎", 				"valuePos": [{ 					"x": 398, 					"y": 661 				}, { 					"x": 398, 					"y": 678 				}, { 					"x": 361, 					"y": 678 				}, { 					"x": 361, 					"y": 661 				}], 				"valueProb": 100 			}, { 				"key": "drawer", 				"keyProb": 100, 				"value": "：张德胜", 				"valuePos": [{ 					"x": 689, 					"y": 658 				}, { 					"x": 689, 					"y": 677 				}, { 					"x": 638, 					"y": 677 				}, { 					"x": 638, 					"y": 658 				}], 				"valueProb": 100 			}, { 				"key": "remarks", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "title", 				"keyProb": 100, 				"value": "深圳增值税电子普通发票", 				"valuePos": [{ 					"x": 325, 					"y": 28 				}, { 					"x": 746, 					"y": 22 				}, { 					"x": 747, 					"y": 61 				}, { 					"x": 325, 					"y": 66 				}], 				"valueProb": 100 			}, { 				"key": "formType", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "invoiceType", 				"keyProb": 100, 				"value": "电子普通发票", 				"valuePos": [{ 					"x": 325, 					"y": 28 				}, { 					"x": 746, 					"y": 22 				}, { 					"x": 747, 					"y": 61 				}, { 					"x": 325, 					"y": 66 				}], 				"valueProb": 100 			}, { 				"key": "specialTag", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "invoiceDetails", 				"keyProb": 100, 				"value": "[{\"itemName\":\"*物流辅助服务*收派服务费\",\"specification\":\"\",\"unit\":\"次\",\"quantity\":\"1.000000\",\"unitPrice\":\"18.870000\",\"amount\":\"18.87\",\"taxRate\":\"6%\",\"tax\":\"1.13\"}]", 				"valueProb": 100 			}], 			"sliceRect": { 				"x0": 280, 				"y0": 950, 				"x1": 1344, 				"y1": 952, 				"x2": 1346, 				"y2": 1669, 				"x3": 280, 				"y3": 1665 			}, 			"width": 1067 		}, 		"sliceRect": { 			"x0": 280, 			"y0": 950, 			"x1": 1344, 			"y1": 952, 			"x2": 1346, 			"y2": 1669, 			"x3": 280, 			"y3": 1665 		}, 		"type": "增值税发票" 	}, { 		"index": 2, 		"op": "invoice", 		"result": { 			"data": { 				"invoiceCode": "033001800211", 				"invoiceNumber": "34111823", 				"printedInvoiceCode": "", 				"printedInvoiceNumber": "", 				"invoiceDate": "2018年11月05日", 				"machineCode": "499099843758", 				"checkCode": "06975265980776194342", 				"purchaserName": "深圳市中兴新云服务有限公司", 				"purchaserTaxNumber": "91440300MA5EXWHW6F", 				"purchaserContactInfo": "深圳市麻海洋港合作区前湾一路1号A林2对室(入非州市前商务秘书有限公号：15525KM", 				"purchaserBankAccountInfo": "中信银行深圳市民中心支行8110301013100278455", 				"passwordArea": "03+*2349>010+9*+571>36>104*5 3558*9684/7*<9<20983737<4<+3 -9850/+5+1/>230+*53+1><067-0 1><348954201-->319--28424675", 				"invoiceAmountPreTax": "22.64", 				"invoiceTax": "1.36", 				"totalAmountInWords": "贰拾肆元整", 				"totalAmount": "24.00", 				"sellerName": "绍兴顺丰速运有限公司", 				"sellerTaxNumber": "91330600670285279B", 				"sellerContactInfo": "绍兴市越东南路328号物流中心A区0575-88900058", 				"sellerBankAccountInfo": "工行绍兴市城东新区支行1211018129200020107", 				"recipient": "孙琳", 				"reviewer": "叶丹丹", 				"drawer": "陈超群", 				"remarks": "", 				"title": "浙江增值税电子普通发票", 				"formType": "", 				"invoiceType": "电子普通发票", 				"specialTag": "", 				"invoiceDetails": [{ 					"itemName": "“物流辅助服务*收派服务费", 					"specification": "", 					"unit": "次", 					"quantity": "1.000000", 					"unitPrice": "22.640000", 					"amount": "22.64", 					"taxRate": "6%", 					"tax": "1.36" 				}] 			}, 			"ftype": 0, 			"height": 685, 			"orgHeight": 685, 			"orgWidth": 1067, 			"prism_keyValueInfo": [{ 				"key": "invoiceCode", 				"keyProb": 98, 				"value": "033001800211", 				"valuePos": [{ 					"x": 967, 					"y": 28 				}, { 					"x": 967, 					"y": 44 				}, { 					"x": 859, 					"y": 43 				}, { 					"x": 859, 					"y": 27 				}], 				"valueProb": 98 			}, { 				"key": "invoiceNumber", 				"keyProb": 100, 				"value": "34111823", 				"valuePos": [{ 					"x": 934, 					"y": 56 				}, { 					"x": 934, 					"y": 72 				}, { 					"x": 859, 					"y": 72 				}, { 					"x": 859, 					"y": 56 				}], 				"valueProb": 100 			}, { 				"key": "printedInvoiceCode", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "printedInvoiceNumber", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "invoiceDate", 				"keyProb": 100, 				"value": "2018年11月05日", 				"valuePos": [{ 					"x": 961, 					"y": 84 				}, { 					"x": 961, 					"y": 101 				}, { 					"x": 859, 					"y": 101 				}, { 					"x": 859, 					"y": 84 				}], 				"valueProb": 100 			}, { 				"key": "machineCode", 				"keyProb": 100, 				"value": "499099843758", 				"valuePos": [{ 					"x": 91, 					"y": 115 				}, { 					"x": 202, 					"y": 114 				}, { 					"x": 202, 					"y": 129 				}, { 					"x": 92, 					"y": 131 				}], 				"valueProb": 100 			}, { 				"key": "checkCode", 				"keyProb": 100, 				"value": "06975265980776194342", 				"valuePos": [{ 					"x": 1051, 					"y": 111 				}, { 					"x": 1051, 					"y": 128 				}, { 					"x": 861, 					"y": 127 				}, { 					"x": 861, 					"y": 110 				}], 				"valueProb": 100 			}, { 				"key": "purchaserName", 				"keyProb": 100, 				"value": "深圳市中兴新云服务有限公司", 				"valuePos": [{ 					"x": 176, 					"y": 147 				}, { 					"x": 361, 					"y": 146 				}, { 					"x": 361, 					"y": 162 				}, { 					"x": 176, 					"y": 164 				}], 				"valueProb": 100 			}, { 				"key": "purchaserTaxNumber", 				"keyProb": 100, 				"value": "91440300MA5EXWHW6F", 				"valuePos": [{ 					"x": 176, 					"y": 173 				}, { 					"x": 365, 					"y": 172 				}, { 					"x": 365, 					"y": 188 				}, { 					"x": 177, 					"y": 190 				}], 				"valueProb": 100 			}, { 				"key": "purchaserContactInfo", 				"keyProb": 76, 				"value": "深圳市麻海洋港合作区前湾一路1号A林2对室(入非州市前商务秘书有限公号：15525KM", 				"valuePos": [{ 					"x": 177, 					"y": 202 				}, { 					"x": 541, 					"y": 201 				}, { 					"x": 542, 					"y": 214 				}, { 					"x": 178, 					"y": 216 				}], 				"valueProb": 76 			}, { 				"key": "purchaserBankAccountInfo", 				"keyProb": 100, 				"value": "中信银行深圳市民中心支行8110301013100278455", 				"valuePos": [{ 					"x": 178, 					"y": 228 				}, { 					"x": 490, 					"y": 226 				}, { 					"x": 490, 					"y": 242 				}, { 					"x": 179, 					"y": 245 				}], 				"valueProb": 100 			}, { 				"key": "passwordArea", 				"keyProb": 100, 				"value": "03+*2349>010+9*+571>36>104*5 3558*9684/7*<9<20983737<4<+3 -9850/+5+1/>230+*53+1><067-0 1><348954201-->319--28424675", 				"valuePos": [{ 					"x": 700, 					"y": 143 				}, { 					"x": 957, 					"y": 143 				}, { 					"x": 957, 					"y": 234 				}, { 					"x": 700, 					"y": 234 				}], 				"valueProb": 100 			}, { 				"key": "invoiceAmountPreTax", 				"keyProb": 100, 				"value": "22.64", 				"valuePos": [{ 					"x": 843, 					"y": 448 				}, { 					"x": 843, 					"y": 465 				}, { 					"x": 783, 					"y": 465 				}, { 					"x": 783, 					"y": 448 				}], 				"valueProb": 100 			}, { 				"key": "invoiceTax", 				"keyProb": 100, 				"value": "1.36", 				"valuePos": [{ 					"x": 993, 					"y": 464 				}, { 					"x": 994, 					"y": 446 				}, { 					"x": 1047, 					"y": 448 				}, { 					"x": 1047, 					"y": 465 				}], 				"valueProb": 100 			}, { 				"key": "totalAmountInWords", 				"keyProb": 100, 				"value": "贰拾肆元整", 				"valuePos": [{ 					"x": 375, 					"y": 495 				}, { 					"x": 375, 					"y": 513 				}, { 					"x": 301, 					"y": 513 				}, { 					"x": 301, 					"y": 495 				}], 				"valueProb": 100 			}, { 				"key": "totalAmount", 				"keyProb": 100, 				"value": "24.00", 				"valuePos": [{ 					"x": 1043, 					"y": 491 				}, { 					"x": 1043, 					"y": 507 				}, { 					"x": 983, 					"y": 507 				}, { 					"x": 983, 					"y": 491 				}], 				"valueProb": 100 			}, { 				"key": "sellerName", 				"keyProb": 100, 				"value": "绍兴顺丰速运有限公司", 				"valuePos": [{ 					"x": 331, 					"y": 528 				}, { 					"x": 331, 					"y": 545 				}, { 					"x": 180, 					"y": 545 				}, { 					"x": 180, 					"y": 528 				}], 				"valueProb": 100 			}, { 				"key": "sellerTaxNumber", 				"keyProb": 100, 				"value": "91330600670285279B", 				"valuePos": [{ 					"x": 178, 					"y": 553 				}, { 					"x": 342, 					"y": 552 				}, { 					"x": 342, 					"y": 568 				}, { 					"x": 178, 					"y": 570 				}], 				"valueProb": 100 			}, { 				"key": "sellerContactInfo", 				"keyProb": 100, 				"value": "绍兴市越东南路328号物流中心A区0575-88900058", 				"valuePos": [{ 					"x": 180, 					"y": 581 				}, { 					"x": 495, 					"y": 579 				}, { 					"x": 495, 					"y": 595 				}, { 					"x": 181, 					"y": 598 				}], 				"valueProb": 100 			}, { 				"key": "sellerBankAccountInfo", 				"keyProb": 100, 				"value": "工行绍兴市城东新区支行1211018129200020107", 				"valuePos": [{ 					"x": 479, 					"y": 606 				}, { 					"x": 479, 					"y": 625 				}, { 					"x": 181, 					"y": 625 				}, { 					"x": 181, 					"y": 606 				}], 				"valueProb": 100 			}, { 				"key": "recipient", 				"keyProb": 100, 				"value": "孙琳", 				"valuePos": [{ 					"x": 136, 					"y": 638 				}, { 					"x": 136, 					"y": 655 				}, { 					"x": 102, 					"y": 655 				}, { 					"x": 102, 					"y": 638 				}], 				"valueProb": 100 			}, { 				"key": "reviewer", 				"keyProb": 100, 				"value": "叶丹丹", 				"valuePos": [{ 					"x": 405, 					"y": 637 				}, { 					"x": 405, 					"y": 655 				}, { 					"x": 357, 					"y": 655 				}, { 					"x": 357, 					"y": 637 				}], 				"valueProb": 100 			}, { 				"key": "drawer", 				"keyProb": 100, 				"value": "陈超群", 				"valuePos": [{ 					"x": 633, 					"y": 635 				}, { 					"x": 680, 					"y": 635 				}, { 					"x": 680, 					"y": 652 				}, { 					"x": 633, 					"y": 652 				}], 				"valueProb": 100 			}, { 				"key": "remarks", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "title", 				"keyProb": 100, 				"value": "浙江增值税电子普通发票", 				"valuePos": [{ 					"x": 746, 					"y": 3 				}, { 					"x": 746, 					"y": 40 				}, { 					"x": 325, 					"y": 42 				}, { 					"x": 324, 					"y": 5 				}], 				"valueProb": 100 			}, { 				"key": "formType", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "invoiceType", 				"keyProb": 100, 				"value": "电子普通发票", 				"valuePos": [{ 					"x": 746, 					"y": 3 				}, { 					"x": 746, 					"y": 40 				}, { 					"x": 325, 					"y": 42 				}, { 					"x": 324, 					"y": 5 				}], 				"valueProb": 100 			}, { 				"key": "specialTag", 				"keyProb": 100, 				"value": "", 				"valueProb": 100 			}, { 				"key": "invoiceDetails", 				"keyProb": 100, 				"value": "[{\"itemName\":\"“物流辅助服务*收派服务费\",\"specification\":\"\",\"unit\":\"次\",\"quantity\":\"1.000000\",\"unitPrice\":\"22.640000\",\"amount\":\"22.64\",\"taxRate\":\"6%\",\"tax\":\"1.36\"}]", 				"valueProb": 100 			}], 			"sliceRect": { 				"x0": 280, 				"y0": 237, 				"x1": 1344, 				"y1": 239, 				"x2": 1345, 				"y2": 920, 				"x3": 279, 				"y3": 916 			}, 			"width": 1067 		}, 		"sliceRect": { 			"x0": 280, 			"y0": 237, 			"x1": 1344, 			"y1": 239, 			"x2": 1345, 			"y2": 920, 			"x3": 279, 			"y3": 916 		}, 		"type": "增值税发票" 	}], 	"width": 1654 }`
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
