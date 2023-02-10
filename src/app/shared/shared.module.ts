import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './';




@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe,
  ],
  exports: [
    MascaraDirective,
    TipoPipe,
    DataPipe,

  ],
  imports: [
    CommonModule
  ],
  providers: [PtBrMatPaginatorIntl]
})
export class SharedModule { }
