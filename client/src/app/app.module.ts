import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GenericServiceComponent } from "./generic-service/generic-service.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ModalComponent } from './modal/modal.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    GenericServiceComponent,
    SidebarComponent,
    ModalComponent,
    DynamicComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
