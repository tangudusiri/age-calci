(function(){
let date=document.querySelector(".date")
const month=document.querySelector(".month")
const year=document.querySelector(".year")
const handleSubmit=document.querySelector(".handleSubmit")
const result=document.querySelector(".result")

date.addEventListener("keyup",(e)=>{
    const dateVal=e.target.value
//    console.log(dateVal)
})
month.addEventListener("keyup",(e)=>{
    const monthVal=e.target.value
    // console.log(monthVal)
 })
 year.addEventListener("keyup",(e)=>{
    const yearVal=e.target.value
    // console.log(yearVal)
 })
 handleSubmit.addEventListener("click",()=>{
    let output=""
     output=` Your age ${dateVal}`
     output.style.display="block"
 })
 result.innerHTML=output

})()
