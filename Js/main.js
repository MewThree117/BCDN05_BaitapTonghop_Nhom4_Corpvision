// Thay đổi background-color khi scroll

window.onscroll = function() {scrollFunction()};

var x = document.getElementsByClassName("corpHeader__color");
function scrollFunction() {
  var i;  
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("corpHeader").style.padding = "15px 0px";
    document.getElementById("corpHeader").style.borderBottom = "transparent";
    document.getElementById("corpHeader").style.boxShadow = "0 3px 6px 0 rgb(0 0 0 / 5%)";
    document.getElementById("corpHeader").style.backgroundColor = "currentColor";
    document.getElementById("corpNavbar__home").style.color = "#009f4d";
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "#3f3a64";
    }
  } else {
    document.getElementById("corpHeader").style.padding = "20px 0px";
    document.getElementById("corpHeader").style.borderBottom = "1px solid rgba(231, 231, 231, 0.18)";
    document.getElementById("corpHeader").style.boxShadow = "0 0 0 0px #fff";
    document.getElementById("corpHeader").style.backgroundColor = "transparent";
    document.getElementById("corpNavbar__home").style.color = "#fff";
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "#fff";
    }
  }
}

// function changeBgColor() {
//     if(corpHeader__checked.checked && document.body.scrollTop < 80 || corpHeader__checked.checked && document.documentElement.scrollTop < 80) {
//         document.getElementById("corpHeader").style.backgroundColor = "transparent";
//         for (i = 0; i < x.length; i++) {
//             x[i].style.color = "#fff";
//         }
//     } else if(corpHeader__checked.checked && document.body.scrollTop > 80 || corpHeader__checked.checked && document.documentElement.scrollTop > 80) {
//         document.getElementById("corpHeader").style.backgroundColor = "#fff";
//         for (i = 0; i < x.length; i++) {
//             x[i].style.color = "#3f3a64";
//         }
//     } else {
//         document.getElementById("corpHeader").style.backgroundColor = "#fff";
//         document.getElementById("corpNavbar__home").style.color = "#009f4d";
//         for (i = 0; i < x.length; i++) {
//                 x[i].style.color = "#3f3a64";
//             }
//     }
// }

