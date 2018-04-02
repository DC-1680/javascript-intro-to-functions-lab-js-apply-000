function shout(string){
    return string.toUpperCase();

};

function whisper(string){
  return string.toLowerCase();
};

function logShout(string){
  console.log(string.toUpperCase());
};

function logWhisper(string){
  console.log(string.toLowerCase());
};

function sayHiToGrandma(string){
  let lowercase = 'hello';
  let uppercase = 'HELLO';

  if (string === "I love you, Grandma."){
    return "I love you, too.";
  } else if (string.toUpperCase() === uppercase){
    return "YES INDEED!";
  } else {
    return "I can\'t hear you!";
  }
}
