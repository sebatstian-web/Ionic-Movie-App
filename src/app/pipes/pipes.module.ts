import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './image.pipe';
import { PairsPipe } from './pairs.pipe';
import { FilterImgPipe } from './filter-img.pipe';

@NgModule({
  declarations: [ImagePipe, PairsPipe, FilterImgPipe],
  exports: [ImagePipe, PairsPipe, FilterImgPipe],
  imports: [CommonModule],
})
export class PipesModule {}
