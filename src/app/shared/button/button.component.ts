import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="col-md">
      <a routerLink="{{ link }}"><i class="fa fa-plus"></i> Novo</a>
    </div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
