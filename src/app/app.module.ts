import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Route } from '@angular/router';

//Components

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

//Material
import { MaterialModule } from './material/material.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { UsersComponent } from './components/users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SingInComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MaterialModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
