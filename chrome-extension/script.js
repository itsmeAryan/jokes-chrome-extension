fetch("https://icanhazdadjoke.com/slack")
.then((res)=>res.json())
.then(data=>{const joke=data.attachments[0].fallback;
    document.getElementById("joke").innerText=joke;
})
.catch(e=>{
    console.log(e.message);
})