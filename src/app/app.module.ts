import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TimecoordinationComponent } from './timecoordination/timecoordination.component';
import { BudgetplanningComponent } from './budgetplanning/budgetplanning.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OnlinerequestComponent } from './onlinerequest/onlinerequest.component';
import { SocialeventsComponent } from './socialevents/socialevents.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CorporateComponent } from './corporate/corporate.component';
import { BanquetsComponent } from './banquets/banquets.component';
import { CuberootPipe } from './cuberoot.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TimecoordinationComponent,
    BudgetplanningComponent,
    PagenotfoundComponent,
    OnlinerequestComponent,
    SocialeventsComponent,
    WeddingsComponent,
    CorporateComponent,
    BanquetsComponent,
    CuberootPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
