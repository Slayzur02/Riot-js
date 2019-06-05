<sellit>
	<div style="
		width: 100%;
		text-align: center;
	">
		<h1 class="">Before you sell it...</h1>
		<p class="">Let us pry your brain</p>
		<div style = "
		border: 1px solid grey;
		border-radius: 7px;
		-moz-box-shadow: 0 0 10px #ccc;
		-webkit-box-shadow: 0 0 10px #ccc;
		box-shadow: 0 0 10px #ccc;
		display: inline-flex;
		flex-direction: column;
		">	
			<p style = "
			text-align: left;
			margin-left: 30px;
			">How do you fucking feel?</p>
			<div style = '
			display: inline-flex;
			flex-direction: row;
			padding: 30px 30px 30px 30px;
			font-size: 15px;
			justify-content: space-between;
			'>
				<div style = "
				display: flex;
				flex-direction: column;	
				align-items: center;
				
				width: 100px;
				">
					<span style = "color: #2e86de">
					 <i class="far fa-sad-tear fa-2x"></i>
					</span>
					<p>Heartbroken</p>
					<div class='option-emoji' style = "
					margin-top: 10px;
					width: 10px;
					height: 10px;
					border: 1px solid grey;
					border-radius: 10px;
					"></div>
				</div>
				<div style = "
				display: flex;
				flex-direction: column;	
				align-items: center;	
				
				width: 100px;
				">
					<span style = "color: #ff9f43">
					 <i class="far fa-surprise fa-2x"></i>
					</span>
					<p>Shocked</p>
					<div  class='option-emoji' style = "
					margin-top: 10px;
					width: 10px;
					height: 10px;
					border: 1px solid grey;
					border-radius: 10px;
					"></div>
				</div>
				<div  style = "
				display: flex;
				flex-direction: column;	
				align-items: center;	
				
				width: 100px;
				">
					<span style = "color: #ee5253">
					 <i class="far fa-angry fa-2x"></i>
					</span>
					<p>Angry</p>
					<div  class='option-emoji' style = "
					margin-top: 10px;
					width: 10px;
					height: 10px;
					border: 1px solid grey;
					border-radius: 10px;
					"></div>
				</div>
				<div  style = "
				display: flex;
				flex-direction: column;	
				align-items: center;
					
				width: 100px;
				">
					<span style = "color: #01a3a4">
					 <i class="far fa-smile-beam fa-2x"></i>
					</span>
					<p>Fine</p>
					<div class='option-emoji' style = "
					margin-top: 10px;
					width: 10px;
					height: 10px;
					border: 1px solid grey;
					border-radius: 10px;
					"></div>
				</div>
				<div  style = "
				display: flex;
				flex-direction: column;	
				align-items: center;
				width: 100px;	
				">
					<span style = "color: #ff9ff3">
					 <i class="far fa-laugh-squint fa-2x"></i>
					</span>
					<p>Dying</p>
					<div class='option-emoji' style = "
					margin-top: 10px;
					width: 10px;
					height: 10px;
					border: 1px solid grey;
					border-radius: 10px;
					"></div>
				</div>
			</div>
		</div>

		<!-- Emoji madness is over -->
		<br>

		<!-- Form madness begins -->
		<div style = '
		border: 1px solid grey;
		width: 500px;
		margin-top: 60px;
		border-radius: 7px;
		-moz-box-shadow: 0 0 10px #ccc;
		-webkit-box-shadow: 0 0 10px #ccc;
		box-shadow: 0 0 10px #ccc;
		display: inline-flex;
		flex-direction: column;
		padding: 30px 30px 30px 30px;
		align-items: flex-start;
		font-size: 20px;
		'>
					Title
					<input id='title-info' type="text" placeholder =" Enter the description" style = '
				margin: 1px 0px 30px 0px;
				border-radius: 5px;
				width: 500px;
				height: 40px;
				font-size: 20px;
				border: solid 1px #7f8c8d;
					'>
					Price(vnđ)
					<input id ='price-info' type="text" placeholder =" Enter the description" style = '
				margin: 1px 0px 30px 0px;
				border-radius: 5px;
				width: 500px;
				height: 40px;
				font-size: 20px;
				border: solid 1px #7f8c8d;
					'>
					Upload your image here (one only)
					<div id = "image-upload" style = "
						display: flex;
					">
							<div style = "width: 100px; 
							height: 100px;
							border: 3px dashed #c8d6e5; 
							border-radius: 10px;
							margin: 5px 10px 10px 0px;">
								  <label  for="file-image-input" style = "
								  color: #c8d6e5;" >
								    	<i class="far fa-plus fa-5x"></i>
								  </label>
							</div>
						  <input id="file-image-input" type="file" style = "display: none" on/>
					</div>
				
<!-- 					Upload your photos
					<input type="file"  style = '
				margin: 1px 0px 30px 0px;
				border-radius: 5px;
				width: 100px;
				height:100px;
				font-size: 20px;
				border: solid 1px #7f8c8d;
					'> -->
					What are you selling?
					<textarea id = 'description' style = '
				margin: 0px 0px 40px 0px;
				border-radius: 5px;
				width: 500px;
				font-size: 20px;
				height: 130px;
				border: solid 1px #7f8c8d;
					'>
					</textarea>
					Why?
					<textarea id = 'reason'style = '
				margin: 0px 0px 0px 0px;
				border-radius: 5px;
				width: 500px;
				font-size: 20px;
				height: 130px;
				border: solid 1px #7f8c8d;
					'>
					</textarea>
		</div>
		<br>
		<div id = 'sell-it-button' style = '
				display: inline-block;
				background-color: #48dbfb;
				font-size: 23px;
				border-radius: 500px;
				padding: 10px 50px 10px 50px;
				width: 250px;
				-moz-box-shadow: 0 0 10px #ccc;
				-webkit-box-shadow: 0 0 10px #ccc;
				box-shadow: 0 0 10px #ccc;
				text-align: center;
				justify-content: center;
				align-items: center;
				align-self: center
		'>
				SELL IT
		</div>

	</div>
</sellit>