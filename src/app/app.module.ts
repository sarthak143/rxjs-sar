import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./includes/header/header.component";
import { RoutingModule } from "./routing.module";
import { PromiseComponent } from "./promise/promise.component";
import { PostsService } from './promise/posts.service';
import { ObservablesComponent } from './observables/observables.component';
import { FromEventComponent } from './observables/fromevent/fromevent.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    FromEventComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostsService]
})
export class AppModule {}
