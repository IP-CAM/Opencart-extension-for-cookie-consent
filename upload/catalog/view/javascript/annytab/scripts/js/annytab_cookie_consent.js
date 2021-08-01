var annytab = annytab || {};
annytab.cookies = (function () {

    'use_strict';

    // Run when the document is ready
    document.addEventListener('DOMContentLoaded', function() {
        if (getCookie('CookieConsent') === null) {
            $('.annytab-cookie-consent').fadeIn(200);
        }
    }, false);

    // Set a cookie
    function setCookie(key, value, days) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();

    } // End of the setCookie method

    // Get a cookie
    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    } // End of getCookie method

    // Public methods
    return {
        // Set cookie consent
        setCookieConsent: function () {
            setCookie('CookieConsent', true, 360);
            $('.annytab-cookie-consent').fadeOut(200);

        } // End of the setCookieConsent method
    };

})();