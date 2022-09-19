import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: number): string | number {
    if(value > 90000){
      return "+90000"
    }else{
      return value;
    }
  }

}
