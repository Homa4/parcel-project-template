import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(function (obj) {
    localStorage.setItem("videoplayer-current-time", obj.seconds);
}, 1000));

const seconds = localStorage.getItem("videoplayer-current-time");
if (seconds) {
    player.setCurrentTime(seconds).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
}