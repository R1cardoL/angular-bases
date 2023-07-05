import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPagesComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddcharactersComponent } from './components/addcharacters/addcharacters.component';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddcharactersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPagesComponent
  ]
})
export class DbzModule { }
