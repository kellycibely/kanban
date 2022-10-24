import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() selected: string | undefined = '';
  @Output() selectedValue = new EventEmitter<string>();
  openOptions: boolean = false;

  icon = faChevronDown;
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
