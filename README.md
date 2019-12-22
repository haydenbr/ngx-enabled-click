# NgxEnabledClick

```bash
npm install @nooice/ngx-enabled-click
```

What problem does this solve? I'm glad you asked.

Consider the following scenario:

```html
<my-component
  [disabled]="disabledTheThing$ | async"
  (click)="doSomething($event)"
></my-component>
```

The disabled logic may very well be a reference to a boolean variable or a function call, but an observable better motivates the problem, and is my use case most often.

If you're working with an html `<button>`, then the click event won't fire when the `disabled` attribute is set. Working with other elements or components though, you'll have to double check your disabled logic in the click handler.

So then in your component class, you'll have to do something like this.

```ts
doSomething() {
  this.disabledTheThing$
    .pipe(take(1))
    .subscribe((disabled) => {
      if (!disabled) {
        // do things ...
      }
    })
}
```

When your disabled logic comes from Observables, this repetition becomes really annoying. (But if you ask me, I'd say this repetition is annoying no matter what drives your disabled logic).

With this directive, we can simplify the above example as follows

```html
<my-component
  [disabled]="disabledTheThing$ | async"
  (enabledClick)="doSomething($event)"
></my-component>
```

and then in your component class

```ts
doSomething() {
  // do the thing ...
}
```

Your click handler will now be called only when the target element or component is not disabled (when it is *enabled*). The target need not have any knowledge of a disabled input or attribute, but if it *does* have an `@Input() disabled`, everything still works as expected.

The target element is considered disabled (and `enabledClick` is not fired) in the following cases:

- `[disabled]` is a string not equal to `"false"`. The value would be a string if disabled were treated as an element attribute.
-  `[disabled]` is a boolean, equal to `true`.
