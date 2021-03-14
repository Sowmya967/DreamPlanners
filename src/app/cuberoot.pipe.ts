import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuberoot'
})
export class CuberootPipe implements PipeTransform {

  transform(n: number, ...args: unknown[]): number {
    return n*n;
  }

}
