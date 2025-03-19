$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});

$(document).on("change", "input[type=checkbox]", 
    function () {
        if ($(this).is(":checked")) {
            // console.log($(this).parent());
            // thisはinput,this.parentはliタグを指している。
            $(this).parent().css("text-decoration", "line-through");
        }else{
            $(this).parent().css("text-decoration", "none");  
        }
    }
);