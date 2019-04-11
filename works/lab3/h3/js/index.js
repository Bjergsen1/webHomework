$(function (e) {

    $('#demoGet').on('click',function () {
        $.ajax({
            url:'js/json/GET.json',
            type:'GET',
            headers:{
                'content-Type':'application/json;charset=utf-8'
            },
            dataType:'json',
            success:function (res) {
                console.log(res);
            },
            error:function (error) {
                console.log(error);
            }
        })
    })

    $('#demoPost').on('click', function () {
        $.ajax({
            url: 'js/json/POST.json',
            type: 'POST',
            headers: {
                'content-Type': 'application/json;charset=utf-8'
            },
            dataType: 'json',
            data:JSON.stringify({
                stuNo: "XXX",
                stuName: "XXX",
                stuGrade: "XXX"
            }),
            success: function (res) {
                console.log(res);
            },
            error: function (error) {
                console.log(error);
            }
        })
    })
})