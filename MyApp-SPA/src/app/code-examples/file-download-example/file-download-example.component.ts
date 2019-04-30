import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-download-example',
  templateUrl: './file-download-example.component.html',
  styleUrls: ['./file-download-example.component.css']
})
export class FileDownloadExampleComponent implements OnInit {
  fileInput;
  baseUrl = environment.apiUrl + 'codeexamples/';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelected(event) {}

  downloadWithDirectUrl() {
    const url =
      'https://s3.eu-central-1.amazonaws.com/db-apps-bucket1/BigFile.txt';
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = 'bigFile.txt';
    a.click();
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(url);
      a.remove();
    }, 100);
    return;
  }

  download() {
    console.log('start: ' + new Date().toLocaleTimeString());

    const url =
      'https://s3.eu-central-1.amazonaws.com/db-apps-bucket1/BigFile.txt';
    this.http
      .get(url, {
        //.get(this.baseUrl + 'DownloadFile', {
        responseType: 'arraybuffer',
        //responseType: 'blob',
        reportProgress: true,
        observe: 'events',
        headers: new HttpHeaders()
          .append('Content-Type', 'application/json')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Content-Length')
          .append('Access-Control-Expose-Headers', 'Content-Length')
        //.append('Authorization', 'Bearer ' + 'my token')
      })
      //.pipe(map((res: ArrayBuffer) => {
      //  return res; }))
      .subscribe(event => {
          console.log('downloading started' + new Date().toLocaleTimeString());

          if (event.type === HttpEventType.DownloadProgress) {
            const pv = Math.round((event.loaded / event.total) * 100);
            return;
          } else if (event.type !== HttpEventType.Response) {
            return;
          }

          console.log('downloading response' + new Date().toLocaleTimeString());
          const data = event.body;
          const newBlob = new Blob([data], { type: 'octet/stream' });

          // IE doesn't allow using a blob object directly as link href
          // instead it is necessary to use msSaveOrOpenBlob
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
          }

          // For other browsers:
          // Create a link pointing to the ObjectURL containing the blob.
          const aUrl = window.URL.createObjectURL(newBlob);
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.setAttribute('style', 'display: none');
          a.href = aUrl;
          a.download = 'bigFile.txt';
          a.click();
          setTimeout(() => {
            // For Firefox it is necessary to delay revoking the ObjectURL
            window.URL.revokeObjectURL(aUrl);
            a.remove();
          }, 100);
        },
        error => {
          console.log('downloading error: ', JSON.stringify(error));
        },
        () => {
          console.log(
            'downloading completed ' + new Date().toLocaleTimeString()
          );
        }
      );
  }

  download2() {
    const url = 'https://s3.eu-central-1.amazonaws.com/db-apps-bucket1/BigFile.txt';
    window.open(url);
  }

  download3() {
    const url = this.baseUrl + 'DownloadFile3';
    try {
      //const strWindowFeatures = 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none';
      //const win = window.open(url, null, strWindowFeatures);
      const win = window.open(url);
      win.blur();
      win.opener.focus();

      const t = setTimeout(() => {
        console.log('in setTimeout', win);
        win.close();
      }, 5000);

      window.focus();
    } catch (e) {
      console.log('exception', e);
    }
  }
}
