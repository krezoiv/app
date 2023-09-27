import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdministrationComponent } from './header-administration/header-administration.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdministrationComponent,
   
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdministrationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
