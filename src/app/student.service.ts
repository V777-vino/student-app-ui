import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private serverUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.serverUrl}/student/findall`);
  }

  public addStudents(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.serverUrl}/student/add`, student);
  }

  public updateStudents(studentId: number, student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.serverUrl}/student/update/${studentId}`, student);
  }

  public deleteStudents(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}/student/delete/${studentId}`);
  }
}
