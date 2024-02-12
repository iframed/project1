import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccompagnementComponent } from './accompagnement/accompagnement.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { HomeComponent } from './home/home.component';
import { RealisationComponent } from './realisation/realisation.component';
import { WebappComponent } from './webapp/webapp.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accompagnement', component: AccompagnementComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'webapp', component: WebappComponent },
  { path: 'realisations', component: RealisationComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'glossaire', component: GlossaireComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
