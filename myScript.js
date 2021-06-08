var no_ma = 10
var can_ma = 10
document.getElementById('ok').addEventListener('click',function(e){
    // document.getElementById('no').style.margin = ` 20px ${can_ma++}px`
    let noElement = document.getElementById('no')
    let cancelElement = document.getElementById('cancel')
    noElement.style.margin = ` 20px ${no_ma++}px`
    cancelElement.style.margin = ` 20px ${can_ma++}px`
})
