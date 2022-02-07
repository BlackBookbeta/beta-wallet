
var email = email; 
var customers = 0;
var user;


document.getElementById('email').value = user;
function submit(){
    var email;
    mailto:"lmayoli95@gmail.com";
    subject:"signup";
    customers ++;
}
 /* JS comes here */
 var qr;
 (function() {
         qr = new QRious({
         element: document.getElementById('qr-code'),
         size: 200,
         value: 'https://crowdedcap.com'
     });
 })();
 
 function generateQRCode() {
     var qrtext = document.getElementById("qr-text").value;
     document.getElementById("qr-result").innerHTML = "QR code for " + qrtext +":";
     
     qr.set({
         foreground: 'black',
         size: 200,
         value: qrtext
     });
 }


 function randomString() {  
     //define a variable consisting alphabets in small and capital letter  
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz12345678910";  
       
     //specify the length for the new string  
var lenString = 17;  
var randomstring = '';  

     //loop to select a new character in each iteration  
for (var i=0; i<lenString; i++) {  
 var rnum = Math.floor(Math.random() * characters.length);  
 randomstring += characters.substring(rnum, rnum+1);  
}  

      //display the generated string   
document.getElementById("randomfield").innerHTML = randomstring;  
}  