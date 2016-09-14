import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: [
      // load the default theme
      '../node_modules/@telerik/kendo-theme-default/dist/all.css'
    ],
    template: `
      <h1>My First Kendo UI Angular 2 App</h1>
      <button kendoButton (click)="onButtonClick()" [primary]="true">
        My Kendo UI Button
      </button>
    `
})
export class AppComponent {
    onButtonClick() {
       alert('Hello from Kendo UI!');
    }
}
