import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): string {
    if (!img) return './assets/img/no-img.jpg';

    const imgUrl = `${environment.imgPath}/${size}${img}`;

    return imgUrl;
  }
}
