<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Rachel's portfolio showcasing web design and development projects. Specialising in HTML and CSS.">
		<meta name="keywords" content="Rachel Bull, HTML, CSS, web design, web development, portfolio">
		<title>Rachel Bull</title>

		<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
		<script src="js/angular.min.js" type="text/javascript"></script>
		<script src="js/angular-route.min.js" type="text/javascript"></script>
		<script src="js/angular-animate.min.js" type="text/javascript"></script>
		<script src="js/script.js" type="text/javascript"></script>

		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/styles.css">
		<link rel="stylesheet" href="css/london-eye.css">
		<link rel="stylesheet" href="css/page-transitions.css">
		<link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700|Open+Sans:300,400,700|Pacifico" rel="stylesheet">
	</head>
	<body ng-app="myApp">
		<div ng-controller="landingController">
			<ng-include class="container__header" src="'header.html'" [onload="string"] autoscroll="string"]></ng-include>
			<div class="container__content">
				<div ng-view class="page {{ pageClass }} at-view-fade-in at-view-fade-out"></div>
			</div>
			<ng-include class="container__footer" src="'footer.html'" [onload="string"] autoscroll="string"]></ng-include>
		</div>
	</body>
</html>
