;
import { CubePipe } from './cube.pipe'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductModule} from './product/product.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetUserComponent } from './greet-user/greet-user.component';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { PersonFromComponent } from './person-from/person-from.component';
import { CityListComponent } from './city-list/city-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { ReversePipe } from './reverse.pipe';
import { MyStyleDirective } from './my-style.directive';
import { PowPipe } from './pow.pipe';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetUserComponent,
    HelloUserComponent,
    PersonFromComponent,
    CityListComponent,
    CountryListComponent,
    DayPlannerComponent,
    ReversePipe,
    MyStyleDirective,
     CubePipe,
     PowPipe,
     LifeCycleHookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
