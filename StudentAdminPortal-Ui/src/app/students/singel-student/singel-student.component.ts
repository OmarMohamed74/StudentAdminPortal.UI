import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Gender } from 'src/app/Models/ui-models/gender.model';
import { Student } from 'src/app/Models/ui-models/student.model';
import { GenderService } from 'src/app/Services/gender.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-singel-student',
  templateUrl: './singel-student.component.html',
  styleUrls: ['./singel-student.component.css']
})
export class SingelStudentComponent implements OnInit {


  studentId: string | undefined | null;
  gendersList: Gender[] = [];

  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    mobile: 0,
    email: '',
    dateOfBirth: '',
    profileImgUrl: '',
    genderId: '',
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: '',
      studentId: ''
    },
    gender: {
      id: '',
      description: ''
    }
  }

  constructor(
    private readonly studentService: StudentService,
    private readonly genderListService: GenderService,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.studentId = params.get('id');

        //if studentId has a value 

        if (this.studentId) {

          this.studentService.GetStudent(this.studentId).subscribe({

            next: (onSuccess) => {
              this.student = onSuccess;
            }

          })

          this.genderListService.GetAllGenders().subscribe({
            next: (onSuccess) => {
              this.gendersList = onSuccess;
            }
          })


        }


      }

    );




  }

  UpdateStudent(): void {
    this.studentService.UpdateStudent(this.student.id, this.student).subscribe({

      next: (OnSuccess) => {
        this.snackBar.open("Data Updated Successfuly", '', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['green-snackBar']
        });
      },
      error: (onError) => {

      }
    });
  }

}
