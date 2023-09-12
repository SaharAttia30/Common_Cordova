import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() response: string = "";
  stemLength: string = "";
  stemWidth: string= "";
  bladeLength: string = "";
  bladeWidth: string = "";
  title = 'src';
  constructor(private http: HttpClient) { }
  onUpload(): void {
    var res = this.stemLength+","+this.stemWidth+","+this.bladeLength+","+this.bladeWidth;
    console.log(res);
    // if (this.selectedFile) {
    //   const formData = new FormData();
    //   formData.append('image', this.selectedFile, this.selectedFile.name);
    //   fetch('http://localhost:3000/', {
    //     method: 'POST',
    //     body: formData
    //   })
    //     .then(response => response.text())
    //     .then(text => {
    //       if (Number(text.split(',')[0]) == 1) {
    //         this.response = "in the picture we see a car. the type of car is ";
    //       }
    //       else {
    //         this.response = "in the picture we see a ";
    //       }

    //     });
    // }
  }
}
