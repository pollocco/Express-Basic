var result = fetch("/get-info",
    {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => 
        {
            document.getElementById('data-p').textContent += data.name + ": " + data.status;
        }
)
