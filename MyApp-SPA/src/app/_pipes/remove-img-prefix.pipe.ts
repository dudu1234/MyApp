import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeImgPrefix'
})
export class RemoveImgPrefixPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.replace('https://s3.eu-central-1.amazonaws.com/db-apps-bucket1/Images/', '');
    }
    return '';
  }
}
