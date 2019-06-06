import './mx.css';
import './index.css';

import riot from 'riot';
import route from 'riot-route';
import './tags/signin.tag';
import './tags/signup.tag';
import './tags/authcheck.tag';
import './tags/sellit.tag';
import './tags/buyit.tag';
import './tags/post.tag';
import'./tags/waiting.tag';
import './tags/welcome.tag'

import firebase from 'firebase';
import {mxFirebase} from './mx';

var firebaseConfig = {
    apiKey: "AIzaSyAcB45NZ2WL0l_fc3mkivIWeckjUx7cfAU",
    authDomain: "mindx-testing.firebaseapp.com",
    databaseURL: "https://mindx-testing.firebaseio.com",
    projectId: "mindx-testing",
    storageBucket: "mindx-testing.appspot.com",
    messagingSenderId: "756909201824",
    appId: "1:756909201824:web:c612bf6775b7db88"
  };

mxFirebase.init(firebaseConfig);

// DECLARING FUNCTIONS
var reaction = '';
var downloadURL = ''

// HIGHLIGHT FUNCTION
function eraseBorder(){
  for (let i=0;i<document.getElementsByTagName('a').length;i++){
    document.getElementsByTagName('a')[i].classList.remove('betterBorder')
  }
}

// BASE

route.base('/');

route('/', ()=>{
  riot.mount('#root','welcome')

})
// SIGN IN

route('/signin', ()=>  {
  eraseBorder();
  riot.mount('#root','signinmodal');
  document.getElementById('sign-in-button').addEventListener('click', async ()=>{
    try  {
    const email = document.getElementById('email-sign-in').value;
    const password = document.getElementById('password-sign-in').value;
    await mxFirebase.signIn(email, password);
    document.getElementById('sign-in-result').innerHTML = 'It works!'
    document.getElementById('sign-in-result').style.color = '#33EC46'
    }
  catch(err) {
    document.getElementById('sign-in-result').innerHTML = 'There\'s something wrong!'
    document.getElementById('sign-in-result').style.color = 'red'
  }
  })
  

});


// SIGN UP

route('/signup', ()=>  {
  eraseBorder();
  riot.mount('#root','signupmodal');
  document.getElementById('sign-up-button').addEventListener('click', async ()=>{
    try  {
    const email = document.getElementById('email-sign-up').value;
    const password = document.getElementById('password-sign-up').value;
    const passwordConfirm = document.getElementById('passwordConfirm-sign-up').value;  
    if (password === passwordConfirm) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    document.getElementById('sign-up-result').innerHTML = 'It works!'
    document.getElementById('sign-up-result').style.color = '#33EC46'
    }
    else {
    document.getElementById('sign-up-result').innerHTML = 'The passwords don\'t match'
    }
    }
    catch(err) {
    console.log(err.message)
    document.getElementById('sign-up-result').innerHTML = 'There\'s something wrong!'
    document.getElementById('sign-up-result').style.color = 'red'
  }
  })
  

});


// SELL IT

route('/sellit',async ()=>{
  eraseBorder();
  document.getElementById('sell-it-page').className += 'betterBorder'
  firebase.auth().onAuthStateChanged( user => {
      if(!user){
     riot.mount('#root','authcheck');
     }
      
      else if (user) {
    riot.mount('#root', 'sellit')
    
    const emojiSelection = document.getElementsByClassName('option-emoji');
    for (let i=0; i<emojiSelection.length; i++){
      emojiSelection[i].addEventListener('click', (e)=>{
        for (let j = 0; j<emojiSelection.length; j++){
          emojiSelection[j].style.background = 'white'
        }
        e.target.style.background ='black' 
        reaction = e.target.previousElementSibling.innerHTML;
        })
    }
    
    document.getElementById("file-image-input").addEventListener('change', async (evt)=> {
      var firstFile = evt.target.files[0] 
      var storageRef = firebase.storage().ref('photos/' + firstFile.name)
      await storageRef.put(firstFile);
      await storageRef.getDownloadURL().then(url=> {
        downloadURL = url;
        var image_div = document.createElement('div')
        image_div.innerHTML = `
        <div style = "
            height: 100px;
            width: 100px;
            margin:5px 10px 10px 0px;
            border: 1px solid #c8d6e5;
            background-image: url(${url}); 
            background-size: cover;
            background-repeat: no-repeat
          ">
        </div>
        `
        let imageuploader = document.getElementById('image-upload')
        imageuploader.insertBefore(image_div, imageuploader.childNodes[0]);
        imageuploader.removeChild(imageuploader.childNodes[1])

      })
      .catch(err =>{alert('there was something wrong'); console.log(err)})
  })
    
    document.getElementById('sell-it-button').addEventListener('click', ()=> {
          var user = firebase.auth().currentUser;
          let post = {
              reaction: reaction,
              title: document.getElementById('title-info').value,
              price: document.getElementById('price-info').value,
              image: downloadURL,
              description: document.getElementById('description').value,
              reason: document.getElementById('reason').value,
              category: document.getElementById('category-upload').value,
              contact: document.getElementById('contact-info').value
          };
          firebase.database().ref('posts/').push(post).then(
          document.getElementsByClassName('Modal')[0].style.visibility='visible'
            );
      });
      }
      })
})







var postID = ''
     

  // BUY IT
  
route('/buyit', async ()=>{
  eraseBorder();
  document.getElementById('buy-it-page').className += 'betterBorder'
  riot.mount('#root','waiting');

 
    let first_list  = [];
    let key_lists = []
    await firebase.database().ref('/posts').once('value').then(
      function(snapshot){
        snapshot.forEach(childSnap => {
          first_list.push(childSnap.val())
          key_lists.push(childSnap.key)
        }
        )}  
      ,
      function(err){
        console.log(err)
      }
    )
    const emotions = ['Heartbroken','Shocked','Angry','Fine','Dying']
    const actualEmojis = ['sad-tear','surprise','angry','smile-beam','laugh-squint']

    for (let i=0;i<key_lists.length;i++){
      first_list[i].key = key_lists[i]
    }
    riot.mount('#root','buyit')
    
    var true_post = []
    var true_finished_post = []
    
    function filterGender(gender=null){
    if(gender!==null){
    true_post = [];
    first_list.forEach(post=>{
      if (post.category === gender){
        true_post.push(post)
      }
    })
    
    }
    else true_post = first_list
    }

    function filterEmotion(emotion=null){
    if(emotion!==null){
    true_finished_post = []
    true_post.forEach(post=>{
      if (post.reaction === emotion){
        true_finished_post.push(post)
      }
    })
    
    }
    else true_finished_post = true_post
    }
    
    var gender, emotion;

    function filter(gender,emotion){
    filterGender(gender);
    filterEmotion(emotion);
    rerun();
    }

    filter()
    
    document.getElementById('all-genders').addEventListener('click',()=>{
      gender = null;
      filter(gender,emotion);
    })

    document.getElementById('all-emotions').addEventListener('click',()=>{
      emotion = null;
      filter(gender,emotion);
    })

    var genders_choice = document.getElementsByClassName('gender-filter')
    for (let i=0;i<genders_choice.length;i++){
      genders_choice[i].addEventListener('click', (e)=>{
        gender = e.target.innerHTML;
        filter(gender,emotion);
        })

    }

    var emotion_choice = document.getElementsByClassName('emotion-filter')
    for (let i=0;i<emotion_choice.length;i++){
      emotion_choice[i].addEventListener('click', (e)=>{
        emotion = e.target.innerHTML;
        filter(gender,emotion);
        })

    }

    function rerun(){
    document.getElementById('grid-layout-posts').innerHTML = ''
    let posts_list = true_finished_post;

    posts_list.forEach(post_data =>{
    var post_holder = document.createElement('div');
    post_holder.style.display = 'none'
    post_holder.innerHTML = 
    `
    <div id=${post_data.key} class = 'post_nodes' style = "
z-index: 1;
-moz-box-shadow: 0 0 5px #ccc;
-webkit-box-shadow: 0 0 5px #ccc;
box-shadow: 0 0 5px #ccc;
border-radius: 20px;
overflow: hidden;
display: flex;
flex-direction: column;

          ">  
            <div style = "
z-index: 0;
width: 280px;
height: 200px;
background-image: url(${post_data.image});
background-repeat: none;
background-size: cover;
background-position: center;

            ">
              <div style = "
text-align: left;
padding: 10px;

              ">
              <span style="
padding: 2px 4px 2px 4px;
background-color: #f5f6fa;
border-radius: 50px; 
              ">
                <i class="far fa-${actualEmojis[emotions.indexOf(post_data.reaction)]}"></i>
              </span>
              </div>
            </div>
            <p>${post_data.title}</p>
            <h3 style = "
margin-top: -12px;
font-size: 25px;
color: #48dbfb;
            "
              >${post_data.price}đ</h3>
        </div>
      `;
    document.getElementById('grid-layout-posts').insertBefore(post_holder,document.getElementById('grid-layout-posts').firstChild)

    })



    const post_list_adder = document.getElementsByClassName('post_nodes')
    for (let i=0;i<post_list_adder.length;i++){
    post_list_adder[i].addEventListener('click',(e)=>{

     let target_id = e.target;
     for (let i=0;i<4;i++){
     if (target_id.id === ''){
      target_id = target_id.parentElement
     }
     else {
      break
     }
    }

      postID = target_id.id
      var newLocation =  window.location.href.slice(0,-5)+'post/'+postID;
      window.location.href = newLocation;

      
    })

    }

      function display(k) {
    if(k<posts_list.length/9 || k === posts_list.length/9){
      for (let i=9*(k-1);i<9*k;i++){
        document.getElementsByClassName('post_nodes')[i].parentElement.style.display = 'inline-block'
      }
    }
    else{
      for (let i = 9*(k-1);i<posts_list.length;i++){
        document.getElementsByClassName('post_nodes')[i].parentElement.style.display = 'inline-block'
      }
    }
  }

    
 
    var page = 1;
    display(page);
    function disappear(){
      for (let i=0;i<posts_list.length;i++){
        document.getElementsByClassName('post_nodes')[i].parentElement.style.display = 'none'
      }
    }
    if(posts_list.length ===0 ){
          document.getElementById('page-number').innerHTML = `1/1`

    }
    else{
    document.getElementById('page-number').innerHTML = `${page}/${Math.ceil(posts_list.length/9)}`
  }
    document.getElementById('left-arrow').addEventListener('click',()=>{
      if (page!==1){
      page -=1;
      disappear();
      display(page);
      document.getElementById('page-number').innerHTML = `${page}/${Math.ceil(posts_list.length/9)}`
      }
    })
    document.getElementById('right-arrow').addEventListener('click',()=>{
      if (page!==posts_list.length){
      page +=1;
      disappear();
      display(page);
       document.getElementById('page-number').innerHTML = `${page}/${Math.ceil(posts_list.length/9)}`

      }

    })
  //   post_list_adder.forEach( (post)=> {
  //   post.addEventListener('click',(e)=>{

  //    let target_id = e.target;
  //    for (let i=0;i<4;i++){
  //    if (target_id.id === ''){
  //     target_id = target_id.parentElement
  //    }
  //    else {
  //     break
  //    }
  //   }

  //     postID = target_id.id
  //     var newLocation =  window.location.href.slice(0,-5)+'post/'+postID;
  //     window.location.href = newLocation;

      
  //   })
  // })

// 
// 
}
})















// POST 
route('/post/.*', async ()=> {
  eraseBorder();
  document.getElementById('buy-it-page').className += 'betterBorder'
  riot.mount('#root','waiting');
  const emotions = ['Heartbroken','Shocked','Angry','Fine','Dying']
  const actualEmojis = ['sad-tear','surprise','angry','smile-beam','laugh-squint']
  const postID = window.location.href.split('/').slice(-1)[0];
  let post_info = ''
  await firebase.database().ref('/posts/'+postID).once("value").then(function(snapshot){
        post_info = snapshot.val();
      },function(err){
        console.log(err)
      });
  console.log(post_info);

  riot.mount('#root','post')
  document.getElementById('post_gender').innerHTML = post_info.category;
  document.getElementById('post_image').style.backgroundImage = `url(${post_info.image})`;
  document.getElementById('post_title').innerHTML = post_info.title;
  document.getElementById('post_price').innerHTML = post_info.price + '.000đ';
  document.getElementById('post_emoji').className = `far fa-${actualEmojis[emotions.indexOf(post_info.reaction)]}`;
  document.getElementById('post_description').innerHTML = post_info.description;
  document.getElementById('post_reason').innerHTML = post_info.reason;
  document.getElementById('post_contact').addEventListener('click', ()=>{
    var post_contact = document.getElementById('post_contact')
    post_contact.style.opacity = 0;
    setTimeout(function(){ 
      post_contact.innerHTML = post_info.contact
      post_contact.style.opacity = 1;
    },500);
  })
})

route.start(true)
