import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './pages/board/board.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BoardContainerComponent } from './pages/board-container/board-container.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ModalComponent } from './shared/components/modal/modal.component';
import { SelectComponent } from './shared/components/select/select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavbarComponent,
    BoardContainerComponent,
    ModalComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
