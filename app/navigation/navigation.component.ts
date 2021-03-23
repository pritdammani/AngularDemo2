import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('fr');
  }



  changeLocale(locale: string) {
    this.translateService.use(locale);
  }
}
