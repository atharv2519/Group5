import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlacementComponent } from './placement/placement.component';
import { AdmissionComponent } from './admission/admission.component';


const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent},
{path:'index',component:IndexComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'placement',component:PlacementComponent},
{path:'admission',component:AdmissionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
