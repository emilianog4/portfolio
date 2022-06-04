import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
  private apiServerUrl=environment.APIBaseUrl;

  constructor(private http:HttpClient) { }

  public getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills`);
  }
  public addSkills(skills:Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/skills`, skills);
  }
  public updateSkills(skills:Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/skills`, skills);
  }
  public deleteSkills(idSkill:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skills/${idSkill}`);
  }
}
