import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppComponentHtmlComponent } from './angular-hello-world/src/app/app.component.html/app.component.html.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    HelloWorldComponent,
    AppComponentHtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
