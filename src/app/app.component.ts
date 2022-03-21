import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'QR';
  public width = 300;
  public baseInfo = 'https://codelaghien.club/covid19';
  public qrInfo = this.baseInfo;
  public name = '';
  public age = 0;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((v) => {
      console.log('queryParams=', v);
      if (v && v.data) {
        const data = v.data;
        console.log('queryParams data =', data);
        console.log('name =', data.name);
        console.log('age =', data.age);

        const obj = JSON.parse(data);
        console.log('queryParams obj =', obj);
        console.log('name =', obj.name);
        console.log('age =', obj.age);
      }
    });
  }

  public changeBase(event: any): void {
    this.baseInfo = event.target.value;
    this.qrInfo = event.target.value;
    this.combine();
  }
  public handleChangeCode(e: any): void {
    console.log('code', e.target.value);
    this.qrInfo = e.target.value;
  }
  public handleChangeName(e: any): void {
    console.log('name', e.target.value);
    this.name = e.target.value;
  }
  public handleChangeAge(e: any): void {
    console.log('age', e.target.value);
    this.name = e.target.value;
  }

  private combine(): void {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.qrInfo = this.baseInfo + '?data=' + data;
    console.log('qrInfo=', this.qrInfo);
  }
}
