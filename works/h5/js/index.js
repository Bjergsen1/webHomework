$(document).ready(function () {

    $('#sure-btn').on('click', function (e) {
        var $inputs = $('input');

        var mail = $inputs.eq(0).val();
        var p1 = $inputs.eq(1).val();
        var p2 = $inputs.eq(2).val();
        var tel = $inputs.eq(3).val();
        if(mail==null||mail==''){
            addred($inputs.eq(0));
        }else{
            removered($inputs.eq(0));
        }

        if (p1 ==mail) {
            addred($inputs.eq(1));
            $inputs.eq(1).siblings('div.tips').children().html("密码与用户名不能相同");
        } else {
            removered($inputs.eq(1));
            $inputs.eq(1).siblings('div.tips').children().html("");
        }

        var telReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/;
        if (!telReg.test(tel)) {
            addred($inputs.eq(3));
            $inputs.eq(3).siblings('div.tips').children().html("请输入正确手机号");
        } else {
            removered($inputs.eq(3));
            $inputs.eq(3).siblings('div.tips').children().html("");
        }
    })

    /**
     * 增加红色
     * @param {Object} $input 
     */
    function addred($input) {
        $input.addClass('red2');
        let $i = $input.siblings('div.tips').children();
        $i.addClass('red');
    }

    /**
     * 移除红色
     * @param {Object} $input 
     */
    function removered($input) {
        $input.removeClass('red2');
        let $i = $input.siblings('div.tips').children();
        $i.removeClass('red');
    }

})