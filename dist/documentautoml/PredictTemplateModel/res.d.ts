export interface PredictTemplateModelResponse {
    /**
     * Id of the request
     * @example `F25FBAB4-665A-5D85-8AEF-39AE29F7D588`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{
        "score": 0.9091,
        "data": [
          {
            "prob": 1,
            "fieldName": "姓名",
            "fieldWordRaw": "方大呆",
            "wordInfo": [
              {
                "prob": 0.9899999999999999,
                "location": [
                  {
                    "x": 119,
                    "y": 48
                  },
                  {
                    "x": 199,
                    "y": 48
                  },
                  {
                    "x": 199,
                    "y": 69
                  },
                  {
                    "x": 119,
                    "y": 69
                  }
                ],
                "word": "方大呆",
                "charInfo": [
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 119,
                        "y": 48
                      },
                      {
                        "x": 142,
                        "y": 48
                      },
                      {
                        "x": 142,
                        "y": 67
                      },
                      {
                        "x": 119,
                        "y": 67
                      }
                    ],
                    "word": "方"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 142,
                        "y": 48
                      },
                      {
                        "x": 165,
                        "y": 48
                      },
                      {
                        "x": 165,
                        "y": 67
                      },
                      {
                        "x": 142,
                        "y": 67
                      }
                    ],
                    "word": "大"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 167,
                        "y": 48
                      },
                      {
                        "x": 197,
                        "y": 48
                      },
                      {
                        "x": 197,
                        "y": 67
                      },
                      {
                        "x": 167,
                        "y": 67
                      }
                    ],
                    "word": "呆"
                  }
                ]
              }
            ],
            "location": [
              {
                "x": 119,
                "y": 48
              },
              {
                "x": 199,
                "y": 48
              },
              {
                "x": 199,
                "y": 69
              },
              {
                "x": 119,
                "y": 69
              }
            ],
            "fieldWord": "方大呆"
          },
          {
            "prob": 1,
            "fieldName": "性别",
            "fieldWordRaw": "男",
            "wordInfo": [
              {
                "prob": 0.99,
                "location": [
                  {
                    "x": 117,
                    "y": 93
                  },
                  {
                    "x": 142,
                    "y": 93
                  },
                  {
                    "x": 142,
                    "y": 112
                  },
                  {
                    "x": 117,
                    "y": 112
                  }
                ],
                "word": "男",
                "charInfo": [
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 117,
                        "y": 93
                      },
                      {
                        "x": 142,
                        "y": 93
                      },
                      {
                        "x": 142,
                        "y": 112
                      },
                      {
                        "x": 117,
                        "y": 112
                      }
                    ],
                    "word": "男"
                  }
                ]
              }
            ],
            "location": [
              {
                "x": 117,
                "y": 93
              },
              {
                "x": 142,
                "y": 93
              },
              {
                "x": 142,
                "y": 112
              },
              {
                "x": 117,
                "y": 112
              }
            ],
            "fieldWord": "男"
          },
          {
            "prob": 1,
            "fieldName": "身份证号",
            "fieldWordRaw": "310101********3222",
            "wordInfo": [
              {
                "prob": 0.9899999999999998,
                "location": [
                  {
                    "x": 206,
                    "y": 301
                  },
                  {
                    "x": 518,
                    "y": 301
                  },
                  {
                    "x": 518,
                    "y": 320
                  },
                  {
                    "x": 206,
                    "y": 320
                  }
                ],
                "word": "310101198610203222",
                "charInfo": [
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 206,
                        "y": 302
                      },
                      {
                        "x": 223,
                        "y": 302
                      },
                      {
                        "x": 223,
                        "y": 319
                      },
                      {
                        "x": 206,
                        "y": 319
                      }
                    ],
                    "word": "3"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 223,
                        "y": 302
                      },
                      {
                        "x": 238,
                        "y": 302
                      },
                      {
                        "x": 238,
                        "y": 319
                      },
                      {
                        "x": 223,
                        "y": 319
                      }
                    ],
                    "word": "1"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 240,
                        "y": 302
                      },
                      {
                        "x": 255,
                        "y": 302
                      },
                      {
                        "x": 255,
                        "y": 319
                      },
                      {
                        "x": 240,
                        "y": 319
                      }
                    ],
                    "word": "0"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 259,
                        "y": 302
                      },
                      {
                        "x": 274,
                        "y": 302
                      },
                      {
                        "x": 274,
                        "y": 319
                      },
                      {
                        "x": 259,
                        "y": 319
                      }
                    ],
                    "word": "1"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 276,
                        "y": 302
                      },
                      {
                        "x": 291,
                        "y": 302
                      },
                      {
                        "x": 291,
                        "y": 319
                      },
                      {
                        "x": 276,
                        "y": 319
                      }
                    ],
                    "word": "0"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 292,
                        "y": 302
                      },
                      {
                        "x": 307,
                        "y": 302
                      },
                      {
                        "x": 307,
                        "y": 319
                      },
                      {
                        "x": 292,
                        "y": 319
                      }
                    ],
                    "word": "1"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 311,
                        "y": 302
                      },
                      {
                        "x": 326,
                        "y": 302
                      },
                      {
                        "x": 326,
                        "y": 319
                      },
                      {
                        "x": 311,
                        "y": 319
                      }
                    ],
                    "word": "1"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 328,
                        "y": 302
                      },
                      {
                        "x": 343,
                        "y": 302
                      },
                      {
                        "x": 343,
                        "y": 319
                      },
                      {
                        "x": 328,
                        "y": 319
                      }
                    ],
                    "word": "9"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 344,
                        "y": 302
                      },
                      {
                        "x": 359,
                        "y": 302
                      },
                      {
                        "x": 359,
                        "y": 319
                      },
                      {
                        "x": 344,
                        "y": 319
                      }
                    ],
                    "word": "8"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 361,
                        "y": 302
                      },
                      {
                        "x": 376,
                        "y": 302
                      },
                      {
                        "x": 376,
                        "y": 319
                      },
                      {
                        "x": 361,
                        "y": 319
                      }
                    ],
                    "word": "6"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 380,
                        "y": 302
                      },
                      {
                        "x": 395,
                        "y": 302
                      },
                      {
                        "x": 395,
                        "y": 319
                      },
                      {
                        "x": 380,
                        "y": 319
                      }
                    ],
                    "word": "1"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 396,
                        "y": 302
                      },
                      {
                        "x": 411,
                        "y": 302
                      },
                      {
                        "x": 411,
                        "y": 319
                      },
                      {
                        "x": 396,
                        "y": 319
                      }
                    ],
                    "word": "0"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 415,
                        "y": 302
                      },
                      {
                        "x": 430,
                        "y": 302
                      },
                      {
                        "x": 430,
                        "y": 319
                      },
                      {
                        "x": 415,
                        "y": 319
                      }
                    ],
                    "word": "2"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 432,
                        "y": 302
                      },
                      {
                        "x": 447,
                        "y": 302
                      },
                      {
                        "x": 447,
                        "y": 319
                      },
                      {
                        "x": 432,
                        "y": 319
                      }
                    ],
                    "word": "0"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 448,
                        "y": 302
                      },
                      {
                        "x": 463,
                        "y": 302
                      },
                      {
                        "x": 463,
                        "y": 319
                      },
                      {
                        "x": 448,
                        "y": 319
                      }
                    ],
                    "word": "3"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 467,
                        "y": 302
                      },
                      {
                        "x": 482,
                        "y": 302
                      },
                      {
                        "x": 482,
                        "y": 319
                      },
                      {
                        "x": 467,
                        "y": 319
                      }
                    ],
                    "word": "2"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 484,
                        "y": 302
                      },
                      {
                        "x": 499,
                        "y": 302
                      },
                      {
                        "x": 499,
                        "y": 319
                      },
                      {
                        "x": 484,
                        "y": 319
                      }
                    ],
                    "word": "2"
                  },
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 501,
                        "y": 302
                      },
                      {
                        "x": 516,
                        "y": 302
                      },
                      {
                        "x": 516,
                        "y": 319
                      },
                      {
                        "x": 501,
                        "y": 319
                      }
                    ],
                    "word": "2"
                  }
                ]
              }
            ],
            "location": [
              {
                "x": 206,
                "y": 301
              },
              {
                "x": 518,
                "y": 301
              },
              {
                "x": 518,
                "y": 320
              },
              {
                "x": 206,
                "y": 320
              }
            ],
            "fieldWord": "310101198610203222"
          },
          {
            "prob": 1,
            "fieldName": "名族",
            "fieldWordRaw": "汉",
            "wordInfo": [
              {
                "prob": 0.99,
                "location": [
                  {
                    "x": 232,
                    "y": 94
                  },
                  {
                    "x": 259,
                    "y": 94
                  },
                  {
                    "x": 259,
                    "y": 112
                  },
                  {
                    "x": 232,
                    "y": 112
                  }
                ],
                "word": "汉",
                "charInfo": [
                  {
                    "prob": 0.99,
                    "location": [
                      {
                        "x": 232,
                        "y": 94
                      },
                      {
                        "x": 259,
                        "y": 94
                      },
                      {
                        "x": 259,
                        "y": 112
                      },
                      {
                        "x": 232,
                        "y": 112
                      }
                    ],
                    "word": "汉"
                  }
                ]
              }
            ],
            "location": [
              {
                "x": 232,
                "y": 94
              },
              {
                "x": 259,
                "y": 94
              },
              {
                "x": 259,
                "y": 112
              },
              {
                "x": 232,
                "y": 112
              }
            ],
            "fieldWord": "汉"
          }
        ],
        "specificType": "infoCustomeKvTemp",
        "width": 586,
        "angle": 0,
        "classType": "template",
        "height": 374,
        "predictFile": "https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/demo/demo.png"
      }`
     */
    Data: any;
    /**
     * 返回消息
     * @example `successful`
     */
    Message: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: string;
}
