$(".hov-logo").mouseover(function() {
    $(this).attr("src", $(this).data("animated"))
}),
$(".hov-logo").mouseout(function() {
    $(this).attr("src", $(this).data("static"))
});
  