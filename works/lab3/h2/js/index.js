$(function (e) {

    //start
    $('#sbt').on('click', function (e) {
        var $inputs = $('input');
        var Name = $inputs.eq(0).val();
        var Email = $inputs.eq(1).val();
        var Salary = $inputs.eq(2).val();

        $('#tbd').append('<tr><td>' + Name + '</td > <td>' + Email + '</td> <td>' + Salary +'</td> <td><a href="javascript:0" class="del">Delete</a></td></tr>');
    })

    $('#tbd').on('click','.del', function (e) {
        $(this).parents('tr').remove();
    })

})