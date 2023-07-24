$(document).ready(function () {
  let timer;
  //   滾動到欄位一半
  $(window).scroll(function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      let skillH = $("#skillsSection").offset().top;
      let windowH = $(window).scrollTop();
      // console.log(skillH);
      // console.log(windowH);
      if (windowH > skillH - skillH / 2) {
        moveProgressBar();
      }
    }, 100);
  });
  // resize視窗時
  $(window).resize(function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      // console.log("resize了");
      moveProgressBar();
    }, 100);
  });

  //  進度條跑動畫
  function moveProgressBar() {
    $(".progress-wrap").each(function () {
      let getPercentNum = $(this).attr("data-progress-percent");
      let getPercent = getPercentNum / 100;
      let getProgressWrapWidth = $(".progress-wrap").width();
      let progressTotal = getPercent * getProgressWrapWidth;
      let animationLength = 1000;
      $(this).children(".progress-bar").animate(
        {
          left: progressTotal,
        },
        animationLength
      );
    });
  }

  // 圖片延遲載入不要佔資源
  $("img.lazyload").lazyload({
    effect: "fadeIn",
    threshold: 500,
  });

  // 滑鼠
  var cursor = $("#cursor");
  var cursor2 = $("#cursor2");
  var cursor3 = $("#cursor3");
  var hoverTarget = $(".hover-target");

  // 滑鼠移動時，更新指針位置
  $("body").mousemove(function (e) {
    cursor.css({
      top: e.clientY,
      left: e.clientX,
    });
    cursor2.css({
      top: e.clientY,
      left: e.clientX,
    });
    cursor3.css({
      top: e.clientY,
      left: e.clientX,
    });
  });

  // 將所有帶有.hover-target類別的元素標記為可觸發滑鼠指針
  function addHover() {
    cursor2.addClass("hover");
    cursor3.addClass("hover");
  }

  function removeHover() {
    cursor2.removeClass("hover");
    cursor3.removeClass("hover");
  }

  hoverTarget.mouseenter(addHover).mouseleave(removeHover);

  // 選擇所有.hover-target元素，綁定觸發事件
  hoverTarget.each(function () {
    $(this).on("mouseover", addHover);
    $(this).on("mouseout", removeHover);
  });
});
