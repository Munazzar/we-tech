function refreshFrame() {
   var a = new AdobeDC.View({
      clientId: cid,
      divId: "adobe-dc-view"
   });
   a.previewFile({
      content: {
         location: {
            url: "test23.pdf"
         }
      },
      metaData: {
         fileName: "Bodea Brochure.pdf"
      }
   }, {}), a.registerCallback(AdobeDC.View.Enum.CallbackType.EVENT_LISTENER, function (a) {
      "CURRENT_ACTIVE_PAGE" == a.type && window.adobeDataLayer.push({
         event: "pdfPageView",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            pdfUsage: {
               name: "intelligent-edge-solutions-portfolio-brochure",
               pageNumber: a.data.pageNumber,
               pageViews: {
                  value: 1
               }
            }
         }
      }), 15 == a.data.pageNumber && "CURRENT_ACTIVE_PAGE" == a.type && ($(".c1").removeClass("modal1"), $("#pdf-container").addClass("adobe_dc_view_blurred"), window.adobeDataLayer.push({
         event: "formLoaded",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            formDetails: {
               form: {
                  type: "lead-form",
                  name: "solutions-lead-form"
               },
               product: [{
                  category: "solutions",
                  name: "solutions-product-01"
               }],
               loads: {
                  value: 1
               }
            }
         }
      })), "DOCUMENT_OPEN" == a.type && window.adobeDataLayer.push({
         event: "pdfOpen",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            pdfUsage: {
               name: "intelligent-edge-solutions-portfolio-brochure",
               docViews: {
                  value: 1
               }
            }
         }
      }), "ANNOTATION_MODE_STARTED" == a.type && window.adobeDataLayer.push({
         event: "pdfHighlight",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            pdfUsage: {
               name: "intelligent-edge-solutions-portfolio-brochure",
               pageNumber: 1,
               highlights: {
                  value: 1
               }
            }
         }
      }), "ANNOTATION_ADDED" == a.type && "note" == a.data && window.adobeDataLayer.push({
         event: "pdfComment",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            pdfUsage: {
               name: "intelligent-edge-solutions-portfolio-brochure",
               pageNumber: 1,
               comments: {
                  value: 1
               }
            }
         }
      }), "TEXT_SEARCH" == a.type && window.adobeDataLayer.push({
         event: "pdfSearch",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            pdfUsage: {
               name: "intelligent-edge-solutions-portfolio-brochure",
               pageNumber: "1",
               searchTerm: a.data.searchedText,
               searches: {
                  value: 1
               }
            }
         }
      })
   }, {
      listenOn: [],
      enableAnnotationEvents: !0,
      enablePDFAnalytics: !0,
      enableFilePreviewEvents: !0
   })
}

function popup_load() {
   $("#pdf-container").hasClass("adobe_dc_view_blurred") && window.adobeDataLayer.push({
      event: "formLoaded",
      web: {
         webPageDetails: {
            name: "b2b:pdfanalytics:home",
            server: document.location.hostname,
            siteSection: "solutions",
            isErrorPage: !1
         }
      },
      "_spnam": {
         pageInfo: {
            type: "home",
            siteSubSection: "intelligent-edge-solutions",
            language: "English"
         },
         formDetails: {
            form: {
               type: "lead-form",
               name: "solutions-lead-form"
            },
            product: [{
               category: "solutions",
               name: "solutions-product-01"
            }],
            loads: {
               value: 1
            }
         }
      }
   })
}

function bluremail() {
   var a = "John",
      b = "Doe",
      c = "john.doe@walmart.com";
   if ($("#fname").val()) var a = $("#fname").val();
   if ($("#lname").val()) var b = $("#lname").val();
   if ($("#email").val()) var c = $("#email").val();
   window.adobeDataLayer.push({
      event: "emailFieldBlur",
      "_spnam": {
         formProfileDetails: {
            formProfile: {
               firstName: a,
               lastName: b,
               companyMail: c
            }
         }
      }
   })
}

function submitform(l) {
   if ("" != $("#fname").val() && "" != $("#lname").val() && "" != $("#email").val() && "" != $("#jtitle").val() && "-- Select your country --" != $("#country").val() && "" != $("#phone").val() && "-- Plesae Select --" != $("#rfc").val() && "" != $("#company").val()) {
      var b = "DR" + Math.floor(1e5 + 9e5 * Math.random()),
         c = "ac" + Math.floor(1e5 + 9e5 * Math.random()),
         d = Math.floor(1e11 + 9e11 * Math.random()),
         e = $("#fname").val(),
         f = $("#lname").val(),
         a = $("#email").val(),
         g = $("#jtitle").val(),
         h = $("#country").val(),
         i = $("#phone").val(),
         j = $("#rfc").val(),
         k = $("#company").val();
      window.adobeDataLayer.push({
         event: "formProfileComplete",
         "_spnam": {
            formProfileDetails: {
               formProfile: {
                  salutation: "true",
                  firstName: e,
                  lastName: f,
                  jobTitle: g,
                  companyName: k,
                  companyMail: a,
                  phone: i,
                  country: h,
                  reasonContact: j
               },
               formOpportunity: {
                  opportunityID: b,
                  accountID: c,
                  sourceID: "web123"
               }
            }
         }
      }), window.adobeDataLayer.push({
         event: "formCompleted",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: document.location.hostname,
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            formDetails: {
               form: {
                  type: "lead-form",
                  name: "solutions-lead-form",
                  status: "Processed",
                  refNumber: d.toString()
               },
               product: [{
                  category: "solutions",
                  name: "solutions-product-01"
               }],
               completes: {
                  value: 1
               }
            }
         },
         identityMap: {
            b2b_person: [{
               id: a + "web123",
               authenticatedState: "ambiguous",
               primary: !0
            }],
            email: [{
               id: a,
               authenticatedState: "ambiguous",
               primary: !1
            }]
         }
      }), $(".c1").addClass("modal1"), $("#card").removeClass("modal3"), $("#fname").val(""), $("#lname").val(""), $("#email").val(""), $("#jtitle").val(""), $("#country").val(""), $("#phone").val(""), $("#rfc").val(""), $("#company").val("")
   }
}
$(".cancel").click(function () {
   $(".c1").addClass("modal1"), $("#pdf-container").removeClass("adobe_dc_view_blurred"), _satellite.setVar("fstart", "false"), refreshFrame()
}), $(".cancel1").click(function () {
   $("#card").addClass("modal3"), $("#pdf-container").removeClass("adobe_dc_view_blurred"), _satellite.setVar("fstart", "false"), refreshFrame()
}), $(".vdetail").click(function () {
   $("#pdf-view").removeClass("modal2"), $(".c2").addClass("modal2"), refreshFrame()
}), window.onload = function () {
   window.adobeDataLayer.push({
      event: "pageLoaded",
      web: {
         webPageDetails: {
            name: "b2b:pdfanalytics:home",
            server: document.location.hostname,
            siteSection: "solutions",
            isErrorPage: !1,
            pageViews: {
               value: 1
            }
         }
      },
      "_spnam": {
         pageInfo: {
            type: "home",
            siteSubSection: "intelligent-edge-solutions",
            language: "English"
         }
      }
   })
}, _satellite.setVar("fstart", "false"), document.querySelectorAll("input").forEach(a => {
   a.addEventListener("click", function (a) {
      ("fname" == event.path[0].id || "lname" == event.path[0].id || "jtitle" == event.path[0].id || "company" == event.path[0].id || "email" == event.path[0].id || "phone" == event.path[0].id || "country" == event.path[0].id || "rfc" == event.path[0].id || "invaildCheck" == event.path[0].id) && "true" != _satellite.getVar("fstart") && (_satellite.setVar("fstart", "true"), window.adobeDataLayer.push({
         event: "formStarted",
         web: {
            webPageDetails: {
               name: "b2b:pdfanalytics:home",
               server: "domain",
               siteSection: "solutions",
               isErrorPage: !1
            }
         },
         "_spnam": {
            pageInfo: {
               type: "home",
               siteSubSection: "intelligent-edge-solutions",
               language: "English"
            },
            formDetails: {
               form: {
                  type: "lead-form",
                  name: "solutions-lead-form"
               },
               product: [{
                  category: "solutions",
                  name: "solutions-product-01"
               }],
               starts: {
                  value: 1
               }
            }
         }
      }))
   })
})


//created a function to hide the overlay
function off() {
   document.getElementById("overlay").style.display = "none";
 }

var viewerConfig = {
          embedMode: "LIGHT_BOX"
      };
      document.addEventListener("adobe_dc_view_sdk.ready", function () {
          document.getElementById("view-pdf-btn").disabled = false;
      });
      function previewFile()
      {

         //showing the overlay here
         document.getElementById("overlay").style.display = "block";
          var adobeDCView = new AdobeDC.View({
              clientId: cid,
              //provided the div id to show the pdf viewer
              divId: "adobe-dc-view2"
          });
          adobeDCView.previewFile({
              content: {
                  location: {
                      url: "test_zebra.pdf",
                  },
              },
              metaData: {
                  fileName: "RFID Portfolio Brochure.pdf"
              }

              //removed the default ]viewConfig set to light_box
          }, {});
          const eventOptions = {
      //Pass the events to receive.
      //If no event is passed in listenOn, then all annotation events will be received.
      listenOn: [],
      enableAnnotationEvents: true,
      enablePDFAnalytics: true,
      enableFilePreviewEvents: true
   }
   adobeDCView.registerCallback(
      AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
      function (event) {
         console.log("event from overlay: ",event);
         if (event.type == 'CURRENT_ACTIVE_PAGE') {
            window.adobeDataLayer.push({
               "event": "pdfPageView",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:zebra:rfid:pdfbrochure",
                     "server": document.location.hostname, // Dynamic based on the domain
                     "siteSection": "solutions",
                     "isErrorPage": false,
                  }
               },
               "_spnam": {
                  "pageInfo": {
                     "type": "home",
                     "siteSubSection": "intelligent-edge-solutions",
                     "language": "English"
                  },
                  "pdfUsage": {
                     "name": "zebra-rfid-family-brochure",
                     "pageNumber": event.data.pageNumber, // Dynamic based on the page number
                     "pageViews": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.data.pageNumber == 12 && event.type == 'CURRENT_ACTIVE_PAGE') {
            $('.c1').removeClass('modal1');
            $('#pdf-container').addClass('adobe_dc_view_blurred');
            window.adobeDataLayer.push({
               "event": "formLoaded",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:zebra:rfid:pdfbrochure",
                     "server": document.location.hostname, // Dynamic based on the domain
                     "siteSection": "solutions",
                     "isErrorPage": false,
                  }
               },
               "_spnam": {
                  "pageInfo": {
                     "type": "home",
                     "siteSubSection": "intelligent-edge-solutions",
                     "language": "English"
                  },
                  "formDetails": {
                     "form": {
                        "type": "lead-form",
                        "name": "solutions-lead-form",
                     },
                     "product": [{
                        "category": "solutions",
                        "name": "solutions-product-01"
                     }],
                     "loads": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.type == 'DOCUMENT_OPEN') {
            window.adobeDataLayer.push({
               "event": "pdfOpen",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:zebra:rfid:pdfbrochure",
                     "server": document.location.hostname, // Dynamic based on the domain
                     "siteSection": "solutions",
                     "isErrorPage": false,
                  }
               },
               "_spnam": {
                  "pageInfo": {
                     "type": "home",
                     "siteSubSection": "intelligent-edge-solutions",
                     "language": "English"
                  },
                  "pdfUsage": {
                     "name": "zebra-rfid-family-brochure",
                     "docViews": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.type == 'ANNOTATION_ADDED' && event.data == 'highlight') {
            window.adobeDataLayer.push({
               "event": "pdfHighlight",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:zebra:rfid:pdfbrochure",
                     "server": document.location.hostname, // Dynamic based on the domain
                     "siteSection": "solutions",
                     "isErrorPage": false,
                  }
               },
               "_spnam": {
                  "pageInfo": {
                     "type": "home",
                     "siteSubSection": "intelligent-edge-solutions",
                     "language": "English"
                  },
                  "pdfUsage": {
                     "name": "zebra-rfid-family-brochure",
                     "pageNumber": 1,
                     "highlights": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.type == 'ANNOTATION_ADDED' && event.data == 'note') {
            window.adobeDataLayer.push({
               "event": "pdfComment",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:zebra:rfid:pdfbrochure",
                     "server": document.location.hostname, // Dynamic based on the domain
                     "siteSection": "solutions",
                     "isErrorPage": false,
                  }
               },
               "_spnam": {
                  "pageInfo": {
                     "type": "home",
                     "siteSubSection": "intelligent-edge-solutions",
                     "language": "English"
                  },
                  "pdfUsage": {
                     "name": "zebra-rfid-family-brochure",
                     "pageNumber": 1, // Dynamic based on the page number
                     "comments": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.type == 'TEXT_SEARCH') {
            window.adobeDataLayer.push({
               "event": "pdfSearch",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:zebra:rfid:pdfbrochure",
                     "server": document.location.hostname, // Dynamic based on the domain
                     "siteSection": "solutions",
                     "isErrorPage": false,
                  }
               },
               "_spnam": {
                  "pageInfo": {
                     "type": "home",
                     "siteSubSection": "intelligent-edge-solutions",
                     "language": "English"
                  },
                  "pdfUsage": {
                     "name": "zebra-rfid-family-brochure",
                     "pageNumber": "1",
                     "searchTerm": event.data.searchedText,
                     "searches": {
                        "value": 1
                     }
                  }
               }
            });
         }
      },eventOptions
   );

      };
