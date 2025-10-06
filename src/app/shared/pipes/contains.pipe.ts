import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
