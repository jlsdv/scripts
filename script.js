$(document).ready(function () {
  function scroll() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1700);
  }
  scroll();
  var $btnNext = $(".step-btn");
  var currentStep = 0;
  var $step = $(".step-item");
  var totalStep = $step.length;
  var totalSlides = $(".slider-item").length;
  var currentSlide = 1;
  $btnNext.not(".submit-btn").on("click", function () {
    currentStep++;
    $step
      .removeClass("visible")
      .eq(currentStep)
      .addClass("visible")
      .next()
      .addClass("preload");
    $(".slider-item").removeClass("active").eq(currentSlide).addClass("active");
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    $(".slider-item.preload").next().addClass("preload");
    scroll();
  });
  $(".checkbox-item").on("click", function () {
    if ($(this).siblings(".checked").length < 3) {
      $(this).toggleClass("checked tr-selected");
    } else {
      $(this).addClass("checkbox-item-error");
      setTimeout(
        function () {
          $(this).removeClass("checkbox-item-error");
        }.bind(this),
        300
      );
    }
  });
});

function getURLParameter(name) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === name) {
      return pair[1];
    }
  }
  return "";
}

const domain = getURLParameter("domain");
const campaignIdBO = getURLParameter("bo");
const campaignIdSO = getURLParameter("so");
const var7 = getURLParameter("var7");
let stringParams = ``;

if (getURLParameter("cep")) {
  stringParams = `cep${window.location.href.split("cep")[1]}`;
} else {
  stringParams = ``;
}

let backurl = `https://${domain}/${campaignIdBO}?var7=${var7}&${stringParams}`;
(function (w) {
  w.history.pushState({}, "", document.location.href);
  w.addEventListener("popstate", function () {
    window.onbeforeunload = null;
    document.location = backurl;
  });
})(window);

fetch("https://ipapi.co/json")
  .then((response) => response.json())
  .then((data) => (document.querySelector("#city").innerHTML = data.city))
  .catch((error) => console.error("Error:", error));

document.querySelectorAll(".trackinglink").forEach((link) => {
  link.addEventListener("click", function (e) {
    openInNewTab(
      `https://${domain}/${campaignIdSO}?var7=${var7}&${stringParams}`
    );
    window.location.replace(`https://${domain}/click`);
  });
});

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}


