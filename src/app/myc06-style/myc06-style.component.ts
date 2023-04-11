import { Component } from '@angular/core';

@Component({
  selector: 'app-myc06-style',
  templateUrl: './myc06-style.component.html',
  styleUrls: ['./myc06-style.component.css']
})
export class Myc06StyleComponent {
  // 待绑定的样式对象
  myStyleObj = {
    backgroundColor:'#383',
    color:'#fff',
    // borderColor:'#252'
    'border-color':'#252'
  }
  // 待绑定的CSS的class对象
  myClassobj = {
    btn:true,
    'btn-danger':false,//烤串法则
    // btnSuccess:true//驼峰法则,不可以用
    'btn-success':true
  }
  loadMore(){
    this.myStyleObj.backgroundColor = '#833'
    this.myStyleObj['border-color'] = '#522'
  }
  loadMore2(){
    this.myClassobj['btn-success']=false
    this.myClassobj['btn-danger']=true
  }
}
