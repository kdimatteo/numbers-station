const msg = new SpeechSynthesisUtterance();
let count = 0;
let pauseLen = 0;

msg.voiceURI = 'native';
msg.volume = 0.4;
msg.rate = 1;
msg.pitch = 1; //0 to 2
msg.lang = 'en-US';

speechSynthesis.onvoiceschanged = () => {
  let v = speechSynthesis.getVoices();
  msg.voice = v[39];
  setInterval(begin, 1200);
}

const getNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const begin = function() {
  let n = getNum(0, 9);

  if(count < 0 && pauseLen > 0){
    n = '';
    pauseLen--;
  }

  if(pauseLen === 0){
    pauseLen = getNum(10, 30);
    count = getNum(5, 10);
  }

  count--;
 


  msg.text = n.toString();
  document.title = msg.text;
  // document.getElementById("number").innerHTML = n;
  speechSynthesis.speak(msg);
}