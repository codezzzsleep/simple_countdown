const button = document.getElementById("confirm");
button.addEventListener("click", ()=> {
    let content = document.getElementById('content').value;
    let time = document.getElementById('time').value;
    chrome.runtime.sendMessage({content,time},function(response){
        console.log('response from receiver:',response);
    });
});
