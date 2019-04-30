import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { JwtModule } from '@auth0/angular-jwt';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';

import { AppRoutingModule } from './app.routing';

import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { ProductService } from './_services/product.service';
import { OrderService } from './_services/order.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { MemberRegisterComponent } from './member/member-register/member-register.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    MemberRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    NgxGalleryModule,
    BreadcrumbsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  exports: [NgxGalleryModule, FormsModule],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    ProductService,
    OrderService,
    MemberEditResolver,
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
