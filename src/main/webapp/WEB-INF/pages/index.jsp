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

		<div class="ui card">
			<div class="content">
				<div class="header">Cute Dog</div>
				<div class="meta">2 days ago</div>
				<div class="description">
					<div class="ui list">
						<div class="item">
							<a class="header">Header</a>
							<div class="description">Click a link in our <a>description</a>.</div>
						</div>
						<div class="item">
							<a class="header">Learn More</a>
							<div class="description">Learn more about this site on <a>our FAQ page</a>.</div>
						</div>
					</div>
					<p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
					<p>Many people also have their own barometers for what makes a cute dog.</p>
				</div>
			</div>
			<div class="extra content">
				<i class="check icon"></i>121 Votes
				<div class="right floated author">
					<img class="ui avatar image" src="https://api.adorable.io/avatars/50/seifer"> seifer
				</div>
			</div>
		</div>
		
		<div class="ui message">
			<p>Cute dogs come in a variety of shapes and sizes.</p>
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