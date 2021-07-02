


function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n); //returns the square root of the passed value
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
}

function start() {
    var random = Math.random() * 1000;
    document.getElementById("num").innerText = Math.ceil(random);
    document.getElementById("display").innerText = "Is it a prime number?";
    document.getElementById("options").style.display = "block";
    document.getElementById("startButton").innerText = "Refresh";
    document.getElementById("display").style.color = "black";
    
  }

 function primeSelected(){
     if (isPrime(document.getElementById("num").innerText)){
        document.getElementById("display").innerText = "Right answer!";
        document.getElementById("display").style.color = "green";
     }
     else{
        document.getElementById("display").innerText = "Wrong answer!";
        document.getElementById("display").style.color = "red";
     }
 }

 function compositeSelected(){
    if (isPrime(document.getElementById("num").innerText)){
        document.getElementById("display").innerText = "Wrong answer!";
        document.getElementById("display").style.color = "red";
    }
    else{
        document.getElementById("display").innerText = "Right answer!";
        document.getElementById("display").style.color = "green";
    }
}

