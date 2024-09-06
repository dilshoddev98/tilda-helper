chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") addStyleToINNFunc(tabId);
});

function addStyleToINNFunc(activeTabId) {
  chrome.scripting.executeScript({
    target: {
      tabId: activeTabId,
    },
    func: sendCodeToSite,
  });
}

function sendCodeToSite() {
  function setInterval() {
    let isExistButton = document.querySelector(".showButton_test_dshajdjgash");
    setTimeout(() => {
      if (!isExistButton) {
        intervalFunc();
      } else {
        setInterval();
      }
    }, 1000);
  }
  setInterval();
  function intervalFunc() {
    const btnsWrapper = document.querySelector(".td-project-midpanel__buttons");

    const pasteBtn = document.createElement("div");
    pasteBtn.className =
      "td-project-midpanel__button showButton_test_dshajdjgash";

    const btnTable = document.createElement("table");
    btnTable.className = "td-button-ico td-button-addnewpage";

    const btnTableBody = document.createElement("tbody");

    const btnTableRow = document.createElement("tr");

    const btnTableData = document.createElement("td");
    btnTableData.className = "td-button-ico__title";
    btnTableData.style = "font-weight: 400;";
    btnTableData.textContent = "Paste project";

    const btnTableData2 = document.createElement("td");
    btnTableData2.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.68462 3.12308H9.34231C9.58462 3.12308 9.77308 2.93461 9.77308 2.69231V1.83077C9.77308 1.13077 9.20769 0.53846 8.50769 0.53846H5.54616C4.84616 0.53846 4.28077 1.13077 4.28077 1.83077V2.69231C4.25385 2.93461 4.44231 3.12308 4.68462 3.12308Z" fill="white"/>
      <path d="M11.6577 1.61538H11.2269C11.0923 1.61538 11.0115 1.69615 11.0115 1.83077V2.69231C11.0115 3.63461 10.2577 4.41538 9.31538 4.41538H4.68462C3.74231 4.41538 2.98846 3.63461 2.98846 2.69231V1.83077C2.98846 1.69615 2.90769 1.61538 2.77308 1.61538H2.34231C1.64231 1.61538 1.07692 2.20769 1.07692 2.90769V12.1692C1.07692 12.8692 1.64231 13.4615 2.34231 13.4615H11.6577C12.3577 13.4615 12.9231 12.8692 12.9231 12.1692V2.90769C12.9231 2.20769 12.3577 1.61538 11.6577 1.61538Z" fill="white"/>
      </svg>
  `;

    btnTableRow?.appendChild(btnTableData2);
    btnTableRow?.appendChild(btnTableData);
    btnTableBody?.appendChild(btnTableRow);
    btnTable?.appendChild(btnTableBody);
    pasteBtn?.appendChild(btnTable);
    btnsWrapper?.appendChild(pasteBtn);

    pasteBtn.addEventListener("click", async () => {
      const clipBoardText = await navigator.clipboard.readText();
      if (clipBoardText.length === 8) {
        let data = new FormData();
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get("projectid");
        data.append("comm", "addnewpagedublicateexample");
        data.append("projectid", projectId);
        data.append("examplepageid", clipBoardText);

        fetch("https://tilda.ru/projects/submit/", {
          method: "POST",
          body: data,
        })
          .then(() => {
            alert("Successfully Added");
            location.reload();
          })
          .catch((err) => {
            alert(`ERROR: ${err?.toString()}`);
          });
      } else {
        alert("Id is not invaluable");
      }
    });
  }
}
