// let user = prompt("Enter S, W or G");
let user;
function check () {
// let user = document.getElementById("text").value;
let system = Math.floor(Math.random() * 3);
console.log(system);
let cpu = ["Snake", "Water", "Gun"][system];
const match = (cpu, user) => {
  if (cpu === user) {
    return "Draw";
  } else if (cpu === "Snake" && user === "Gun") {
    return "you";
  } else if (cpu === "Snake" && user === "Water") {
    return "system";
  } else if (cpu === "Gun" && user === "Snake") {
    return "system";
  } else if (cpu === "Water" && user === "Snake") {
    return "you";
  } else if (cpu === "Water" && user === "Gun") {
    return "system";
  } else if (cpu === "Gun" && user === "Water") {
    return "you";
  }
};
let result = match(cpu, user);
// document.write(`CPU is ${cpu} \n`);
// document.write(`USer is ${user} \n`);
// document.write(`System is ${cpu} <br> User is ${user} <br> Winner is : ` + result.toUpperCase());
document.getElementById("box-system").innerHTML = `${cpu.toUpperCase()}`
document.getElementById("box-result").innerHTML = "" + result.toUpperCase() ;
document.getElementById("box-user").innerHTML = `${user.toUpperCase()}`
}
// document.getElementById("submit").addEventListener("click",()=>{
//     check()
//     document.getElementById("text").value = ""
// })
document.getElementById("snake").addEventListener("click",()=>{
  user = "Snake"
  check()
})
document.getElementById("water").addEventListener("click",()=>{
  user = "Water"
  check()
})
document.getElementById("gun").addEventListener("click",()=>{
  user = "Gun"
  check()
})
var typed = new Typed(".auto-type",{
  strings: ["Snake", "Water", "and", "Gun Game"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})