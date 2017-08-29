<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>MINIMO</title>
        
       <!--czcionki-->
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display:400,400i,700,700i|Ubuntu:300,300i,400,400i,500,500i,700&amp;subset=latin-ext" rel="stylesheet">
        
        <!--dopiero potem załadować CSS-->
        <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>
        
        <script type="text/javascript" src="./assets/js/jquery-3.2.1.min.js"></script>
        <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <script type="text/javascript" src="./assets/js/app.js"></script>
    </head>
    <body>
        <header class ="container-fluid">
            
                <nav>
                    <div class="navbar-header col-xs-12 col-md-3">
                        <a class="navbar-brand" href="#"><img src="./assets/images/logo.png"></a>
                    </div>
                    <ul class="nav navbar-nav pull-right">
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Photodiary</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Travel</a></li>
                    </ul>
                </nav>
           
        </header>
        
        
        <div class="container-fluid">
  
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="thumbnail item active">
                    <img src="./assets/images/big_image.png" alt="Los Angeles" style="width:100%;">
                    <div class="caption">
                        <h6 class="headerOfThumb">PHOTODIARY</h6>
                        <h3 class="mainThumbnailHeader">The perfect weekend getaway</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                    </div>
                </div>

                <div class="thumbnail item">
                    <img src="./assets/images/american.png" alt="Los Angeles" style="width:100%;">
                    <div class="caption">
                        <h6 class="headerOfThumb">PHOTODIARY</h6>
                        <h3 class="mainThumbnailHeader">The perfect weekend getaway</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                    </div>
                </div>
    
                <div class="thumbnail item">
                    <img src="./assets/images/song.png" alt="Los Angeles" style="width:100%;">
                    <div class="caption">
                        <h6 class="headerOfThumb">PHOTODIARY</h6>
                        <h3 class="mainThumbnailHeader">The perfect weekend getaway</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                    </div>
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        
        
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="thumbnail">
                        <img src="./assets/images/festival.png" alt="More than just a fest">
                        <div class="caption">
                            <h6 class="headerOfThumb">LIFESTYLE</h6>
                            <h3 class="mainThumbnailHeader">More than just a music festival</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                            
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="thumbnail">
                        <img src="./assets/images/fotografico.png" alt="Foto">
                        <div class="caption">
                            <h6 class="headerOfThumb">LIFESTYLE</h6>
                            <h3 class="mainThumbnailHeader">Life tastes better with coffee</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="thumbnail">
                        <img src="./assets/images/american.png" alt="More than just a fest">
                        <div class="caption">
                            <h6 class="headerOfThumb">PHOTODIARY</h6>
                            <h3 class="mainThumbnailHeader">American dream</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                            
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="thumbnail">
                        <img src="./assets/images/alps.png" alt="Foto">
                        <div class="caption">
                            <h6 class="headerOfThumb">PHOTODIARY</h6>
                            <h3 class="mainThumbnailHeader">A day exploring the Alps</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container-fluid jumbotron newsletter">
            <form align="center">
                <h2 id="newsletterHeader">Sign up for our newsletter!</h2>
                <input placeholder="Enter a valid email address"><span class="glyphicon glyphicon-send" aria-hidden="true"></span>
            </form>
     
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="thumbnail">
                        <img src="./assets/images/song.png" alt="More than just a fest">
                        <div class="caption">
                            <h6 class="headerOfThumb">LIFESTYLE</h6>
                            <h3 class="mainThumbnailHeader">Top 10 song for running</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                            
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="thumbnail">
                        <img src="./assets/images/cold.png" alt="Foto">
                        <div class="caption">
                            <h6 class="headerOfThumb">LIFESTYLE</h6>
                            <h3 class="mainThumbnailHeader">Cold winter days</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat sit amet ante nec eleifend. In hac habitasse platea dictumst. Mauris orci nisi, suscipit nec nisl non, varius rhoncus leo.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <button text-align="center" class="btn btn-default">Load more</button>
            </div>
            
            
            <div id="dziura"></div>
        </div>
        
        <footer class="container-fluid jumbotron">
            
            
        </footer>
        
        <?php
        // put your code here
        ?>
        
        
            
	
    </body>
</html>
