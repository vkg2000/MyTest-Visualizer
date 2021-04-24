
//Saving all questions with their option and correct answers

var ques =[


//MATH

    [
    {

        question : "What is the sum of first two prime numbers?",

        choiceA : "5",

        choiceB : "8",

        choiceC : "4",

        correct : "A"

    },


    {

        question : "What is the difference between the largest three digit number and the smallest four digit number?",

        choiceA : "3",

        choiceB : "1",

        choiceC : "2",

        correct : "B"

    },
    
    {

        question : "What is the smallest odd prime number?",

        choiceA : "3",

        choiceB : "2",

        choiceC : "5",

        correct : "A"

    },

    {

        question : "What is the largest three digit even number?",

        choiceA : "908",

        choiceB : "1011",

        choiceC : "998",

        correct : "C"

    },


    {

        question : "How many prime numbers are there between 1 and 10?",

        choiceA : "3",

        choiceB : "4",

        choiceC : "7",

        correct : "B"

    },
    
    {

        question : "What is the place value of 7 in 417,532?",

        choiceA : "7000",

        choiceB : "4500",

        choiceC : "5000",

        correct : "A"

    },

    {

        question : "How many months have 30 days?",

        choiceA : "10",

        choiceB : "4",

        choiceC : "7",

        correct : "B"

    },
    
    {

        question : "What is the value of 45÷15x 0?",

        choiceA : "0",

        choiceB : "10",

        choiceC : "3",

        correct : "A"

    }
],


///// Chemistry

[
    {

        question : "Animals Which Eat Both Plants And Animals, Called",

        choiceA : " Herbivores",

        choiceB : "Carnivores",

        choiceC : "Omnivores",

        correct : "C"

    },


    {

        question : "Honeybees Makes Honey From",

        choiceA : "Pollen",

        choiceB : "Nectar",

        choiceC : "Petals",

        correct : "B"

    },
    
    {

        question : "Which Of The Following Is Not An Ingredient Of “Kheer”?",

        choiceA : "Milk",

        choiceB : "Rice",

        choiceC : "Salt",

        correct : "C"

        
    },

    {

        question : "Which Part/Parts Of The Banana Plant Is/Are Edible?",

        choiceA : "Fruit",

        choiceB : " Fruit and stem",

        choiceC : "Fruit and leaves",

        correct : "A"

    },
    
    {

        question : "Germination Of Seed Is Known As",

        choiceA : "Sprouts",

        choiceB : "Saplings",

        choiceC : "Vegetation",

        correct : "A"

    }

],


////Physics

[
    {

        question : "Which Of The Following Does Not Express A Time Interval?",

        choiceA : "Time of the first bell in the school",

        choiceB : "A Second",

        choiceC : "A school period",

        correct : "A"

    },


    {

        question : "Consider The Following Statements And Choose The Incorrect One:",

        choiceA : "In rectilinear motion object moves along a straight line",

        choiceB : "Motion of an object or a part of it around a fixed point is known as axis motion",

        choiceC : "The SI unit of length is meter.",

        correct : "B"

    },
    
    {

        question : "The Girth Of A Tree Can Be Measured By Using A:",

        choiceA : "Plastic ruler",

        choiceB : "Meter rod",

        choiceC : " Measuring tape",

        correct : "C"

    },

    {

        question : "Which Of The Following Type Of Motion Are Possessed By A Football Rolling On The Ground?",

        choiceA : "Rotational motion and Rectilinear motion",

        choiceB : "Rectilinear motion and Circular motion",

        choiceC : "Rotational motion and Circular motion",

        correct : "A"

    },


    {

        question : "Vale of g",

        choiceA : "9.8",

        choiceB : "12",

        choiceC : "3",

        correct : "A"

    },
    
    {

        question : "When A Magnet Is Placed On A Plastic Plate With Common Pins Spread On It, Then What Will Happen:",

        choiceA : "Heat can destroy magnetic properties of a magnet.",

        choiceB : "There is a maximum attraction in middle of a magnet.",

        choiceC : "Magnetite it does not show magnetic properties.",

        correct : "C"

    }

],


////Communication
[
    {

        question : "I ____ tennis every Sunday morning.",

        choiceA : "playing",

        choiceB : "play",

        choiceC : "am play",

        correct : "B"

    },


    {

        question : "Don't make so much noise. Noriko ______ to study for her ESL test!",

        choiceA : "is trying",

        choiceB : "try",

        choiceC : "tries",

        correct : "A"

    },
    
    {

        question : "Jun-Sik ______ his teeth before breakfast every morning.",

        choiceA : "clean",

        choiceB : "cleans",

        choiceC : "will cleaned",

        correct : "B"

    },

    {

        question : "Sorry, she can't come to the phone. She ____ a bath!",

        choiceA : "is having",

        choiceB : "having",

        choiceC : "have",

        correct : "A"

    },


    {

        question :"___ many times every winter in Frankfurt.",

        choiceA : "It snowed",

        choiceB : "It snows",

        choiceC : "It is snowing",

        correct : "B"

    },
    
    {

        question : "How many students in your class ___ from Korea?",

        choiceA : "comes",

        choiceB : "are coming",

        choiceC : "come",

        correct : "C"

    },
    {

        question : "Babies cry when they are hungry.",

        choiceA : "cry",

        choiceB : "cried",

        choiceC : "cries",

        correct : "A"

    },


    {

        question : "	Sorry, you can't borrow my pencil. I ____ it myself.",

        choiceA : "was using",

        choiceB : "using",

        choiceC : "am using",

        correct : "C"

    },
    


],


];


//Hepler variables and arrays

var section = ["Mathematics", "Chemistry", "Physics", "Communication"];

var score =[0,0,0,0];

var total = [ques[0].length,ques[1].length,ques[2].length,ques[3].length];


const last_sec =4;    //Since total section are 4
var running_ques=0;   //Tell about curr question solving
var running_section=0;  //Telll about current section we are in


//Showing all questions

function ShowQuestion(){

        uncheck();  // Clearing the checkboxes while going to other question

        if(running_ques==ques[running_section].length-1 && running_section==last_sec-1)
        {
            document.getElementById("Submit").style.display ="none";
            document.getElementById("Next").style.display ="none";
            document.getElementById("nextsection").style.display ="none"; 
            document.getElementById("result").style.display ="inline";

        }


        else if (running_ques==ques[running_section].length-1)
        {
            document.getElementById("Submit").style.display ="none";
            document.getElementById("Next").style.display ="none";
            document.getElementById("nextsection").style.display ="inline"; 
 
        }

        if(running_ques<ques[running_section].length)
        {

            document.getElementById("section").innerHTML = "<p>"+ section[running_section] +"</p>";

            document.getElementById("question").innerHTML = "<p>  Question "+ (running_ques+1) +": "+ ques[running_section][running_ques].question +"</p>";

            document.getElementById("A").innerHTML = ques[running_section][running_ques].choiceA;
        
            document.getElementById("B").innerHTML = ques[running_section][running_ques].choiceB;
        
            document.getElementById("C").innerHTML = ques[running_section][running_ques].choiceC;


        }

        

}


//After starting the quiz ,displaying the main question panel

document.getElementById("startbtn").onclick = function () {
    document.getElementById("start").style.display = 'none';
    document.getElementById("main").style.display = 'block';
}



//Events take place on clicking different Buttons

document.getElementById("Submit").onclick = function () {
    //checkans
    checkanswer();  // Checks whether the anser is correct or not
    running_ques++;
    ShowQuestion();
}

document.getElementById("Next").onclick = function () {
    //checkans
    checkanswer();  // Checks whether the anser is correct or not
    running_ques++;
    ShowQuestion();
}

document.getElementById("nextsection").onclick = function () {
    //checkans
    checkanswer();  // Checks whether the anser is correct or not
    running_section++;
    running_ques=0;

    //Disbling and displaying the required buttons

    document.getElementById("Submit").style.display ="inline";
    document.getElementById("Next").style.display ="inline";
    document.getElementById("nextsection").style.display ="none"; 
    ShowQuestion();

}


document.getElementById("result").onclick = function () {
    checkanswer();
    getplots();  //Plot function which plots all the charts
}


// Checkanswer() Checks whether the anser is correct or not

function checkanswer()
{
    var check_arr=document.forms[0];
    var i;
    for(i=0;i<check_arr.length;i++)
        {
            //console.log(check_arr[i].value);
            if(check_arr[i].checked && check_arr[i].value==ques[running_section][running_ques].correct)
                {
                    score[running_section]++;
                    //console.log(score[running_section]);
                }

        }
}

// This helps in clearing the checkboxes while going to other question

function uncheck() {
    var check_arr=document.forms[0];
    var i;
    for(i=0;i<check_arr.length;i++)
        {
            if(check_arr[i].checked)
                check_arr[i].checked=false;
        }
}


//Main plot function from where calling different plot function used for plotting different charts

function getplots(){
    document.getElementById("main").style.display="none";
    document.getElementById("navbar").style.display="none";
    document.getElementById("final").style.display="block";

    //Calling different plot function for different type of chart

    plotbar();
    plothisto();
    plotpie();
    plotdonut();
    }



    //Function for ploting bar chart
   //Google chart has been used for plotting all the charts

    function plotbar(){



        var plot_arr=[0,0,0,0]; //For storing perencentage marks
        var i;
        for(var i=0;i<last_sec;i++)
            plot_arr[i]=(score[i]/total[i])*100;  //For storing perencentage marks
        
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawStuff);
  
        function drawStuff() {

            //Input to google chart of percentage obtained i different subjects

        var data = new google.visualization.arrayToDataTable([
            ['Subject', 'Percentage'],
            ['Mathematics', plot_arr[0]],
            ["Chemistry", plot_arr[1]],
            ["Physics", plot_arr[2]],
            ["Communication", plot_arr[3]],
          ]);
  
          var options = {
            title: 'Subject Wise Performance',
            width: 1000,
            legend: { position: 'none' },
            bars: 'horizontal', // Required for Material Bar Charts.
            axes: {
              x: {
                0: { side: 'top', label: 'Percentage'} // Top x-axis.
              }
            },
            bar: { groupWidth: "90%" }
          };
  
          var chart = new google.charts.Bar(document.getElementById('top_x_div'));
          chart.draw(data, options);
        };
    }


    //Function for ploting bar chart
    //Google chart has been used for plotting all the charts

    function plothisto()
    {

        var plot_arr=[0,0,0,0];  //For storing perencentage marks
        var i;
        for(var i=0;i<last_sec;i++)
            plot_arr[i]=(score[i]/total[i])*100;  //For storing perencentage marks

        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {


        //Input to google chart of percentage obtained i different subjects
        var data = google.visualization.arrayToDataTable(
            [
            ['Subject', '% Score'],
            ['Mathematics', plot_arr[0]],
            ["Chemistry", plot_arr[1]],
            ["Physics", plot_arr[2]],
            ["Communication", plot_arr[3],
            ]
            ]);

        var options = {
            title: 'Score in Different Subject',
            legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('histogram'));
        chart.draw(data, options);
        }

    }



    //Function for ploting pie chart
    //Google chart has been used for plotting all the charts

    function plotpie(){

        var plot_arr=[0,0,0,0];  //For storing perencentage marks
        var i;
        for(var i=0;i<last_sec;i++)
            plot_arr[i]=(score[i]/total[i])*100; //For storing perencentage marks

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
    
            function drawChart() {
    
            //Input to google chart of percentage obtained i different subjects

            var data = google.visualization.arrayToDataTable([
                ['Subject', '% Contribution of each subject'],
                ['Mathematics', plot_arr[0]],
                ["Chemistry", plot_arr[1]],
                ["Physics", plot_arr[2]],
                ["Communication", plot_arr[3]]
            ]);
    
            var options = {
                title: '% Contribution of each subject in Overall score'
            };
    
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    
            chart.draw(data, options);
            }


        }

    // Function for ploting donut chart
    //Google chart has been used for plotting all the charts

    function plotdonut(){

        var plot_arr=[0,0,0,0];  //For storing perencentage marks
        var i;
        for(var i=0;i<last_sec;i++)
            plot_arr[i]=(score[i]/total[i])*100;  //For storing perencentage marks

        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

            //Input to google chart of percentage obtained i different subjects
            
            var data = google.visualization.arrayToDataTable([
                ['Subject', '% Contribution of each subject'],
                ['Mathematics', plot_arr[0]],
                ["Chemistry", plot_arr[1]],
                ["Physics", plot_arr[2]],
                ["Communication", plot_arr[3]]
            ]);

            var options = {
            title: '% Contribution of each subject in Overall score',
            pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }

        }


//Intially calling the showquestion function after starting the quiz

ShowQuestion();









