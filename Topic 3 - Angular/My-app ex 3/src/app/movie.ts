export class Movie {
  
  id: number;
  year: number;
  duration: number;
  title: string;

  constructor(obj){
    this.id = obj.id;
    this.year = obj.year;
    this.duration = obj.duration;
    this.title = obj.title;
  }
}