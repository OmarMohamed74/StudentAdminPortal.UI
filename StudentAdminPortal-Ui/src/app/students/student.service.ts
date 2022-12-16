import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/student.model';
import { UpdateStudent } from '../Models/api-models/updateStudent.model';
import { AddNewStudent } from '../Models/api-models/addNewStudent.model';


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

  DeleteStudent(studentId: string): Observable<Student> {

    return this.HttpClient.delete<Student>(this.baseApiUrl + '/students/' + studentId);

  }

  AddNewStudent(newStudent: Student): Observable<Student> {

    const addNewStudent: AddNewStudent = {
      firstName: newStudent.firstName,
      lastName: newStudent.lastName,
      dateOfBirth: newStudent.dateOfBirth,
      mobile: newStudent.mobile,
      email: newStudent.email,
      genderId: newStudent.genderId,
      physicalAddress: newStudent.address.physicalAddress,
      postalAddress: newStudent.address.postalAddress

    }

    return this.HttpClient.post<Student>(this.baseApiUrl + '/students/AddNewStudent', addNewStudent)

  }
}
