import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdInputModule} from '@angular/material';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';


import { HttpModule } from '@angular/http';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  exports:[
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
