/*
	Lens by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded, running main.js");
    if (typeof main !== 'undefined' && typeof main.init === 'function') {
        main.init();
    } else {
        console.error("Error: main.js did not load properly.");
    }
});

var main = (function($) {
    var _ = {
        settings: {
            preload: false,
            slideDuration: 500,
            layoutDuration: 750,
            thumbnailsPerRow: 2,
            mainSide: 'right'
        },

        $window: null,
        $body: null,
        $main: null,
        $thumbnails: null,
        $viewer: null,
        $toggle: null,
        $navNext: null,
        $navPrevious: null,
        slides: [],
        current: null,
        locked: false,

        initProperties: function() {
            console.log("Initializing properties...");
            _.$window = $(window);
            _.$body = $('body');
            _.$main = $('#main');
            _.$thumbnails = $('#thumbnails');
            console.log("Thumbnails:", _.$thumbnails);
            if (!_.$thumbnails || _.$thumbnails.length === 0) {
                console.error("Error: No thumbnails found!");
            }
            _.$viewer = $('<div id="viewer"><div class="inner"><div class="nav-next"></div><div class="nav-previous"></div><div class="toggle"></div></div></div>').appendTo(_.$body);
            _.$navNext = _.$viewer.find('.nav-next');
            _.$navPrevious = _.$viewer.find('.nav-previous');
            $('<div class="toggle"></div>').appendTo(_.$main);
            _.$toggle = $('.toggle');
        },

        init: function() {
            _.initProperties();
            console.log("main.js initialized successfully.");
        },

        switchTo: function(index) {
            if (!_.slides || !_.slides[index]) {
                console.error("Error: Invalid slide index.");
                return;
            }
            console.log("Switching to slide:", index);
            var newSlide = _.slides[index];
            if (!newSlide.$parent) {
                console.error("Error: Slide has no parent element.");
                return;
            }
        }
    };
    
    return _;
})(jQuery);
/*
	Lens by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded, running main.js");
    if (typeof main !== 'undefined' && typeof main.init === 'function') {
        main.init();
    } else {
        console.error("Error: main.js did not load properly.");
    }
});

var main = (function($) {
    var _ = {
        settings: {
            preload: false,
            slideDuration: 500,
            layoutDuration: 750,
            thumbnailsPerRow: 2,
            mainSide: 'right'
        },

        $window: null,
        $body: null,
        $main: null,
        $thumbnails: null,
        $viewer: null,
        $toggle: null,
        $navNext: null,
        $navPrevious: null,
        slides: [],
        current: null,
        locked: false,

        initProperties: function() {
            console.log("Initializing properties...");
            _.$window = $(window);
            _.$body = $('body');
            _.$main = $('#main');
            _.$thumbnails = $('#thumbnails');
            console.log("Thumbnails:", _.$thumbnails);
            if (!_.$thumbnails || _.$thumbnails.length === 0) {
                console.error("Error: No thumbnails found!");
            }
            _.$viewer = $('<div id="viewer"><div class="inner"><div class="nav-next"></div><div class="nav-previous"></div><div class="toggle"></div></div></div>').appendTo(_.$body);
            _.$navNext = _.$viewer.find('.nav-next');
            _.$navPrevious = _.$viewer.find('.nav-previous');
            $('<div class="toggle"></div>').appendTo(_.$main);
            _.$toggle = $('.toggle');
        },

        init: function() {
            _.initProperties();
            console.log("main.js initialized successfully.");
        },

        switchTo: function(index) {
            if (!_.slides || !_.slides[index]) {
                console.error("Error: Invalid slide index.");
                return;
            }
            console.log("Switching to slide:", index);
            var newSlide = _.slides[index];
            if (!newSlide.$parent) {
                console.error("Error: Slide has no parent element.");
                return;
            }
        }
    };
    
    return _;
})(jQuery);
