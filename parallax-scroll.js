$(document).ready(function(){
    $(window).scroll(function(){
      var scrollLevelTop = $(window).scrollTop();
      var section1 = $('#section1');
      var section2 = $('#section2');
      var section3 = $('#section3');
      var section4 = $('#section4');
      var section5 = $('#section5');
      var section6 = $('#section6');
      console.log(scrollLevelTop);
      if(scrollLevelTop>0 && scrollLevelTop<=648){

          section1.css({
            "position": "fixed",
            "z-index": "-99",
            "top": "0", 
            "left":"0"
          });
          section2.css({
            "margin-top": "48%",
            "z-index": "-99",
            "top": "0",
            "left": "0"
          });
          console.log("648 scroll");
      }
    else if(scrollLevelTop>648 && scrollLevelTop<=1286){

        section1.css({
          "position": "",
          "z-index": "",
          "top": "",
          "left":""
        });
        section2.css({
          "margin-top": "",
          "z-index": "",
          "top": "",
          "left": ""
        });
          section2.css({
          "position": "fixed",
          "z-index": "-99",
          "top": "0",
          "left":"0"
      });

          section3.css({
            "margin-top": "48%",
            "z-index": "-99",
            "top": "0",
            "left":"0"
          });
          console.log("1286 scroll");
      }
      else if(scrollLevelTop>1286 && scrollLevelTop<=1924){
        section2.css({
          "position": "",
          "z-index": "",
          "top": "",
          "left":""
        });
        section3.css({
          "margin-top": "",
          "z-index": "",
          "top": "",
          "left": ""
        });
          section3.css({
          "position": "fixed",
          "z-index": "-99",
          "top": "0",
          "left":"0"
      });

          section4.css({
            "margin-top": "48%",
            "z-index": "-99",
            "top": "0",
            "left":"0"
          });
      }else if (scrollLevelTop>1924 && scrollLevelTop<=2562) {
        section3.css({
          "position": "",
          "z-index": "",
          "top": "",
          "left":""
        });
        section4.css({
          "margin-top": "",
          "z-index": "",
          "top": "",
          "left": ""
        });
          section4.css({
          "position": "fixed",
          "z-index": "-99",
          "top": "0",
          "left":"0"
      });

          section5.css({
            "margin-top": "48%",
            "z-index": "-99",
            "top": "0",
            "left":"0"
          });
      }
    });
});
