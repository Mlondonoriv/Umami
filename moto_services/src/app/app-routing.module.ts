import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MotoServicioComponent } from './components/moto-servicio/moto-servicio.component';
import { SkelletonTagsComponent } from './components/skelleton-tags/skelleton-tags.component';




const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"moto-servicio",component:MotoServicioComponent},
  {path:"skelleton-tags",component:SkelletonTagsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
