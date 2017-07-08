import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProtectedComponent } from './protected/protected.component';

const routes:Routes= [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'contactus', redirectTo: 'contact'},

//authentication demo
{path:'login',component:LoginComponent},
{path: 'protected',component:ProtectedComponent,canActivate:[LoggedInGuard]},
//nested
{path: 'products',
component:ProductsComponent,
children: childRoutes}
]; 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductsComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
