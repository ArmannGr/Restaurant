import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() clickMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickMenu.emit();
    console.log("test")
  }
}
