const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
btnE1.addEventListener("click",()=>{
    createpassword()
})

function createpassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&~ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordlength =9;
    let password =""
    for (let index = 0; index < passwordlength; index++) {
        const randomNum= Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum,randomNum + 1);
    }
    inputE1.value = password;
}