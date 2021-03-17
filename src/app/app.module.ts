import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { initialState, reducers, effects } from "./app.state";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BananaComponent } from "./banana/banana.component";

@NgModule({
  declarations: [AppComponent, BananaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { initialState }),
    //!!! Used for debugging with Redux dev tools
    StoreDevtoolsModule.instrument({
      //!!! Specifies that we want to keep a history of 25 State changes
      maxAge: 25,
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
