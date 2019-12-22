import { NgModule } from '@angular/core';
import { EnabledClickDirective } from './enabled-click.directive';

@NgModule({
  declarations: [EnabledClickDirective],
  exports: [EnabledClickDirective]
})
export class NgxEnabledClickModule { }
