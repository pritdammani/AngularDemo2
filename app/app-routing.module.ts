import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvjavaComponent } from './advjava/advjava.component';
import { AngularComponent } from './angular/angular.component';
import { BackComponent } from './back/back.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormBuildComponent } from './form-build/form-build.component';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { ProdwjsonComponent } from './prodwjson/prodwjson.component';
import { ReviewComponent } from './review/review.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path: 'web', component: WebComponent,
    children: [
      { path: 'javascript', component: JavascriptComponent },
      { path: 'angular', component: AngularComponent },
    ]
  
  },
  {
    path: 'technology', component: JavaComponent,
    children: [
      { path: 'front', component: FrontComponent },
      { path: 'back', component: BackComponent },
      { path: 'core', component: CorejavaComponent },
    ]
  },
  { path: 'employee', component: EmployeeComponent },
  { path: 'products', component: ProdwjsonComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: TempDrivenFormComponent },
  { path: 'model', component: ModelDrivenFormComponent },
  { path: 'build', component: FormBuildComponent },
  { path: 'review', component: ReviewComponent },

  { path: 'login', component: AngularComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WebComponent, JavaComponent]
