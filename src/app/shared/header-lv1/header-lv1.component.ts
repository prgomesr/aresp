import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-lv1',
  template: `
    <div class="col-md">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Dashboard</a></li>
          <li class="breadcrumb-item active" aria-current="page"> {{heading}} </li>
        </ol>
      </nav>
    </div>
    <div class="col-md">
      <hr>
    </div>
  `,
  styles: []
})
export class HeaderLv1Component  {
  @Input() heading: string;
}
