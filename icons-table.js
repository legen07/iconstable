/////////////////////////////////////////////
////  ICONS MANIPULATIONS
function setIcons() {
  !localStorage.icons &&
    fetch(
      "https://cdn.jsdelivr.net/npm/@tabler/icons@3.11.0/tabler-nodes-outline.json",
      { priority: "high" }
    )
      .then((outJsonUrl) => outJsonUrl.json())
      .then((outJsonUrl) =>
        localStorage.setItem("icons", JSON.stringify(outJsonUrl))
      )
      .then(doIt);

  function doIt() {
    let allIconsObject = JSON.parse(localStorage.getItem("icons"));


    for (let i = 0; i <= ([...$('[icon]')].length - 1); i++){
  
      if (!$($('[icon]')[i]).find('path')[0]) {
        let notYetSvg = $('[icon]')[i];

        let svgName = $(notYetSvg).attr("icon");
      
        $(notYetSvg).attr({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
        });
      
        allIconsObject[svgName].forEach((each) => {
          let path = `<path d="${each[1].d}"/>`;
          $("[icon]")[i].insertAdjacentHTML("afterbegin", path);
        });

      }else{
          continue
      }
    }
  }

  !!localStorage.icons && doIt();
}
setIcons();
/* ...........................................*/
