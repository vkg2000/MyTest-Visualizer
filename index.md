<!DOCTYPE html>
<html>

<head>
	<title>MyExam Visualizer</title>
	<link rel="icon" href="images/icon.png">
	<link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
		integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
		integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
		</script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
		integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
		</script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
		integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous">
        </script>
        

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>

    <! -- Basic Infromation division-->

    <div class="title">
		<img style="margin-top: 15px;" src="images/icon.png" height="150px" width="160px">

		<h1 class="logo" style="font-size:300%;">My Test Visualizer</h1>

    </div>

    <div id="navbar">
    <button type="button" class="btn btn-info btn-lg" >Mathematics</button>
    <button type="button" class="btn btn-info btn-lg">Chemistry</button>
    <button type="button" class="btn btn-info btn-lg">Physics</button>
    <button type="button" class="btn btn-info btn-lg">Communication</button>
    </div>



    <! -- Start Quiz Division-->

    <div id="start" >

        <button id="startbtn">
            Start Quiz
        </button>

    </div>




    <! -- Question division-->


    <div id="main" style="display: none">


        <div id="section">
        </div> 
        <div id="question"></div>

        <div id="choices">

            <form>


            <input type="radio" name="check" id="optionA" value="A" >
            <label for="optionA" > 
                <p id = "A"></p> 
            </label><br>

            <input type="radio" name="check"  id="optionB" value="B">
            <label for="optionB" > 
                <p id = "B"></p> 
            </label><br>

            <input type="radio" name="check" id="optionC" value="C">
            <label for="optionC" > 
                <p id ="C"></p> 
            </label><br>

            </form>

        </div>

        <div id ="submit_buttons">
                <button id="Submit">Submit</button> 
                <button id="Next">Next</button> 
                <button id="nextsection" >Submit and Go To Next Section</button>
                <button id="result" >Submit and Go To Final Result</button>
        </div>

    </div>
    

    
    <div id="final">

 
        <! -- Plotting division-->


        <h2 id="headings">Visualization 1: Bar Chart</h2>

        <div id="top_x_div" style="width: 900px; height: 500px;"></div>

        <h2 id="headings">Visualization 2: Histogram </h2>

        <div id="histogram" style="width: 900px; height: 500px;"></div>

        <h2 id="headings">Visualization 3: Pie Chart</h2>

        <div id="piechart" style="width: 900px; height: 500px;"></div>

        <h2 id="headings">Visualization 4: Donut Chart</h2>

        <div id="donutchart" style="width: 900px; height: 500px;"></div>

    </div>


</body>
<script type="text/javascript" src="script.js"></script>

</html>
