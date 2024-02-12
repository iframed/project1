import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccompagnementComponent } from './accompagnement/accompagnement.component';

import { RealisationComponent } from './realisation/realisation.component';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WebsiteComponent } from './website/website.component';
import { WebappComponent } from './webapp/webapp.component';
import { BlogComponent } from './blog/blog.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AccompagnementComponent,
   
    RealisationComponent,
   
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    WebsiteComponent,
    WebappComponent,
    BlogComponent,
    GlossaireComponent,
    AdminComponent,
    
    
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
