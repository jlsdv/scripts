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
}

let backurl = `https://${domain}/${campaignIdBO}?var7=${var7}&${stringParams}`;
(function (w) {
  w.history.pushState({}, "", document.location.href);
  w.addEventListener("popstate", function () {
    window.onbeforeunload = null;
    document.location = backurl;
  });
})(window);

document.querySelectorAll(".trackinglink").forEach((link) => {
  link.addEventListener("click", function (e) {
    openInNewTab(`https://${domain}/click`);
    window.location.replace(`https://${domain}/${campaignIdSO}?var7=${var7}&${stringParams}`);
  });
});

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
