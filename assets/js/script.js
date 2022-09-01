var date = moment().format('dddd');
$("#currentDay").append(date);


//var taskEvent=[];
//event creator

/*$(".task").on("click", function(){
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("col-6 text").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});*/


//save task

$("#save").on("click",function()
{
    var task = document.getElementById("todo").value;
    localStorage.setItem("todo",task);
    alert("Saved");
    console.log(task);
});

loadEvents();

function loadEvents()
{
    document.getElementById("todo").value=localStorage.getItem("todo");
}
