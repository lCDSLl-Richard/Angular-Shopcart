import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, words: number): string {
    const splittedValue = value.split(' ');
    if (splittedValue.length <= words) return value;
    splittedValue.splice(words - 1);
    return splittedValue.join(' ') + '...';
  }
}
