import {PriceService} from './price.service';
import {MockPriceService} from './mockprice.service';

export class Product {
  mockedService : MockPriceService;
  mockBasePrice : number;
  service:PriceService;
  basePrice:number;
  constructor (mockedService:MockPriceService,basePrice:number){
    this.mockedService = mockedService;

    this.service = new PriceService();
    this.basePrice=basePrice;
  }
  totalPrice(state:string){
    return this.service.calcTotalPrice(this.basePrice,state);
  }

  mockTotalPrice(state:string){
    return this.mockedService.calcTotalPrice(this.basePrice,state);
  }
}
