console.log("dsjhfgdshfkjgh");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") addStyleToINNFunc(tabId);
});

function addStyleToINNFunc(activeTabId) {
  console.log("page is fully loaded MAIN MAIN");

  chrome.scripting.executeScript({
    target: {
      tabId: activeTabId,
    },
    func: sendCodeToSite,
  });
}

function sendCodeToSite() {
  console.log("TEST");

  const container = document.querySelector(".tp-shortcuttools__table");
  const newBtn = document.createElement("div");
  newBtn.className =
    "tp-shortcuttools__one tp-shortcuttools__one_white tp-shortcuttools__zero";
  newBtn.style = "padding: 0px 20px; cursor: pointer";
  newBtn.textContent = "Paste block";
  container?.appendChild(newBtn);

  const pastePageBtn = document.createElement("div");
  const btnsWrapper = document.querySelector(".td-project-midpanel__buttons");
  pastePageBtn.textContent = "paste";
  // pastePageBtn.className = "td-project-midpanel__button td-project-midpanel__button_green"
  pastePageBtn.className = "td-button-ico td-button-addnewpage";
  console.log(btnsWrapper);

  btnsWrapper?.appendChild(pastePageBtn);
  newBtn.addEventListener("click", () => {
    let urlObj = new URL(window.location.href);
    let params = new URLSearchParams(urlObj.search);

    let data = new FormData();
    // data.append("comm", "addnewrecord")
    // data.append("pageid", params.get("pageid"))
    // data.append("tplid", 43691603)
    // data.append("with_code", "yes")
    // fetch("https://tilda.ru/page/submit/", {method: "POST", body: data})
    // data.append("comm", "addnewpagedublicateexample")

    data.append("comm", "adddublicateexample"); //
    data.append("pageid", 54354703);
    data.append("projectid", 10479129);
    data.append("examplepageid", 43691603);
    data.append("with_code", "yes");

    // fetch("https://tilda.ru/page/submit/", {method: "POST", body: data})
    fetch("https://tilda.ru/getcommands/");
    // fetch("https://tilda.ru/page/submit/updateundobutton/", {
    //     method: "POST",
    //     body: JSON.stringify({"comm": "updateundobutton", "pageid": params.get("pageid")})
    // })
  });
}
