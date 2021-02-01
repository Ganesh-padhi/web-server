console.log("Welcome Bro");

fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    res.json().then((data)=>{
       
        console.log(data);
    });
});
const web1Form = document.querySelector("form");
const val = document.querySelector("input");
const output = document.querySelector("#output");

web1Form.addEventListener("submit",(e)=>{
    e.preventDefault()
    output.innerHTML="Loading Please wait";
    // console.log(val.value);
    fetch("https://jsonplaceholder.typicode.com/posts?userId="+val.value).then((res)=>{
    res.json().then((data)=>{
       output.innerHTML=JSON.stringify(data);
        console.log(data);
    });
});
})
