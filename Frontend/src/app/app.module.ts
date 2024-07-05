import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderModule } from './app-header/app-header.module';
import { RouterModule, Routes } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
import { PhoneMaskingDirective } from './Directives/phone-masking.directive';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    // PhoneMaskingDirective
    ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppHeaderModule,
    RouterModule.forRoot(appRoutes),
    SettingsModule,
    
  ],
  // exports:[
  //   PhoneMaskingDirective
  // ]
})
export class AppModule {}
