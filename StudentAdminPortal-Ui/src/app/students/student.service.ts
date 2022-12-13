import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/student.model';
import { UpdateStudent } from '../Models/api-models/updateStudent.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:7033';

  constructor(private HttpClient: HttpClient) {
  }

  GetAllStudents(): Observable<Student[]> {
    return this.HttpClient.get<Student[]>(this.baseApiUrl + '/students')
  }

  GetStudent(studentId: string): Observable<Student> {

    return this.HttpClient.get<Student>(this.baseApiUrl + '/students/' + studentId)
  }

  UpdateStudent(studentId: string, updateStudent: Student): Observable<Student> {
    const updateStudentRequest: UpdateStudent = {
      firstName: updateStudent.firstName,
      lastName: updateStudent.lastName,
      dateOfBirth: updateStudent.dateOfBirth,
      mobile: updateStudent.mobile,
      email: updateStudent.email,
      genderId: updateStudent.genderId,
      physicalAddress: updateStudent.address.physicalAddress,
      postalAddress: updateStudent.address.postalAddress
    }

    return this.HttpClient.put<Student>(this.baseApiUrl + '/students/' + studentId, updateStudent)
  }
}
