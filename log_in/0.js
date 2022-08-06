container.style.cssText=`
    border:solid black 1px;
    width: 40%;
    hight: 50%;
    text-align: center;
    margin:5% 30%;
    display:flex;
    flex-direction:column;
    dir:ltr;

  `;
container.insertAdjacentHTML('beforebegin','<button id="button">login</button>');
button.style.cssText=`
background-color:rgb(75, 74, 74);
color:white;
padding:15px;
margin:5px;
`;
button.onclick = function() {
    container.style.display="block";
  };
container.insertAdjacentHTML('afterbegin','<a id="exit" href=#>X</a>');
exit.style.cssText=`
display:flex;
align-items:center;
justify-content:flex-end;
margin:10px;
color:rgb(58, 58, 58);
text-decoration: none;
  `;
exit.onclick = function() {
    container.style.display="none";
  };
exit.insertAdjacentHTML('afterend','<img src="./pic.png" id="pic"></img>');
pic.style.cssText=`
border-radius:90px;
display:block;
width:30%;
margin-left:35%;
margin-top:5%;
  `;
pic.insertAdjacentHTML('afterend','<input id="username" placeholder="Enter Username" />');
username.insertAdjacentHTML('beforebegin','<p id="user">username</p>');
username.style.cssText=`
border:solid rgba(145, 145, 145,0.5) 1px;
width:96%;
margin:0 1% 0 1%;
min-height:20px;
`;
user.style.cssText=`
display:flex;
align-items:center;
justify-content:flex-start;
margin-left:10px;
margin-bottom: 0;
`;
username.insertAdjacentHTML('afterend','<input id="password" placeholder="Enter Password" />');
password.insertAdjacentHTML('beforebegin','<p id="pass">password</p>');
password.style.cssText=`
border:solid rgba(145, 145, 145,0.5) 1px;
width:96%;
margin:0 1% 0 1%;
min-height:20px;
`;
pass.style.cssText=`
display:flex;
align-items:center;
justify-content:flex-start;
margin-left:10px;
margin-bottom: 0;
`;
password.insertAdjacentHTML('afterend','<button id="btn">login</button>');
btn.style.cssText=`
display:block;
width:99%;
margin:0.5%;
background-color:rgb(76, 177, 46);
color:white;
padding:5px;
margin-top:15px;
`;
btn.insertAdjacentHTML('afterend','<div id="remember">Remember Me</div>')
remember.insertAdjacentHTML('afterbegin','<input type="checkbox" >');

remember.style.cssText=`
display:flex;
align-items:center;
justify-content:flex-start;
margin:4px;
`;
container.insertAdjacentHTML('beforeend','<div id="end"></div>');
end.style.cssText=`
padding:5px;
display:flex;
align-items:center;
justify-content:space-between ;
background-color:rgb(226, 226, 226);
height:50px;
`;
end.insertAdjacentHTML('beforeend','<button id="btn2">cancle</button>');
btn2.style.cssText=`
background-color:rgb(168, 0, 0);
color:white;
padding:10px;
margin:5px;
`;
end.insertAdjacentHTML('beforeend','<div id="forgetpass"></div>');
forgetpass.insertAdjacentHTML('beforeend','forget your <a href=#>password?</a>');