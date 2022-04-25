// Store the wallet amount to your local storage with key "amount"

let amounts=JSON.parse(localStorage.getItem("amount"));

function add_wallet(){

            let amounts=document.getElementById("amount").value;
            console.log(amounts);

            document.querySelector("#wallet").innerText=amounts

            localStorage.setItem("amount",JSON.stringify(Number(amounts)))

}

