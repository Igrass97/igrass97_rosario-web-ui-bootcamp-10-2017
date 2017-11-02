export class Movie {
  id: number;
  title: string;
  duration: number;
  year: number;

  constructor(id:number, title:string, duration:number, year:number){
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.year = year;
  }
}