import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/student.model';

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
}
