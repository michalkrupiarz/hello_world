import (IPriceService) from './price.service';

export class MockPriceService implements IPriceService{

  calcTotalPrice(basePrice:number, state:string){
    if (state === 'FL'){
      return basePrice +0,66;
    }
    return basePrice;
  }

}
