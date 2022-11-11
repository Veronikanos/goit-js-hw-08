import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onUpdateTime = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(onUpdateTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
