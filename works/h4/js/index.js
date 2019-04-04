$(document).ready(function () {

    $('#sure-btn').on('click',function (e) {
        var values=$('input');
        var telReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/;
        var mailReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
        
        var mail = values.eq(2).val();
        var tel = values.eq(3).val();
        if(!mailReg.test(mail)){
            alert("邮件不合格");
            return;
        }
        if (!telReg.test(tel)) {
            alert("电话不合格");
            return;
        }
        alert('注册成功');
    })
    
})