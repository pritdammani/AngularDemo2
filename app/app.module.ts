import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { EmployeeComponent } from './employee/employee.component';
import { ProdwjsonComponent } from './prodwjson/prodwjson.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { ZoomdDirective } from './zoomd.directive';
import { HomeComponent } from './home/home.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { AdvjavaComponent } from './advjava/advjava.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { FormBuildComponent } from './form-build/form-build.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { TrialComponent } from './trial/trial.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
@NgModule({
  declarations: [
    AppComponent, routingComponents,
    JavaComponent,
    WebComponent,
    EmployeeComponent,
    ProdwjsonComponent,
    SearchPipe,
    SortPipe,
    ZoomdDirective,
    HomeComponent,
    CorejavaComponent,
    AdvjavaComponent,
    AngularComponent,
    JavascriptComponent,
    TempDrivenFormComponent,
    ModelDrivenFormComponent,
    FormBuildComponent,
    NavigationComponent,
    FooterComponent,
    ReviewComponent,
    FrontComponent,
    BackComponent,
    TrialComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
