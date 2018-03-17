import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-lv1',
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Dashboard</a></li>
        <li class="breadcrumb-item active" aria-current="page"> {{heading}} </li>
      </ol>
    </nav>
  `,
  styles: []
})
export class HeaderLv1Component  {
  @Input() heading: string;
}
