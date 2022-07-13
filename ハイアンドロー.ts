let DrawCard:number= Math.floor(Math.random()*13+1); //親の数字を1~13でランダムに取得

let Choice:string|null="high";
Choice = window.prompt("Which is your card high or low than \"" + DrawCard + "\"?", "which?"); //ハイロー宣言

let YourCard:number= Math.floor(Math.random()*13+1); //子の数字を1~13でランダムに取得
console.log("Your card has been " + YourCard + ".") //子の数字の表示

if(YourCard > DrawCard){ //子の方が高いとき
    if(Choice == "high"){
        console.log("YOU WIN");
    }else if (Choice == "low"){
        console.log("YOU LOSE");
    }else{
        console.log("error");
    }
  }else if(YourCard < DrawCard){ //親の方が高いとき
    if(Choice == "high"){
        console.log("YOU LOSE");
    }else if (Choice == "low"){
        console.log("YOU WIN");
    }else{
        console.log("error");
    }
  }else{ //数字が同じとき
    console.log("DRAW");
}
