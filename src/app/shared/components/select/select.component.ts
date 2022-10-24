import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() selected: string = '';
  @Output() selectedValue = new EventEmitter<string>();
  options = ['TESTE', 'TESTE 2', 'TESTE 3']
  openOptions: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  open() {
      this.openOptions = !this.openOptions;
  }

  getValue() {
    return this.selected;
  }

  selectOption(opt: string) {
    this.selected = opt
    this.openOptions = false;
    this.selectedValue.emit(opt);
  }

}