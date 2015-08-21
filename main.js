/**
 * Created by CooTek on 2015/8/20.
 */

(function() {

    var block = $('#animation-block');
    var onlyOneTime = {
        'top': true,
        'translate': true,
        'transform': true
    };

    var startTimeStamp = 0;
    var endTimeStamp = 0;

    ['transitionEnd','webkitTransitionEnd'].forEach(function(item, pos) {
        $(block).on(item, function() {
            endTimeStamp = Date.parse(new Date());
            $('#time-text').text(endTimeStamp-startTimeStamp);
        });
    });

    $('#reset').on('touchstart', function() {
        $('#animation-block').attr('style', '');
    });

    $('#top').on('touchstart', function() {
        if (onlyOneTime.top === true) {
            onlyOneTime.top = false;

            startTimeStamp = Date.parse(new Date());
            block.css({
                '-webkit-transform': '',
                'transform': '',
                'top': '-5000px'
            });
        }
    });

    $('#translate').on('touchstart', function() {
        if (onlyOneTime.translate === true) {
            onlyOneTime.translate = false;

            startTimeStamp = Date.parse(new Date());
            block.css({
                'left': '',
                '-webkit-transform': 'translateY(-5000px)',
                'transform': 'translateY(-5000px)'
            });
        }
    });

    $('#transform').on('touchstart', function() {
        if (onlyOneTime.transform === true) {
            onlyOneTime.transform = false;

            startTimeStamp = Date.parse(new Date());
            block.css({
                'left': '',
                '-webkit-transform': 'translate3d(0, -5000px, 0)',
                'transform': 'translate3d(0, -5000px, 0)'
            });
        }
    });

})();
