import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit, OnChanges {
  @Input() options: any;
  @Input() label: any;
  @Output() selectedValue = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = changes.options.currentValue;
  }

}
