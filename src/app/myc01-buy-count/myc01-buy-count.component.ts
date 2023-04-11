import { Component } from '@angular/core';

@Component({
  selector: 'app-myc01-buy-count',
  templateUrl: './myc01-buy-count.component.html',
  styleUrls: ['./myc01-buy-count.component.css']
})
export class Myc01BuyCountComponent {
  // class内部的成员属性
  count = 3
  imgUrl = '1.jpg'
  // class内部的成员方法
  zengJia(){
    this.count++
  }
  jianShao(){
    this.count--
  }
}
