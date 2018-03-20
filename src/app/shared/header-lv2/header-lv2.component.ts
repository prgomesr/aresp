import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-lv2',
  template: `
    <div class="col-md">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/dashboard">Dashboard</a></li>
          <li class="breadcrumb-item"><a routerLink="{{linkAnterior}}">{{headingAnterior}}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{heading}}</li>
        </ol>
      </nav>
    </div>
    <div class="col-md">
      <h1 class="display-4">{{heading}}</h1>
      <hr>
    </div>
  `,
  styles: []
})
export class HeaderLv2Component  {
  @Input() linkAnterior: string;
  @Input() headingAnterior: string;
  @Input() heading: string;

}
