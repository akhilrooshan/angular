import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes4'
})
export class Pipes4Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
