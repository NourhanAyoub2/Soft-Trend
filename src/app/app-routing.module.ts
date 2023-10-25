import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { PaglowComponent } from './paglow/paglow.component';
import { PagupComponent } from './pagup/pagup.component';
import { ModalComponent } from './modal/modal.component';
import { CardtComponent } from './cardt/cardt.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'cardt', component: CardtComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'card', component: CardComponent},
  { path: 'paglow', component: PaglowComponent},
  { path: 'pagup', component: PagupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
