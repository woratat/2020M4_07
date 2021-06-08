var no_ma = 10
var can_ma = 10
document.getElementById('ok').addEventListener('click',function(e){
    // document.getElementById('no').style.margin = ` 20px ${can_ma++}px`
    let noElement = document.getElementById('no')
    let cancelElement = document.getElementById('cancel')
    noElement.style.margin = ` 20px ${no_ma++}px`
    cancelElement.style.margin = ` 20px ${can_ma++}px`
})

document.getElementById('no').addEventListener('dblclick',function(e){ 
    let okElement = document.getElementById('ok')
    if(okElement.classList.contains('textNew1')){
       okElement.innerHTML="วิชานี้"
       okElement.classList.replace('textNew1','textNew2')
    }else if(okElement.classList.contains('textNew2')){
        okElement.innerHTML="ง่าย"
        okElement.classList.replace('textNew2','textNew3')
    }else if(okElement.classList.contains('textNew3')){
        okElement.innerHTML="จริงๆนะ"
        okElement.classList.replace('textNew3','textNew4')
    }else if(okElement.classList.contains('textNew4')){
        okElement.innerHTML="ok"
        okElement.classList.replace('textNew4','textNew1')
    }else{
        okElement.classList.add('textNew1')
    }
})