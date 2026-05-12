import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlDate',
})
export class IntlDatePipe implements PipeTransform {
  transform(date: string, lang: string, style: "short" | "medium" | "long" | "full" = "medium"): string {
    return new Intl.DateTimeFormat(lang, { dateStyle: style }).format(new Date(date));
  }
}
