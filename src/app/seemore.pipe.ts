import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(desc:string , limit:number): unknown {
    return desc.substring(0,limit);
  }

}
