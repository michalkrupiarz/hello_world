import { Injectable } from '@angular/core';

@Injectable()
export class PriceService {

  constructor() { }

  calcTotalPrice(basePrice:number,state:string){
    const tax = Math.random();
    return basePrice*tax;
  }
  export interface IPriceService{
    calcTotalPrice(basePrice:number,state:string):number;
  }
}
