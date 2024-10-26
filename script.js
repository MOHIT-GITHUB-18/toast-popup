const showToast = document.querySelector(".showToast")
const horizontalPosition = document.querySelector("#horizontal-position")
const verticalPosition = document.querySelector("#vertical-position")
const toastType = document.querySelector("#toast-type")
const toastMessage = document.querySelector("#toast-message")
const toastContainer = document.querySelector(".toast-container")
const durationInput = document.querySelector("#Duration")

showToast.addEventListener("click", () => {
    
    if(horizontalPosition.value == 'right'){
        toastContainer.classList.add('right')
    }
    else{
        toastContainer.classList.remove('right')
    }
    if(verticalPosition.value == 'bottom'){
        toastContainer.classList.add('bottom')
    }
    else{        toastContainer.classList.remove('bottom')
    }

    const newToast = document.createElement('div')
    newToast.classList.add('toast')
    newToast.classList.add(toastType.value)

    console.log(toastType.value);

    newToast.innerText = `${toastMessage.value} `
    const closeIcon = document.createElement('span')
    closeIcon.innerText = ' ×'
    newToast.append(closeIcon)

    function removeToast() {
        if(toastContainer.classList.contains('right')){
            newToast.classList.add('go-right')
        }
        else{
            newToast.classList.add('go-left')
        }
        setTimeout(() => {
            newToast.remove()
        },200);
    }
    closeIcon.addEventListener("click",function(){
        removeToast()
    })
    setTimeout(() => {
       removeToast()
    }, parseInt(durationInput.value)*1000);

    toastContainer.append(newToast) 
})

//video 48:30  toast popup procoderr