import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="ui-g-12" style="margin-bottom: -18px">
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
