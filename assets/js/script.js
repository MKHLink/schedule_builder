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

$("#save0").on("click",function()
{
    var task = document.getElementById("todo0").value;
    localStorage.setItem("todo0",task);
    alert("Saved");
});

$("#save1").on("click",function()
{
    var task = document.getElementById("todo1").value;
    localStorage.setItem("todo1",task);
    alert("Saved");
});

$("#save2").on("click",function()
{
    var task = document.getElementById("todo2").value;
    localStorage.setItem("todo2",task);
    alert("Saved");
});

$("#save3").on("click",function()
{
    var task = document.getElementById("todo3").value;
    localStorage.setItem("todo3",task);
    alert("Saved");
});

$("#save4").on("click",function()
{
    var task = document.getElementById("todo4").value;
    localStorage.setItem("todo4",task);
    alert("Saved");
});

$("#save5").on("click",function()
{
    var task = document.getElementById("todo5").value;
    localStorage.setItem("todo5",task);
    alert("Saved");
});

$("#save6").on("click",function()
{
    var task = document.getElementById("todo6").value;
    localStorage.setItem("todo6",task);
    alert("Saved");
});

$("#save7").on("click",function()
{
    var task = document.getElementById("todo7").value;
    localStorage.setItem("todo7",task);
    alert("Saved");
});

$("#save8").on("click",function()
{
    var task = document.getElementById("todo8").value;
    localStorage.setItem("todo8",task);
    alert("Saved");
});


loadEvents();

function loadEvents()
{
    for(var i = 0;i<9;i++)
    {
        document.getElementById("todo"+i).value=localStorage.getItem("todo"+i);
    }
}
