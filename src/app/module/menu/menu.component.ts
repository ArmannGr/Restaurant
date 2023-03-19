import { Component, OnInit } from '@angular/core';
import {DialogHelloComponent} from "../dialog/dialog-hello/dialog-hello.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialogHello();
  }

  openDialogHello(): void{
    const dialogRef = this.dialog.open(DialogHelloComponent);

  }

}
