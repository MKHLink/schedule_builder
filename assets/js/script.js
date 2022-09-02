//shows the date
var date = moment().format('dddd');
$("#currentDay").append(date);

checkTime();

//Lets the user save their tasks via the button
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

//load from local storage functions and its call
loadEvents();

function loadEvents()
{
    for(var i = 0;i<9;i++)
    {
        document.getElementById("todo"+i).value=localStorage.getItem("todo"+i);
    }
}

//a function to check the current time and compare it against the business hours 
//sets different background colors according to the due time of the task
function checkTime()
    {
        var currentTime = moment().format('HH');

        if(currentTime==09)
        {
            $(".task1").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 2;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==10)
        {
            for(var i = 1;i<2;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task2").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 3;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==11)
        {
            for(var i = 1;i<3;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task3").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 4;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==12)
        {
            for(var i = 1;i<4;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task4").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 5;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==13)
        {
            for(var i = 1;i<5;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task5").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 6;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==14)
        {
            for(var i = 1;i<6;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task6").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 7;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==15)
        {
            for(var i = 1;i<7;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task7").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 8;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==16)
        {
            for(var i = 1;i<8;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task8").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

            for(var i = 9;i<10;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-success")
                });
            }
        }
        else if(currentTime==17)
        {
            for(var i = 1;i<9;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }

            $(".task9").each(function()
            {   
                $(this).addClass("list-group-item");
                $(this).addClass("list-group-item-danger")
            });

        }
        else
        {   
           for(var i = 1;i<18;i++)
            {
                $(".task"+i).each(function()
                {
                    $(this).addClass("list-group-item");
                    $(this).addClass("list-group-item-secondary")
                });
            }
        }
    }


//calls the function to check due time every hour
setInterval(function()
{
    checkTime();
    
},1000*60*60);


