import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aws-examples',
  templateUrl: './aws-examples.component.html',
  styleUrls: ['./aws-examples.component.css']
})
export class AwsExamplesComponent implements OnInit {
  bucketName = 'db-apps-bucket1';
  responseText = '';
  baseUrl = environment.apiUrl + 'aws/';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getFiles() {
    return this.http
      .get<AwsFileInfo[]>(this.baseUrl + `GetBucketFiles/${this.bucketName}`)
      .subscribe((files: AwsFileInfo[]) => {
        this.responseText = files.map(x => x.fileName + '\t\t\t\t\t\t' + x.size.toLocaleString()).join('\r\n');
      },
      error => {
        this.responseText = error;
      });
  }

  clear() {
    this.responseText = '';
  }
}

export interface AwsFileInfo {
  fileName: string;
  size: number;
}
