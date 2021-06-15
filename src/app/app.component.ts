import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  public sayHi($event){
    window.open("https://www.linkedin.com/in/prateek-kovalli-7402b5185/","_blank")
  }

  public writeEmail($event){
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=prateekkovalli7@gmail.com&tf=cm","_blank")
  }
}
