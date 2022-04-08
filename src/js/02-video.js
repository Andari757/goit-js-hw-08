var throttle = require('lodash.throttle');

 const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    


player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data)    
}, 1000) );
if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time") )
}