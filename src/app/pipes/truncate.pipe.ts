import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

 		transform(val:string, args:number) :string {

			if (val.length > 1){
			return val.substring(0, args)+'...'; 
			}
			else{

				return val;
			}
		}

}
