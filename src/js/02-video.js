var _ = require('lodash');
 const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data)    
}, 1000) );
if (localStorage.getItem("videoplayer-current-time") > 0) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time") )
}