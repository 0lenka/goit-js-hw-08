import throttle from 'lodash.throttle';
import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(saveInLocalStorage, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function saveInLocalStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds.toFixed());
};