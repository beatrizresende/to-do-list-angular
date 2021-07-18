import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  createTask(text: string) {
    if (text) {
      this.tasks.push(text);
    }
  }

  deleteTask(task: any) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}
