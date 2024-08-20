var sec = 0
var min = 0
var hr = 0
var interval

function Digits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}
function start() {
    timer()
    interval = setInterval(timer, 1000)
}
function pause() {
    clearInterval(interval)
}
function clear() {
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById('timer').innerText='00:00:00'
}


function timer() {
    sec++
    if (sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('timer').innerText=Digits(hr)+':'+Digits(min)+':'+Digits(sec)
    
}