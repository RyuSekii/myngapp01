import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01BuyCountComponent } from './myc01-buy-count/myc01-buy-count.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc03NgifComponent } from './myc03-ngif/myc03-ngif.component';
import { Myc04NgifComponent } from './myc04-ngif/myc04-ngif.component';
import { Myc05NgifComponent } from './myc05-ngif/myc05-ngif.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component';
import { Myc08NgmodelComponent } from './myc08-ngmodel/myc08-ngmodel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [//宣言、声明、宣称
    AppComponent,
    Myc01BuyCountComponent,
    Myc02NgforComponent,
    Myc03NgifComponent,
    Myc04NgifComponent,
    Myc05NgifComponent,
    Myc06StyleComponent,
    Myc07SwitchComponent,
    Myc08NgmodelComponent
  ],
  imports: [
    BrowserModule, //浏览器模块，只要Angular用于Web项目，就必须导入此模块。其中导出了CommonModule
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
