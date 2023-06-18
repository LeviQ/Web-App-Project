import { Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit{

  languages: string[] = ['English', 'Deutsch', 'Polish'];
  selectedLanguage: string = 'Select Language';

  ToHome(){
    document.getElementById("stronapierw")?.scrollIntoView({behavior:"smooth"});
  }

  ToSecondPage(){
    document.getElementById("About")?.scrollIntoView({behavior:"smooth"});
  }

  ToThirdPage(){
    document.getElementById("thirdpage")?.scrollIntoView({behavior:"smooth"});
  }

  ToContactPage(){
    document.getElementById("fourthpage")?.scrollIntoView({behavior:"smooth"});
  }

  ngOnInit() {
    AOS.init();
  }

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



