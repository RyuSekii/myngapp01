import { Component } from '@angular/core';

@Component({
  selector: 'app-myc08-ngmodel',
  templateUrl: './myc08-ngmodel.component.html',
  styleUrls: ['./myc08-ngmodel.component.css']
})
export class Myc08NgmodelComponent {
  // Model
  uname=''

  pattern = ''

  doUnameChange(){
    // console.log(this.uname)
    if (this.uname.length < 6 && this.uname.length > 0) {
      this.pattern = '1'
      console.log(this.pattern)
    }
    if (this.uname.length > 12) {
      this.pattern = '2'
      console.log(this.pattern)
    }
    if (this.uname.length > 6 && this.uname.length < 12) {
      this.pattern = '3'
      console.log(this.pattern)
    }
  }
}
