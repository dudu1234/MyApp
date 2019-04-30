import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToText'
})
export class EnumToTextPipe implements PipeTransform {

  transform(value: number, enumType: any): any {
    if (value && enumType) {
      // tslint:disable-next-line:no-unused-expression
      return enumType[value];
    }
    return value;
  }
}
