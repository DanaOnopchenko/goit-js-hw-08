import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

onSaveVideoTime()
    player.on('timeupdate',throttle(onVideoTimeUpdate, 1000) )
        console.log('played the video!');
    

function onVideoTimeUpdate(data) {
    console.log(data.seconds)
    const saveVideoTimer = data.seconds;
    localStorage.setItem(STORAGE_KEY, saveVideoTimer )
}
   
function onSaveVideoTime() { 
    const savedVideo = localStorage.getItem(STORAGE_KEY);
    if (savedVideo) { 
       player.setCurrentTime(savedVideo)
    }
}