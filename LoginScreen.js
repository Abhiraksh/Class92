var email, password;

function login(){
    
    var element = createElement("h1")
    element.html("AERWYNA - SAVING OCEANS");
    element.position(450,10);
    var input1 = createInput("Enter Your Email");
    input1.position(600,200);
    email = input1.value();
    var input2 = createInput("Enter The Password");
    input2.position(600,300);
    password = input2.value();
    var button1 = createButton("Login");
    button1.position(600,400)
    var button2 = createButton("Sign Up");
    button2.position(700,400);
    button2.mouseClicked(()=>{
        try{
            if(email && password){
            firebase.auth().createUserWithEmailAndPassword(email.toString().trim(),password);
            alert("User Signed In Succesfully!")
           }
           else{
            alert("hi")  
        }
        }
        catch(err){
            console.log(err);
        }
      
    
    })
    button1.mouseClicked(()=>{
        try{
            if(email && password){
            firebase.auth().signInWithEmailAndPassword(email,password);
            alert("User Logged In Succesfully!")
            }
            else{
                alert("hi")  
            }
        }
        catch(err){
           console.log(err);
        }
       
    })
 
    // console.log("abc@g.com")
}

     