import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let throttle = require('lodash.throttle');

const keyCurrentTime = 'videoplayer-current-time';
const playedTime = function (data) {
  localStorage.setItem(keyCurrentTime, data.seconds);
};
player.on('timeupdate', throttle(playedTime, 1000));

const stopedTime = localStorage.getItem(keyCurrentTime) ?? 0;

player.setCurrentTime(stopedTime);
