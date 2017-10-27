export class Logger {
  constructor(){

  };


  //Log each of the msg
  log(info){
    info.forEach( msg => {
      console.log(msg);
    });
  }
}

