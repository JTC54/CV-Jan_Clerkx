window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "5px 10px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
  }
}
