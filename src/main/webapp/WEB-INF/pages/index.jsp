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
			<div class="right menu">
				<div class="ui right aligned category search item">
					<div class="ui transparent icon input">
						<input class="prompt" type="text" placeholder="Search flashcards...">
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
				<div class="sub header">Flashcards repository</div>
			</div>
		</h1>
		
		<div style="margin-top: 50px"></div>
		
		<div class="ui container">
			<h3 class="ui horizontal divider header">
				<i class="tags icon"></i>
				Categories
			</h3>
			<div class="ui six special cards stackable">
				<div class="card">
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<h4>Geography</h4>
								</div>
							</div>
						</div>
						<img src="https://www.gravatar.com/avatar/996dfb007ba9e5517e4d649e85d10108?d=identicon&f=y&s=150">
					</div>
					<div class="content">
						<a class="header center aligned">Geography</a>
					</div>
				</div>
				<div class="card">
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<h4>Computer Science</h4>
								</div>
							</div>
						</div>
						<img src="https://www.gravatar.com/avatar/80c18801f6ce7e664f788b70032cdcd1?d=identicon&f=y&s=150">
					</div>
					<div class="content">
						<a class="header center aligned">Computer Science</a>
					</div>
				</div>
				<div class="card">
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<h4>Miscellaneous</h4>
								</div>
							</div>
						</div>
						<img src="https://www.gravatar.com/avatar/02c081f895e26a667ab809d28570e0bf?d=identicon&f=y&s=150">
					</div>
					<div class="content">
						<a class="header center aligned">Miscellaneousy</a>
					</div>
				</div>
				<div class="card">
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<h4>Culture</h4>
								</div>
							</div>
						</div>
						<img src="https://www.gravatar.com/avatar/cbf4e0b7971051760907c327e975f4e5?d=identicon&f=y&s=150">
					</div>
					<div class="content">
						<a class="header center aligned">Culture</a>
					</div>
				</div>
				<div class="card">
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<h4>Java</h4>
								</div>
							</div>
						</div>
						<img src="https://www.gravatar.com/avatar/93f725a07423fe1c889f448b33d21f46?d=identicon&f=y&s=150">
					</div>
					<div class="content">
						<a class="header center aligned">Java</a>
					</div>
				</div>
				<div class="card">
					<div class="blurring dimmable image">
						<div class="ui dimmer">
							<div class="content">
								<div class="center">
									<h4>Python</h4>
								</div>
							</div>
						</div>
						<img src="https://www.gravatar.com/avatar/23eeeb4347bdd26bfc6b7ee9a3b755dd?d=identicon&f=y&s=150">
					</div>
					<div class="content">
						<a class="header center aligned">Python</a>
					</div>
				</div>
			</div>
			
			<div class="ui grid">
				<div class="right floated two wide column">
					<button class="ui right floated basic button">See all <i class="icon arrow right"></i></button>
				</div>
			</div>
			
			<div style="margin-top: 30px"></div>
			
			
			
			<div class="ui grid">
				<div class="eight wide column">
					<h3 class="ui horizontal divider header">
						<i class="history icon"></i>
						Activity
					</h3>
				
				
					<div class="ui feed">
						
						<div class="event">
							<div class="label">
								<img src="https://api.adorable.io/avatars/50/Elliot">
							</div>
							<div class="content">
								<div class="summary">
									<a class="user">Elliot Fu</a> added you as a friend <div class="date"> 1 Hour Ago </div>
								</div>
							</div>
						</div>
						
						<div class="event">
							<div class="label">
								<i class="pencil icon"></i>
							</div>
							<div class="content">
								<div class="summary">
									You posted on your friend <a>Stevie Feliciano's</a> wall. <div class="date">Today</div>
								</div>
							</div>
						</div>
						
						<div class="event">
							<div class="label">
								<img src="https://api.adorable.io/avatars/50/Jenny">
							</div>
							<div class="content">
								<div class="summary">
									<a class="user">Jenny Hess</a> added you as a friend <div class="date">2 Days Ago</div>
								</div>
								<div class="meta">
									Meta
								</div>
							</div>
						</div>
						
						<div class="event">
							<div class="label">
								<img src="https://api.adorable.io/avatars/50/Joe">
							</div>
							<div class="content">
								<div class="summary">
									<a class="">Joe Henderson</a> posted on his page <div class="date">3 days ago</div>
								</div>
								<div class="extra text">
									Ours is a life of constant reruns. We're always circling back to where we'd we started, 
									then starting all over again. Even if we don't run extra laps that day, we surely will 
									come back for more of the same another day soon.
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="eight wide column">
					
				</div>
			</div>
		</div>

		
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
		<script src="/js/semantic.js"></script>
		<script>
			$('.ui.dropdown')
			  .dropdown()
			;

			$('.special.cards .image').dimmer({
				on: 'hover'
			});
		</script>
	</body>
</html>