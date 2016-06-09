<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" href="/css/semantic.css">
		<title>Wissen</title>
	</head>
	<body>
		
		<div class="ui top menu">
			<div class="header item">Wissen</div>
			<div class="ui dropdown icon item">
				<i class="wrench icon"></i>
				<div class="menu">
					<div class="item">
						<i class="dropdown icon"></i>
						<span class="text">New</span>
						<div class="menu">
							<div class="item">Document</div>
							<div class="item">Image</div>
						</div>
					</div>
					<div class="item">Open...</div>
					<div class="item">Save...</div>
					<div class="item">Edit Permissions</div>
					<div class="divider"></div>
					<div class="header">Export</div>
					<div class="item">Share...</div>
				</div>
			</div>
			<div class="right menu">
				<div class="ui right aligned category search item">
					<div class="ui transparent icon input">
						<input class="prompt" type="text" placeholder="Search animals...">
						<i class="search link icon"></i>
					</div>
					<div class="results"></div>
				</div>
			</div>
		</div>
		
		<h1 class="ui center aligned icon header">
			<i class="circular book icon"></i>
			<div class="content">
				Wissen
				<div class="sub header">Flashcard repository</div>
			</div>
		</h1>
		
		<div class="ui container">
			<div class="ui one cards">
			<div class="card">
				<div class="content">
					<div class="header center aligned">What is the capital of Hungary?</div>
					<div class="meta">
						<span>June 8th 2016</span>
						<a href="#">Geography</a>
					</div>
					<div class="description">
						<div class="ui list">
							<div class="item">
								<a class="header">Answer</a>
								<div class="description">Budapest</div>
							</div>
							<div class="item">
								<a class="header">Details</a>
								<div class="description">Budapest is the capital and the largest city of Hungary, and one of the largest cities in the European Union</div>
							</div>
							<div class="item">
								<a class="header">References</a>
								<div class="description">Wikipediaorg. (2016). Wikipediaorg. Retrieved 9 June, 2016, from https://en.wikipedia.org/wiki/Budapest</div>
							</div>
						</div>
					</div>
				</div>
				<div class="extra content">
					<i class="lightning icon"></i>1023 views
					<div class="right floated author">
						<img class="ui avatar image" src="https://api.adorable.io/avatars/50/seifer"> seifer
					</div>
				</div>
			</div>
			</div>
		</div>
		
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
		<script src="/js/semantic.js"></script>
		<script>
			$('.ui.dropdown')
			  .dropdown()
			;
		</script>
	</body>
</html>