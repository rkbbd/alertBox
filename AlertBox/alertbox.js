(function (window) {
    function R() {
        var _returnObject = {};
        "use strict";
        var _init = {};
        let ids = new Array();
        const _defaults = {
            _duration: 500,
            _iterations: 1,
            _easing: "ease-in",
            _timeout: 3000,
            _position: "rightBottom"
        };
        var translateX = { rightBottom: -30, leftBottom: 30, topRight: -30, topLeft: 30 };
        var translateY = { rightBottom: -30, leftBottom: -30, topRight: 30, topLeft: 30 };
        _returnObject.getConfig = function () {
            return _init;
        }
        _returnObject.config = function (opt = {}) {
            _init = {
                _duration: opt._duration ? opt._duration : _defaults._duration,
                _iterations: opt._iterations ? opt._iterations : _defaults._iterations,
                _easing: opt._easing ? opt._easing : _defaults._easing,
                _timeout: opt._timeout ? opt._timeout : _defaults._timeout,
                _position: opt._position ? opt._position : _defaults._position,
            };
            return _init;
        }
        //----------------------------Setup START--------------------------------
        _returnObject.Author = function () {
            console.log(
                "%c Develop by MD. RAKIB HASAN ",
                "background: #b0cc7f; color:black ;"
            );
        };
        _returnObject.Contact = function () {
            console.log(
                "%c rakib424@gmail.com ",
                "background: #b0cc7f; color:black ;"
            );
        };
        Initializer = function (id, message, timeout, position) {
            if(Object.keys(_init).length <= 0){
                _returnObject.config();
            }
            let elements = document.getElementsByClassName('alert-container');
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
            ids.push(id);
            let _position = position.length > 2 ? position : _init._position;
            var myDiv = document.createElement("div");
            myDiv.innerHTML = ("<div id='" + id + "' class='alert-container " + _position + "'><div id='content-block'>" + message + "</div></div>");
            document.body.appendChild(myDiv);
            let _selector = document.getElementById(id)
            _selector.animate([
                { transform: 'translateX(' + translateX[_position] + 'px) translateY(' + translateY[_position] + 'px)' },
                { transform: 'translateY(0px)' },
            ], {
                duration: _init._duration,
                iterations: _init._iterations,
                easing: _init._easing
            });
            setTimeout(() => {
                _selector.remove();
                const index = ids.indexOf(id);
            if (index > -1) {
                ids.splice(index, 1);
            }
            //ToDo: developer love bugs
            }, timeout > 0 ? timeout : _init._timeout);
        }
        //----------------------------Setup END----------------------------------

        _returnObject.success = function (message, timeout = 0, position = '') {
            let count = ids.length + 1;
            Initializer(count, message, timeout, position);
            document.getElementById(count).classList.add('success')
        },
            _returnObject.error = function (message, timeout = 0, position = '') {
                let count = ids.length + 1;
                Initializer(count, message, timeout, position);
                document.getElementById(count).classList.add('error')

            },
            _returnObject.warning = function (message, timeout = 0, position = '') {
                let count = ids.length + 1;
                Initializer(count, message, timeout, position);
                document.getElementById(count).classList.add('warning')
            },
            _returnObject.message = function (message, timeout = 0, position = '') {
                let count = ids.length + 1;
                Initializer(count, message, timeout, position);
                document.getElementById(count).classList.add('message')
            }
        return _returnObject;
    };

    if (typeof (window.alertBox) === 'undefined') {
        window.alertBox = R();
    }
})(window);


