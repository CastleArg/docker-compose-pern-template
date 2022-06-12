import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface Message {
  id: number,
  message: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  messages$: Observable<Message[]> = new Observable<Message[]>();
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
      this. messages$ = this.http
          .get<Message[]>(`${environment.apiUrl}/messages`);
  }

}
