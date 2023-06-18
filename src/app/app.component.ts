import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-App-Project';

  constructor(
    public translate: TranslateService
  ){
    
    translate.addLangs(['en', 'pl', 'de']);
    
    translate.setDefaultLang('en');
  } 

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}


