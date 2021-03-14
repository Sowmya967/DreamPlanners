import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BanquetsComponent } from './banquets/banquets.component';
import { BudgetplanningComponent } from './budgetplanning/budgetplanning.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CorporateComponent } from './corporate/corporate.component';
import { HomeComponent } from './home/home.component';
import { OnlinerequestComponent } from './onlinerequest/onlinerequest.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SocialeventsComponent } from './socialevents/socialevents.component';
import { TimecoordinationComponent } from './timecoordination/timecoordination.component';
import { WeddingsComponent } from './weddings/weddings.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"timecoordination",component:TimecoordinationComponent},
  {path:"budgetplanning",component:BudgetplanningComponent},
  {path:"onlinerequest",component:OnlinerequestComponent},
  {path:"socialevents",component:SocialeventsComponent},
  {path:"weddings",component:WeddingsComponent},
  {path:"corporate",component:CorporateComponent},
  {path:"banquets",component:BanquetsComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
