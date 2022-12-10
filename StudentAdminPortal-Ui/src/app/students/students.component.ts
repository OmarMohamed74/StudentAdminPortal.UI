import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Models/ui-models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  AllStudents: Student[] = [];

  displayedStudentsColumns: string[] = ['firstName', 'lastName', 'mobile', 'email', 'gender', 'dateOfBirth', 'edit'];
  dataSourceOfStudentTable: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) tablePaginator!: MatPaginator;
  @ViewChild(MatSort) tableSort!: MatSort;

  searchFilterString = '';




  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.GetAllStudents()
      .subscribe({
        next: (OnSucces) => {
          this.AllStudents = OnSucces;
          this.dataSourceOfStudentTable = new MatTableDataSource<Student>(this.AllStudents);

          if (this.tablePaginator) {
            this.dataSourceOfStudentTable.paginator = this.tablePaginator
          }
          if (this.tableSort) {
            this.dataSourceOfStudentTable.sort = this.tableSort
          }
        },
        error: (OnFail) => {
          console.error(OnFail)
        }
      })


    // this.studentService.GetAllStudents()
    //   .subscribe(
    //     (OnSuccess) => {
    //       console.log(OnSuccess);
    //     },
    //     (OnFail) => {
    //       console.log(OnFail);
    //     }
    //   )
  }

  searchFilter() {

    this.dataSourceOfStudentTable.filter = this.searchFilterString.trim().toLocaleLowerCase();
  }
}
