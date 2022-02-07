
/*const { ethers } = require("ethers");

var web3;
var address="0x22704392237d5C9e6aA752aE0595B264e2191237";

function Connect(){
    window.web3.currentProvider.enable();
    web3 = new web3(window.web3.currentProvider);    
}

if(typeof web3 !== 'undefined'){
    web3 = new web3(window.web3.currentProvider);
}
else{
    web3 = new Web3(new Web3.Provider.HTTpProvider("HTTP://0.0.0.0:7545"
    ));
}

function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("myForm").style.display = "none";
  }

var abi=[[
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "deposite_money",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "recieved",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]]

var contract = new web3.eth.Contract(abi, address);

function deposite_money(){
    var inputval=document.getElementById("amount").value;
    web3.eth.getAccounts().then(function(account){
        return contract.methods.deposite_money(inputval).send({from: account[0]});
    }).then(function(tmp){
        $("amount").val("");

    }).catch(function(tmp){
        alert(tmp);
    })
}
async function getaccounts(){
    const accounts = await ethereum.request({ method: 'eth_accounts' });

}

function blockwithdraw(){
    var inputval=document.getElementById("amount").value;
    web3.eth.getAccounts().then(function(account){
        return contract.methods.withdraw(inputval).send({from: account[0]});
    }).then(function(tmp){
        $("amount").val("");

    }).catch(function(tmp){
        alert(tmp);
    })
}

function getBalance(){
    contract.methods.getBalance().call().then(function(balance){
        $("#balance").html(balance);
    })
}*/

function Docs(){
    location.replace('https://github.com/lmayoli/simple-wallet-contract');
}
function home(){
    location.replace('http://127.0.0.1:5501/index.html')
}
function transact(){
    location.replace('http://127.0.0.1:5501/transaction.html')
}
function back(){
    location.replace('http://127.0.0.1:5501/index.html')
}
function account(){}
function contact(){
    location.replace('http://127.0.0.1:5501/contact.html')
}

var i = 0;
function deposit() {

    i++;
    document.getElementById("inc").value = i;
  }

  function withdraw() {

    i--;
    document.getElementById("inc").value = i;
  }
  function count() {
      
    playerCount++;
    document.getElementById("count").value = playerCount;
}
function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("myForm").style.display = "none";
  }

  function submit(){
	  location.replace('https://www.paypal.com/za/business');
  }

function Connect(){
    window.web3.currentProvider.enable();
    web3 = new web3(window.web3.currentProvider);    
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