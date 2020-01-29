console.log('Hello, world!');

const $button = document.querySelector('.button')
$button.addEventListener('click', function() {

  let message = ['Are you trying to hurt me?', 'Self-descructing in 3 seconds', 'I told you not to', 'Literally it says DO NOT', 'I cannot believe you\'ve done this', 'Mady owes everyone $20', 'Everyone gets to go home early!', 'Congrats, you didn\'t follow directions'];
  let buttonMessage = ['Don\'t you dare press it again', 'wow, stop pressing', 'Why is this happening', 'You should be locked away', 'Bye Felicia, no pressing', 'Umm stop pls'];
  let a = Math.floor(Math.random() * message.length);
  let b = Math.floor(Math.random() * buttonMessage.length);

  window.alert(message[a]);
  $button.textContent = (buttonMessage[b]);
});
