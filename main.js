function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";


    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);

}

showTime();

    


    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
}
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    }
    let count = 0;
        var div = document.getElementById("btn");
        var box = document.querySelector('.preview');
    function myFunction() {

        var p = document.createElement('P');
        p.classList.add('value');

        p.innerHTML = "استغفر الله العظيم";
        count+=1;
        setInterval( function(){
            p.style.display  = "none";
        }, 600);


        div.innerHTML = count;

        box.appendChild(p);



     setCookie('praise' , div.innerHTML);

    }

        div.addEventListener('keypress' , function(){
            div.innerHTML = count;
        count+=1;

        });
     window.addEventListener('load' , function(){

         var elem = document.createElement('LI');

         var ul = document.querySelector('.header');

         ul.appendChild(elem);
         elem.style.textAlign = "center";
         elem.style.borderBottom = "none";


        if(getCookie('praise') === undefined){
            elem.innerHTML = "  عدد التسابيح في المرة السابقة كان 0 مره" ;
        }else{
            elem.innerHTML = "عدد التسابيح في المرة السابقة كان  " + getCookie('praise') + " مرة";
            
            if(getCookie('praise') <= 10 ){
            elem.innerHTML = "عدد التسابيح في المرة السابقة كان  " + getCookie('praise') + " مرات";
        }else{
            elem.innerHTML = "عدد التسابيح في المرة السابقة كان  " + getCookie('praise') + " مرة";

        }
        }
     

        
     });  
            var bars = document.querySelector('.ContainerBox');

     function OpenBar(){
         bars.style.left = "0";
     }    
         var closeEl = document.querySelector('.btn-close');
     closeEl.addEventListener('click' , function(){
            bars.style.left = "-300px";

         });



         /* TypeWriter*/


