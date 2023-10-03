export interface people{
    id:string;
    name:string;
    height:number;
    mass:number;
    birth_year:string;
    films:string;
    homeworld:string;
    next:string;
    url:string;
    eye_color:string;
    hair_color:string;
  }


  export interface peopleHomeWorld{
    name:string;
    terrain:string;
    climate:string;
    residents:string;
  }

  export interface data{
    next:string|null;
    previous:string|null;
  }