import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output()
  clickWrapper = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  wrapperClick(e: any) {
    if (e.target.className === 'wrapper') {
      this.clickWrapper.emit();
    }
  }

}
