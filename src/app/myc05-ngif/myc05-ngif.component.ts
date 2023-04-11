import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05-ngif',
  templateUrl: './myc05-ngif.component.html',
  styleUrls: ['./myc05-ngif.component.css']
})
export class Myc05NgifComponent {
  hasMore = true // 是否还有更多数据
  // hasMore =false

  loadMore(){
    //假装此处加载了很多数据
    this.hasMore = false
  }
}
