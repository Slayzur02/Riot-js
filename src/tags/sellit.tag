<sellit>
	<!-- <div class="Modal fixed w-full bg-cover flex flex-col items-center text-center py-2" style=" min-height: 110vh; background:rgba(43,43,43,0.9); z-index:2; visibility: hidden;
" 
		onclick=
		"if (!document.getElementsByClassName('Inside-modal')[0].contains(event.target)) {
		//document.getElementsByClassName('Modal')[0].style.visibility='hidden';
		}"
		>
		<div class="Inside-modal rounded shadow-md flex-grow m-8 bg-white md:w-3/5 md:m-0" style = "z-index:999;">
					<div class=" bg-cover w-full bg-center h-56" style= "background-image:
                     url('images/Puzzles.jpg'); ">
  					</div>
				  	<div class=" py-4 ">
					    <div class="font-bold text-xl m-1">The Problem</div>
						<p class=" text-left px-5" >
						Alias culpa at impedit consequuntur dolore, sed. Et harum porro numquam illo, nulla quae reiciendis eveniet rerum itaque a iure, corrupti veniam ducimus explicabo. Atque reprehenderit modi minima, libero aliquid.
						Voluptate, aliquid obcaecati consequatur praesentium atque odit, nesciunt quia est minus animi distinctio dignissimos eius omnis nisi magnam eum, alias mollitia optio, corrupti error maxime repudiandae. Dolorum totam ullam ipsum?
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi debitis fuga tempora quis, dolores, consequuntur magnam? Quae deserunt asperiores quos, ea quod rerum officiis, officia ipsum! Consequatur eligendi rerum illo.
						Et officia ab sit eveniet obcaecati temporibus dolorum laudantium molestias, maxime mollitia perspiciatis vel omnis doloribus, vero! Error, assumenda quibusdam natus, aspernatur sapiente possimus earum sint, ea maxime dolore, laboriosam.
						Alias culpa at impedit consequuntur dolore, sed. Et harum porro numquam illo, nulla quae reiciendis eveniet rerum itaque a iure, corrupti veniam ducimus explicabo. Atque reprehenderit modi minima, libero aliquid.
						Voluptate, aliquid obcaecati consequatur praesentium atque odit, nesciunt quia est minus animi distinctio dignissimos eius omnis nisi magnam eum, alias mollitia optio, corrupti error maxime repudiandae. Dolorum totam ullam ipsum?
						</p>
					</div>
					<button class=" text-grey-400 bg-red-400 px-4 py-2 rounded-lg" 
					onclick="document.getElementsByClassName('Modal')[0].style.visibility='hidden'">Exit</button>
				</div>
	</div> -->
	<div class="Modal" style = "
position: fixed;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
margin-top: -104px;
background:rgba(43,43,43,0.9); 
z-index:2;
visibility:hidden;
	">
		<div class="inside-modal" 
		style = "
width: 400px;
height: 300px;
background-color: white;
border: 1px solid #7f8c8d;
border-radius: 7px;
display: flex;
flex-direction: column;
		">
		<span style = "
		color: #48dbfb;
		margin-top: 50px;
		">
			<i class="far fa-check-circle fa-5x"></i>
		</span>
		<h2>Your upload was successful</h2>
		<button style = "
		width: 100px;
		height: 50px;
		border-radius: 20px;
		background: #48dbfb;
		color:white ;
		align-self: center;
		justify-content: center;
		border:none;
		font-size: 17px;
		"
		onclick="document.getElementsByClassName('Modal')[0].style.visibility='hidden'">Back</button>
		</div>
	</div>
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
					<input id='title-info' type="text" placeholder =" Enter the title" style = '
				margin: 1px 0px 30px 0px;
				border-radius: 5px;
				width: 500px;
				height: 40px;
				font-size: 20px;
				border: solid 1px #7f8c8d;
					'>
					Price(thousand vnđ)
					<input id ='price-info' type="text" placeholder =" Enter the price" style = '
				margin: 1px 0px 30px 0px;
				border-radius: 5px;
				width: 500px;
				height: 40px;
				font-size: 20px;
				border: solid 1px #7f8c8d;
					'>
					Phone number 
					<input id ='contact-info' type="text" placeholder =" Enter your number" style = '
				margin: 1px 0px 30px 0px;
				border-radius: 5px;
				width: 500px;
				height: 40px;
				font-size: 20px;
				border: solid 1px #7f8c8d;
					'>

					Choose category
					<select id='category-upload' style = "
					width: 500px;
					height: 40px;
					-webkit-appearance: button;
				    -moz-appearance: button;
				    -webkit-user-select: none;
				    -moz-user-select: none;
				    -webkit-padding-end: 20px;
				    -moz-padding-end: 20px;
				    -webkit-padding-start: 2px;
				    -moz-padding-start: 2px;
				    background-color: #2b2b2b
				    background-position: center right;
				    background-repeat: no-repeat;
				    border: 1px solid #7f8c8d;
				    border-radius: 5px;
				    font-size: inherit;
				    margin: 5px 0px 40px 0px;
				    overflow: hidden;
				    padding-top: 2px;
				    padding-bottom: 2px;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				}
					">
					  <option value="Girls" style = "
						font-size: 25px;
						color: #48dbfb;
					  ">Girls</option>
					  <option value="Boys">Boys</option>
					  <option value="Undefined">Undefined</option>

					</select>

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
				align-self: center;
				margin-top: 10px
		'>
				SELL IT
		</div>

	</div>
</sellit>