import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/ui-models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-singel-student',
  templateUrl: './singel-student.component.html',
  styleUrls: ['./singel-student.component.css']
})
export class SingelStudentComponent implements OnInit {


  studentId: string | undefined | null;

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

  constructor(private readonly studentService: StudentService, private readonly route: ActivatedRoute) {

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
        }


      }

    );




  }

}
