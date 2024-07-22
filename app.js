let inp = document.getElementById("inp");
    let list = document.querySelectorAll("li");
let req = document.getElementById("requirment");
let requirment = [ 
    {regex:/[0-9]/,index:0},
    {regex:/.{12}/,index:1},
    {regex:/[!@#$%^&*()_+?]/,index:2},
    {regex:/[a-z]/,index:3},
    {regex:/[A-Z]/,index:4},
];
inp.addEventListener("keyup", (e)=> {
   requirment.forEach(item =>{
    let valid = item.regex.test(e.target.value)
    let reqitem = list[item.index];
    if (valid) {
       reqitem.style.backgroundColor="green";
    }

   })
})      