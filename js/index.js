function off() {
   document.getElementById("overlay").style.display = "none";
 }

function refreshFrame() {

   var adobeDCView = new AdobeDC.View({
      clientId: cid,
      divId: "adobe-dc-view"
   });
   adobeDCView.previewFile({
      content: {
         location: {
            url: "test23.pdf"
         }
      },
      metaData: {
         fileName: "Bodea Brochure.pdf"
      }
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
         if (event.type == 'CURRENT_ACTIVE_PAGE') {
            window.adobeDataLayer.push({
               "event": "pdfPageView",
               "web": {
                  "webPageDetails": {
                     "name": "b2b:pdfanalytics:home",
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
                     "name": "intelligent-edge-solutions-portfolio-brochure",
                     "pageNumber": event.data.pageNumber, // Dynamic based on the page number
                     "pageViews": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.data.pageNumber == 15 && event.type == 'CURRENT_ACTIVE_PAGE') {
            $('.c1').removeClass('modal1');
            $('#pdf-container').addClass('adobe_dc_view_blurred');
            window.adobeDataLayer.push({
               "event": "formLoaded",
               "web": {
                  "webPageDetails": {
                     "name": "b2b:pdfanalytics:home",
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
                     "name": "b2b:pdfanalytics:home",
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
                     "name": "intelligent-edge-solutions-portfolio-brochure",
                     "docViews": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.type == 'ANNOTATION_MODE_STARTED') {
            window.adobeDataLayer.push({
               "event": "pdfHighlight",
               "web": {
                  "webPageDetails": {
                     "name": "b2b:pdfanalytics:home",
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
                     "name": "intelligent-edge-solutions-portfolio-brochure",
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
                     "name": "b2b:pdfanalytics:home",
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
                     "name": "intelligent-edge-solutions-portfolio-brochure",
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
                     "name": "b2b:pdfanalytics:home",
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
                     "name": "intelligent-edge-solutions-portfolio-brochure",
                     "pageNumber": "1",
                     "searchTerm": event.data.searchedText,
                     "searches": {
                        "value": 1
                     }
                  }
               }
            });
         }
      }, eventOptions
   );

}

$('.cancel').click(function () {
   $('.c1').addClass('modal1');
   $('#pdf-container').removeClass('adobe_dc_view_blurred');
   _satellite.setVar('fstart', 'false');
   refreshFrame()
})

$('.cancel1').click(function () {
   $('#card').addClass('modal3');
   $('#pdf-container').removeClass('adobe_dc_view_blurred');
   _satellite.setVar('fstart', 'false');
   refreshFrame()
})

$('.vdetail').click(function () {
   $('#pdf-view').removeClass('modal2');
   $('.c2').addClass('modal2');
   refreshFrame()
})

function popup_load() {
   if ($('#pdf-container').hasClass('adobe_dc_view_blurred')) {
      window.adobeDataLayer.push({
         "event": "formLoaded",
         "web": {
            "webPageDetails": {
               "name": "b2b:pdfanalytics:home",
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
}


window.onload = function () {
   window.adobeDataLayer.push({
      "event": "pageLoaded",
      "web": {
         "webPageDetails": {
            "name": "b2b:pdfanalytics:home",
            "server": document.location.hostname,
            "siteSection": "solutions",
            "isErrorPage": false,
            "pageViews": {
               "value": 1
            }
         }
      },
      "_spnam": {
         "pageInfo": {
            "type": "home",
            "siteSubSection": "intelligent-edge-solutions",
            "language": "English"
         }
      }
   });
};

function bluremail() {
   var fname = "John";
   var lname = "Doe";
   var email = "john.doe@walmart.com";
   if ($('#fname').val()) {
      var fname = $('#fname').val()
   }
   if ($('#lname').val()) {
      var lname = $('#lname').val()
   }
   if ($('#email').val()) {
      var email = $('#email').val()
   }
   window.adobeDataLayer.push({
      "event": "emailFieldBlur",
      "_spnam": {
         "formProfileDetails": {
            "formProfile": {
               "firstName": fname,
               "lastName": lname,
               "companyMail": email
            }
         }
      }
   });

}

function submitform(event) {
   if ($('#fname').val() != '' && $('#lname').val() != '' && $('#email').val() != '' && $('#jtitle').val() != '' && $('#country').val() != '-- Select your country --' && $('#phone').val() != '' && $('#rfc').val() != '-- Plesae Select --' && $('#company').val() != '') {

      var oid = ("DR" + Math.floor(100000 + Math.random() * 900000));
      var aid = ("ac" + Math.floor(100000 + Math.random() * 900000));
      var fsuccess = Math.floor(100000000000 + Math.random() * 900000000000);

      var fname = $('#fname').val()
      var lname = $('#lname').val()
      var email = $('#email').val()
      var jtitle = $('#jtitle').val()
      var country = $('#country').val()
      var phone = $('#phone').val()
      var rfc = $('#rfc').val()
      var company = $('#company').val()

      window.adobeDataLayer.push({
         "event": "formProfileComplete",
         "_spnam": {
            "formProfileDetails": {
               "formProfile": {
                  "salutation": "true",
                  "firstName": fname,
                  "lastName": lname,
                  "jobTitle": jtitle,
                  "companyName": company,
                  "companyMail": email,
                  "phone": phone,
                  "country": country,
                  "reasonContact": rfc
               },
               "formOpportunity": {
                  "opportunityID": oid,
                  "accountID": aid,
                  "sourceID": "web123"
               }
            }
         }
      });

      window.adobeDataLayer.push({
         "event": "formCompleted",
         "web": {
            "webPageDetails": {
               "name": "b2b:pdfanalytics:home",
               "server": document.location.hostname, // Dynamic based on the domain
               "siteSection": "solutions",
               "isErrorPage": false
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
                  "status": "Processed",
                  "refNumber": fsuccess.toString() //Random number unique to submission 
               },
               "product": [{
                  "category": "solutions",
                  "name": "solutions-product-01"
               }],
               "completes": {
                  "value": 1
               }
            }
         },
         "identityMap": {
            "b2b_person": [{
               "id": email + "web123",
               "authenticatedState": "ambiguous",
               "primary": true
            }],
            "email": [{
               "id": email,
               "authenticatedState": "ambiguous",
               "primary": false
            }]
         }
      });

      $('.c1').addClass('modal1');
      $('#card').removeClass('modal3');

      $('#fname').val('')
      $('#lname').val('')
      $('#email').val('')
      $('#jtitle').val('')
      $('#country').val('')
      $('#phone').val('')
      $('#rfc').val('')
      $('#company').val('')

   }

}


_satellite.setVar('fstart', 'false');
document.querySelectorAll("input").forEach(el => {
   el.addEventListener('click', function (e) {
      if (event.path[0].id == 'fname' || event.path[0].id == 'lname' || event.path[0].id == 'jtitle' || event.path[0].id == 'company' || event.path[0].id == 'email' || event.path[0].id == 'phone' || event.path[0].id == 'country' || event.path[0].id == 'rfc' || event.path[0].id == 'invaildCheck') {
         if (_satellite.getVar('fstart') != 'true') {
            _satellite.setVar('fstart', 'true');
            window.adobeDataLayer.push({
               "event": "formStarted",
               "web": {
                  "webPageDetails": {
                     "name": "b2b:pdfanalytics:home",
                     "server": "domain", // Dynamic based on the domain
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
                     "starts": {
                        "value": 1
                     }
                  }
               }
            });
         }
      }
   });
});


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
                      url: "PDA_Brochure_Demo.pdf",
                  },
              },
              metaData: {
                  fileName: "PDA Brochure.pdf"
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
                     "name": "en:us:pda:pdfbrochure",
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
                     "name": "pda-brochure",
                     "pageNumber": event.data.pageNumber, // Dynamic based on the page number
                     "pageViews": {
                        "value": 1
                     }
                  }
               }
            });
         }
         if (event.data.pageNumber == 3 && event.type == 'CURRENT_ACTIVE_PAGE') {
            $('.c1').removeClass('modal1');
            $('#pdf-container').addClass('adobe_dc_view_blurred');
            window.adobeDataLayer.push({
               "event": "formLoaded",
               "web": {
                  "webPageDetails": {
                     "name": "en:us:pda:pdfbrochure",
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
                     "name": "en:us:pda:pdfbrochure",
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
                     "name": "pda-brochure",
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
                     "name": "en:us:pda:pdfbrochure",
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
                     "name": "pda-brochure",
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
                     "name": "en:us:pda:pdfbrochure",
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
                     "name": "pda-brochure",
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
                     "name": "en:us:pda:pdfbrochure",
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
                     "name": "pda-brochure",
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
