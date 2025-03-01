var buttonElement = document.getElementById("kopce")
buttonElement.addEventListener('click',function(){
    alert('kliknato e kopceto');
    for(i=0;i<3;i++){
        alert('broj'+i);
    }
})