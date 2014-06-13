modules.define('keyboard', ['keyboard__codes', 'ua'], function(provide, codes, ua) {
    var KEYDOWN_EVENT = (ua.opera && ua.version < 12.10) ? 'keypress' : 'keydown';

    provide({
        codes: codes,
        event:  KEYDOWN_EVENT
    });
});
