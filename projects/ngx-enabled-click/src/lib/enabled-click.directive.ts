import { Directive, Output, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({ selector: '[enabledClick]' })
export class EnabledClickDirective {
	@Input() disabled: boolean | string
	@Output() enabledClick = new Subject<MouseEvent>()

	@HostListener('click', ['$event'])
	onHostClick($event: MouseEvent) {
		if (!this.isDisabled()) {
			this.enabledClick.next($event)
		}
	}

  private isDisabled() {
    return (typeof this.disabled === 'string' && this.disabled !== 'false')
      || (typeof this.disabled === 'boolean' && this.disabled);
  }
}
