import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialCssVarsModule, MaterialCssVarsService } from 'angular-material-css-vars';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServiceInterceptor} from './services/service.interceptor'
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
    }),
    MaterialCssVarsModule.forRoot({
      isAutoContrast: true,
      darkThemeClass: 'isDarkTheme',
      lightThemeClass: 'isLightTheme'
    })
  ],
  providers: [MaterialCssVarsService,
  {provide:HTTP_INTERCEPTORS,useClass: ServiceInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
