var testData=[
    {
        title:"河北省",
        children:[
            "河北省的选向1",
            "河北省的选向2",
            "河北省的选向3"
        ]
    },
    {
        title: "辽宁省",
        children: [
            "辽宁省的选向1",
            "辽宁省的选向2",
            "辽宁省的选向3"
        ]
    },
    {
        title: "山东省",
        children: [
            "山东省选向1",
            "山东省选向2",
            "山东省选向3"
        ]
    }
]

$(function() {

    //初始化
    $("#sPre").empty();
    $("#sBack").empty();

    for(var i=0;i<testData.length;i++){
        $('#sPre').append('<option value="'+i+'">'+testData[i].title+'</option>');
    }

    $("#sPre").on('change', function (e) {
        console.log($(this).val());
        $("#sBack").empty();
        for(let i=0;i<testData[$(this).val()].children.length;i++){
            let data=testData[$(this).val()].children;
            $("#sBack").append('<option value="' + i + '">' + data[i] + '</option>');
        }
    })
})
