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
   this.taskServices.getTasks().subscribe((tasks)=> (this.tasks = tasks));

  }
  deleteTask(task: Task){
    this.taskServices.deleteTask(task).
    subscribe(
      ()=> (this.tasks = this.tasks.filter(t=> t.id !== task.id))
      );
  
    }

    toggleReminder(task: Task){
      task.reminder = !task.reminder;
      console.log(task.reminder);
    }
 addTask(task: Task)
 {
  this.taskServices.addTask(task).subscribe((task) => (this.tasks.push(task)));
   console.log(task);
   
 }
}
