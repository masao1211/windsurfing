var previousTabMain = $('.ui.tab.active.main');
$('.menu.main .item').tab({
    onVisible: function (e) {
        var currentTabMain = $('.ui.tab.active.main');
        previousTabMain.show();
        currentTabMain.hide();
        previousTabMain.transition({
            animation: 'slide down',
            onComplete: function () {
                currentTabMain.transition('slide down');
            }
        });
        previousTabMain = currentTabMain;
    }
});
var previousTabSub = $('.ui.tab.active.sub');
$('.menu.sub .item').tab({
    onVisible: function (e) {
        var currentTabSub = $('.ui.tab.active.sub');
        previousTabSub.show();
        currentTabSub.hide();
        previousTabSub.transition({
            animation: 'slide down',
            onComplete: function () {
                currentTabSub.transition('slide down');
            }
        });
        previousTabSub = currentTabSub;
    }
});