import 'jquery-validation';
import 'imask';

document.addEventListener('DOMContentLoaded', () => {

    (function() {
        $('form').each(function() {
            jQuery.validator.addMethod("checkMask", function (e, t) {
                return /.\d..\d{3}..\d{3}.\d{2}.\d{2}/g.test(e);
            });
            jQuery.validator.addMethod("checkDate", function (e, t) {
                return /\d\d.\d\d.\d\d\d\d/g.test(e);
            });
            jQuery.validator.addMethod("checkTime", function (e, t) {
                return /[0-2][0-9]\:[0-5][0-9]/g.test(e);
            });

            $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    phone: {
                        required: true,
                        checkMask: true
                    },
                    email: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                        email: true
                    },
                    date: {
                        required: true,
                        checkDate: true
                    },
                    time: {
                        required: true,
                        checkTime: true
                    }
                },
            });
        });

        let elements = document.querySelectorAll('input[name="phone"]');
        let maskOptions = {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        };
        elements.forEach(element => {
            element.addEventListener('focus', () => {
                let mask = IMask(element, maskOptions);
            }); 
        });

        let dateInputs = document.querySelectorAll('input[name="date"]');
        let dateMaskOptions = {
            mask: Date,
            min: new Date(1111, 0, 1),
            max: new Date(9999, 0, 1),
            lazy: false
        };
        dateInputs.forEach(el=> {
            el.addEventListener('focus', () => {
                let mask = IMask(el, dateMaskOptions);
            }); 
        });

        let timeInputs = document.querySelectorAll('input[name="time"]');
        let timeMaskOptions = {
            mask: '00:00',
            lazy: false
        };
        timeInputs.forEach(el=> {
            el.addEventListener('focus', () => {
                let mask = IMask(el, timeMaskOptions);
            }); 
        });
    }());

});