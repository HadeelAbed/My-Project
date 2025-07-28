function clock(){
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let period=document.getElementById('period');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h>=12 ? "PM" : "AM";
     //ما اخلي العداد 24 ساعة ل 12 يعني 1 ما تكون 13
    if(h > 12){
        h -= 12;
    }
    // عشان يظهر الرقم هيك  04  01 يلي بكون خانة واحدة
     h = ( h < 10 ) ? "0" + h : h ;
     m = ( m< 10 ) ? "0" + m : m ;
     s = ( s < 10 ) ? "0" + s : s ;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.textContent = s;
    period.textContent = ampm;

};
// clock();   هاد ما بغير الوقت غير بعد كل ريفريش
setInterval(clock,1000);   // setInterval هي دالة في JavaScript تُستخدم لتنفيذ دالة معينة بشكل متكرر كل فترة زمنية محددة.
//: شغّل الدالة clock كل 1000 ميلي ثانية (أي كل ثانية واحدة).
