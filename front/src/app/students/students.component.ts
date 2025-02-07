import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.services';
import { Student } from '../models/student';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit{
    
    students: Student[] = [];
    student: Student;   //студент которого редактируем

    constructor(private studentService: StudentService){}

    ngOnInit(): void{
        this.studentService
            .getAll()
            .subscribe((result: Student[]) => (this.students = result));
       
    }
    addStudent(){
        this.student = new Student("","","");
    }
    openStudent(s: Student)
    {
        this.student = s;
    } 
}