# NgxEnabledClick

```bash
npm install @nooice/ngx-enabled-click
```

Usage

```html
<my-component
	disabled
	(enabledClick)="clickHandler($event)"
></my-component>
```

disabled can be either a boolean (angular property binding) `[disabled]="true"` or an attribute `disabled="true"`. In the attribute case, anything except for `disabled="false"` is considered as disabled. So both `disabled="true"` and just simply `disabled` will be respected.
