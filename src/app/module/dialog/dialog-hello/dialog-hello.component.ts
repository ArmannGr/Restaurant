import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-hello',
  templateUrl: './dialog-hello.component.html',
  styleUrls: ['./dialog-hello.component.css']
})
export class DialogHelloComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogHelloComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
