import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelindrome'
})
export class PipelindromePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
