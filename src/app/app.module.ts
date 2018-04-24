import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarService } from './sidebar/sidebar.service';
import { UsersService } from './users/users.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './dashboard/map.component';
import { MapOneComponent } from './dashboard/map-one.component';
import { MapTwoComponent } from './dashboard/map-two.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WeatherComponent } from './weather/weather.component';
import { LatestFeedComponent } from './latest-feed/latest-feed.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationsComponent,
    LoginComponent,
    DashboardComponent,
    MapComponent,
    MapOneComponent,
    MapTwoComponent,
    UsersComponent,
    ProfileComponent,
    SettingsComponent,
    WeatherComponent,
    LatestFeedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    SidebarService, 
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
