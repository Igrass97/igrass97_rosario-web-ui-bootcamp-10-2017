export class Movie {
  
  id: number;
  year: number;
  duration: number;
  title: string;

  constructor(id, title,year, duration){
    this.id = id;
    this.year = year;
    this.duration = duration;
    this.title = title;
  }
}