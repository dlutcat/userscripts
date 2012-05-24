// ==UserScript==
// @name           知了
// @namespace      ZHI
// @description    Beautify zhihu anwser.
// @version        0.1
// @author         dlutcat
// @include        *.zhihu.com/question/*
// ==/UserScript==

GM_info = { 'scriptWillUpdate': true };

GM_addStyle('\
    #ZHI {position: fixed; height: 130px; top: 257px; left:0; width:30px; opacity:0.3, font-family: courier; font-size:16px;} \
    #ZHI:hover { opacity: 1; } \
    #ZHI span {padding: 3px 5px; font-size:14px; background:#eee; border-bottom:1px solid #ddd; display:block; text-align:center;}\
    #ZHI span:hover {cursor: pointer; background:#ddd;} \
    .ZHIday {background:#EDEBE8; color:#2C2D32; padding:20px; line-height:2em;} \
    .ZHInight {background:#343a3f; color:#999; padding:20px; line-height:2em;} \
');

function addJQuery(callback) {
    var script = document.createElement('script');
    script.src = 'http://img3.douban.com/js/packed_jquery.min6301986802.js';
    script.type = 'text/javascript';
    script.addEventListener('load', function () {
        //callback();
        var uscript = document.createElement('script');
        uscript.type = 'text/javascript';
        uscript.textContent = '(' + callback.toString() + ')();';
        document.head.appendChild(uscript);
    }, false);
    document.head.appendChild(script);
}

function main() {

    var bar = [ '<div id="ZHI">',
                    '<span id="ZHI-prev" title="上一个">&and;</span>',
                    '<span id="ZHI-day" title="白天模式">D</span>',
                    '<span id="ZHI-night" title="夜间模式">N</span>',
                    '<span id="ZHI-origin" title="恢复">X</span>',
                    '<span id="ZHI-next" title="下一个">&or;</span>',
                '</div>' ].join('');

    try {
        var $body = $('body'),
            $entries = $('.xpo'),
            $contents = $('.xxkw.xof'),
            count = $entries.length,
            index = 0;


        $body.prepend(bar);

        $body.delegate('#ZHI-prev', 'click', function() {

        });
        $body.delegate('#ZHI-day', 'click', function() {
            $contents.removeClass('ZHIday').removeClass('ZHInight').addClass('ZHIday');
        });
        $body.delegate('#ZHI-night', 'click', function() {
            $contents.removeClass('ZHIday').removeClass('ZHInight').addClass('ZHInight');
        });
        $body.delegate('#ZHI-origin', 'click', function() {
            $contents.removeClass('ZHIday').removeClass('ZHInight');
        });
        $body.delegate('#ZHI-next', 'click', function() {

        });
        
    }
    catch (e) {}
}


addJQuery(main);
