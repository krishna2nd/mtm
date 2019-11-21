window.dataLayer = [] || window.dataLayer;
function addStyleSheet(css) {
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}
function MTMManager() {
    this.logger = $("<div id='mtm.logger'></div>");      
    this.setupLogger = function () {
        addStyleSheet( '#mtm.logger { height: 200px, position:sticky; bottom: 0px; }');
    };
    this.log = function (value) {
        this.logger.append($("<div class='mtm.log'>"+ value+"</div>"));
    }
}
var mtm;
$(function () {
    mtm = new MTMManager();
});