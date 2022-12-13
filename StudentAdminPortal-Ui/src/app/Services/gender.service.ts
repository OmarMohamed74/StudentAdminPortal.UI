import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../Models/api-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseApiUrl = 'https://localhost:7033';

  constructor(private httpClient: HttpClient) {
  }

  GetAllGenders(): Observable<Gender[]> {

    return this.httpClient.get<Gender[]>(this.baseApiUrl + '/genders')

  }
}
