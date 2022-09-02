var date = moment().format('dddd');
$("#currentDay").append(date);

//var changeClass = document.querySelector(".task");
//var classes = changeClass.classList;

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

//test
function checkTime(x)
    {
        var currentTime = moment().format('HH');
        
        if(x==currentTime){
            
            $(".task").each(function()
            {
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });
                
            
        }
        else if(x>currentTime){
            $(".task").each(function()
            {
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-success")
            });
                
            
        }
        else
        {
            $(".task").each(function()
            {
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-secondary")
            });
                
            
        }
    }

setInterval(function()
{
    for(var i=09;i<18;i++)
    {
        checkTime(i);
        console.log(i);
    }
},5000);