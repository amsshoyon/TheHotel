import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent } from './weddings/westerns-weddings/westerns-weddings.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: 'Accomodation', component: AccomodationComponent },
    { path: 'Celebrations', component: CelebrationsComponent },
    { path: 'Rooms', component: RoomsComponent },
    { path: 'Food&Beverage', component: FoodAndBeverageComponent },
    { path: 'Restaurant', component: RestaurantComponent },
    { path: 'Bars', component: BarsComponent },
    { path: 'Weddings', component: WeddingsComponent },
    { path: 'ThaiWeddings', component: ThaiWeddingsComponent },
    { path: 'WesternsWeddings', component: WesternsWeddingsComponent },
    { path: 'Offers', component: OffersComponent },
    { path: 'Auth', component: AuthComponent },
    { path: 'SignIn', component: SigninComponent },
    { path: 'SignUp', component: SignupComponent },
    { path: 'LifeStyles', component: LifestyleComponent },
    { path: 'Experiences', component: ExperiencesComponent },
    { path: 'Excursions', component: ExcursionsComponent },
    { path: 'Resort', component: ResortActivitiesComponent },
    { path: 'Welness$Spa', component: WelnessAndSpaComponent },
    { path: '', component: HomeComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}