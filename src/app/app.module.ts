import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./includes/header/header.component";
import { RoutingModule } from "./routing.module";
import { PromiseComponent } from "./promise/promise.component";
import { PostsService } from "./promise/posts.service";
import { ObservablesComponent } from "./observables/observables.component";
import { FromEventComponent } from "./observables/fromevent/fromevent.component";
import { ListComponent } from "./observables/list/list.component";
import { AddListElementService } from "./service/add-list-element.service";
import { TimerIntervalComponent } from './observables/timer-interval/timer-interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { MapComponent } from './observables/map/map.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    FromEventComponent,
    ListComponent,
    TimerIntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    MapComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostsService, AddListElementService]
})
export class AppModule {}
