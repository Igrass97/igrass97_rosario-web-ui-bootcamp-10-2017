export class Movie {
  id: number;
  title: string;
  duration: number;
  year: number;

  constructor(id:number=null, title:string=null, duration:number=null, year:number=null){
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.year = year;
  }
}