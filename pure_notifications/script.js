const button = document.querySelector('button')

button.addEventListener("click", ()=>{
    Notification.requestPermission().then(prem =>{
        if (prem === "granted"){
            const notification = new Notification("Order status", {
                body: "Hey, Your order is almost ready",
                icon: "Golden-Arches.avif",
            })
            notification.addEventListener("error", e=>{
                alert("Big Error")
            })
        }
    })
})