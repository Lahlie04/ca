import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

//import { TASKS } from 'src/app/mock-task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 tasks: Task[] = [];

  constructor(private taskServices: TaskService) { }
  

  ngOnInit(): void {
  }

}
