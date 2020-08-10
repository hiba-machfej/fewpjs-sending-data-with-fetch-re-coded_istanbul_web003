document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault;
    submitData("hiba", "hiba@gmail.com")
 
});



function submitData(userName, userEmail) {
    
    
    const body = document.querySelector("body");
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    fetch("http://201.209.104.33:3000/users", configObj)
        .then(response => {
            return response.json();
        })
        .then(json => {
             const domCreate = document.createElement('P')
             domCreate.innerHTML = 'hello';
             body.appendChild(domCreate)

        })

        .catch(function(error){
            alert("PROBLEM");
            console.log(error.message);
        });

        



}


