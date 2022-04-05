// console.log("hello krishna how are you");

// 1
let userName = document.getElementById("txtuserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtconPwd");
let form = document.querySelector("form");

// 2
function validateInput() {
  // console.log("validate input");
  //check user is empty
  if (userName.value.trim() === "") {
    // let parent = userName.parentElement;
    // let messageEle = parent.querySelector("small");
    // messageEle.style.visibility = "visible";
    // messageEle.innerText = "User Name Cannot be empty";
    //
    onError(userName, "user name cannot be empty");
  } else {
    // let parent = userName.parentElement;
    // let messageEle = parent.querySelector("small");
    // messageEle.style.visibility = "hidden";
    // messageEle.innerText = "";
    //
    onSuccess(userName);
  }
//   email
  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else {
    if (!isValidEmail(email.value.trim())) {
      onError(email, "Email is not valid ");
    } else {
      onSuccess(email);
    }
  }
//   password
if(pwd.value.trim()===""){
    onError(pwd,"User name cannot be empty");

}else{
    onSuccess(pwd);
}
if(conPwd.value.trim()===""){
    onError(conPwd,"user password cannot be empty");

}else{
    if(pwd.value.trim()!== conPwd.value.trim()){
        onError(conPwd,"password & confirm password not matching");
    }
    else
    onSuccess(conPwd);
}
}



// 3
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

// 4
function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  // messageEle.innerText = "";
  parent.classList.remove("error");
  parent.classList.add("success");
}

function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function isValidEmail(email) {
  //Regular expression to accept valid email id
  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$.test(email)/
}
