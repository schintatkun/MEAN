import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { HttpService } from './http.service';
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    CreateAuthorComponent,
    CreateQuoteComponent,
    HomeComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,     //needed when using form
    HttpClientModule //a must 
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
