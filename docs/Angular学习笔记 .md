# Angular学习笔记  

## 学习链接  

[Angular中文网](https://angular.cn/)  
[Angular全套实战教程，零基础入门前端框架](https://www.bilibili.com/video/BV1R54y1J75g)  

## 学习笔记

1. **Angular组件**  
    - Angular提供的创建组件的简化工具：  
        ng generate component 组件名  
        npx ng generate component 组件名

        上述命令可简化为：
        ng g c 组件名
        npx ng g c 组件名

    - Node.js官方安装的工具：  
        npm：第三方模块的维护工具  
        npx：第三方可执行文件的执行工具，Node Package Executor  
        npx可用于执行当前项目中node_modules/.bin目录下的可执行文件

2. **Angular核心概念之三：数据绑定**  
    1. HTML绑定：`{{NG表达式}}`  
     测试：NG表达式中可以执行哪些代码  
     算术运算？--可以  
     比较运算？--可以  
     逻辑运算？--可以  
     三目运算？--可以  
     调用函数？--可以  
     创建对象？--**不可以**，NG表达式中禁止出现new关键字  
     JSON序列化？--**不可以**，NG表达式中JSON是undefined  

    2. 属性绑定：[]  
     Vue.js：`v-bind`或简写为`:`  
     形式1：直接在属性上用`{{}}` `<p title="{{msg}}">`  
     形式2：使用`[]`做属性绑定`<p [title]="msg">`  
     **注意**：属性绑定通常赋值为变量，如果赋值为常量（如字符串常量），  
      必须用引号括起来，如：  
        `<button [title]="'当前购买数:' + count">`  
        `<img [src]="'../assets/' + imgUrl">`

    3. 事件绑定：`()`  
     Vue.js：`v-on`或简写为`@`  
     `<button (click)="jianShao()">`  
     **注意**：事件名用（）括起来，处理函数名必须用（）括起来  

    4. 指令绑定  
        Vue.js中的常用指令  
        `v-on,v-bind,v-for,v-if,v-show,v-hide,v-text,v-html...`

        (1)循环绑定：`*ngFor`  

        ```
        <ANY *ngFor="let 临时变量 of 数据>  
        <ANY *ngFor="let 临时变量 of 数据; let i=index>  
        <ANY *ngFor="let 临时变量 of 数据; let index as i>  
        ```

        (2)选择绑定：`*ngIf`  

        ```
        <ANY*ngIf="布尔表达式">  
        说明：如果布尔表达式为false，则当前元素从DOM树上删除  
        <ANY *ngIf="布尔表达式"; else ELSE块的编号>..</ANY>  
        <ng-template #ELSE块的编号>  
            <ANY>…</ANY>  
        </ng-template>  
        ```

        (3)样式绑定：`[ngStyle]`  

        ```
        <ANY [ngStyle]="obj">  
        说明：ngStyle绑定的值必须是一个对象，对象属性就是CSS样式名  
        ```

        (4)样式绑定：`[ngClass]`  

        ```
        <ANY [ngClass]="obj">  
        说明：ngClass绑定的值必须是一个对象，对象属性就是CSS的class名，属性值为true/false，true的话该class就出现；否则该class不出现。 
        ```

        (5)特殊的选择绑定  

        ```
        <ANY [ngSwitch]="表达式">
            <ANY*ngSwitchCase="值1"></ANY>  
            <ANY *ngSwitchCase="值2"></ANY>  
            ....  
            <ANY*ngSwitchDefault></ANY>  
        </ANY>  
        ```

        >Angular中的指令分为三类：  
            1.  
            2. 解构型指令：会影响DOM树结构，必须使用*开头，如`*ngFor`，`*ngIf`  
            3. 属性型指令：不会影响DOM树结构，只是影响元素外观或行为，必须用[]括起来，如`[ngClass]`，`[ngStyle]`  

        (6)双向数据绑定指令：`[(ngModel)]`--**重点**  
            方向1：Model=>View，模型变则视图变，用[]绑定  
            方向2：View=>Model，视图(表单元素)变则模型变，用()绑定  
            `<input/select/textarea [(ngModel)]="uname">`  
            **注意**：  
                1.如果想直接监视模型数据改变，可以绑定ngModelChange事件  
                2.ngModel指令不在CommonModule模块中，而在FormsModule中，使用之前必须在主模块中导入该模块：  
                ```
                //app.module.ts:  
                imports: [  
                    BrowserModule, //浏览器模块，只要Angular用于Web项目，就必须导入此模块。其中导出了CommonModule  
                    AppRoutingModule,  
                    FormsModule  
                ],  
                ```

    5. 双向数据绑定  
