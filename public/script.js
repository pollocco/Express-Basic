var result = fetch("/get-info").then(res=>res.json()).then(data=>{
    document.getElementById('data-p').textContent += data.name + ": " + data.status;
})
