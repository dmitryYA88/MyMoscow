let slider = document.querySelector('.slider');
let point1 = document.getElementById('point-first');
let point2 = document.getElementById('point-second');
let point3 = document.getElementById('point-third');
let fon1 = "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('photos/3.jpg')";
let fon2 = "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('photos/top.jpg')";
let fon3 = "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('photos/7.jpg')";
let fons = [fon1,fon2,fon3];
let i = 1;
let twister = function twist2() {
    ++i;
    if (i<=2) {
        slider.style.backgroundImage = fons[i];
    
        switch (i){
            case 0:
                point1.style.border = '2px solid white'; 
                point1.style.borderRadius = '100%'; 
                point1.style.padding = '7px';
                point2.style.border = 'none';
                point3.style.border = 'none';
            break;
            case 1:
                point2.style.border = '2px solid white'; 
                point2.style.borderRadius = '100%'; 
                point2.style.padding = '7px';
                point1.style.border = 'none';
                point3.style.border = 'none';
            break;
            case 2:
                point3.style.border = '2px solid white'; 
                point3.style.borderRadius = '100%'; 
                point3.style.padding = '7px';
                point1.style.border = 'none';
                point2.style.border = 'none';
            break;
        };
    } else {
        i =-1;
        twist2()
    } ;   
};

setInterval (twister,8000);

document.querySelector('.narrow-1').addEventListener('click', function twist() {
    --i;
    if (i>=0) {
        slider.style.backgroundImage = fons[i];
    
        switch (i){
            case 0:
                point1.style.border = '2px solid white'; 
                point1.style.borderRadius = '100%'; 
                point1.style.padding = '7px';
                point2.style.border = 'none';
                point3.style.border = 'none';
            break;
            case 1:
                point2.style.border = '2px solid white'; 
                point2.style.borderRadius = '100%'; 
                point2.style.padding = '7px';
                point1.style.border = 'none';
                point3.style.border = 'none';
            break;
            case 2:
                point3.style.border = '2px solid white'; 
                point3.style.borderRadius = '100%'; 
                point3.style.padding = '7px';
                point1.style.border = 'none';
                point2.style.border = 'none';
            break;
        };
    } else {
        i = 3;
        twist()
    } ;   
})

document.querySelector('.narrow-2').addEventListener('click', twister);

