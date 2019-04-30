import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-jsPlayground',
  templateUrl: './jsPlayground.component.html',
  styleUrls: ['./jsPlayground.component.css']
})
export class JsPlaygroundComponent implements OnInit {
  baseUrl = environment.apiUrl + 'products/';
  simpleAxiosResponse = '';

  constructor() {}

  ngOnInit() {}

  axiosRequest1() {
    const token = localStorage.getItem('token');
    axios
      .get(this.baseUrl + '1', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log(response.data);
        console.log('status: ' + response.status);
        console.log(response.headers);
        console.log(response.config);
        this.simpleAxiosResponse = JSON.stringify(response.data);
      })
      .catch(error => {
        console.log(error);
        this.simpleAxiosResponse = error.toString();
      });
  }

  axiosRequest2() {
    const token = localStorage.getItem('token');
    axios({
      method: 'get',
      url: this.baseUrl + '1',
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'stream'
    })
      .then(response => {
        this.simpleAxiosResponse = 'saving file';
        let binaryData = [];
        binaryData.push(JSON.stringify(response.data));
        const object = window.URL.createObjectURL(new Blob(binaryData, {type: 'application/json'}));
        saveAs(object, 'product1.json');
      })
      .catch(error => {
        console.log(error);
        this.simpleAxiosResponse = error.toString();
      });
  }
}
