import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const myRoutes:Routes = [
  {
    path:"",
    component:ViewComponent
  },
  {
    path:"add",
    component:StudentEntryComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    NavbarComponent,
    DeleteComponent,
    SearchComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
