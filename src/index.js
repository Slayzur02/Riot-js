import './mx.css';
import './index.css';

import riot from 'riot';
import route from 'riot-route';
import './tags/signin.tag';
import './tags/signup.tag';
import './tags/authcheck.tag';
import './tags/sellit.tag'

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

route.base('/');
route('/signin', ()=>  {
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

route('/signup', ()=>  {
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
var reaction = '';
var downloadURL = ''
route('/sellit',()=>{
     if(!firebase.auth().currentUser){
     riot.mount('#root','authcheck');
     }
     else {
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
          console.log('posting...')
          var user = firebase.auth().currentUser;
          let post = {
              reaction: reaction,
              title: document.getElementById('title-info').value,
              price: document.getElementById('price-info').value,
              image: downloadURL,
              description: document.getElementById('description').value,
              reason: document.getElementById('reason').value,
          };
          firebase.database().ref('posts/'+user.uid+ post.title).set(post);
      });
}})

route.start(true)

