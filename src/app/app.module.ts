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
import { FilterComponent } from './observables/filter/filter.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { MergeComponent } from './observables/merge/merge.component';
import { CatchTryErrorHandlingComponent } from './observables/catch-try-error-handling/catch-try-error-handling.component';
import { DebounceTimeDistinctUnitChangedComponent } from './observables/debounce-time-distinct-unit-changed/debounce-time-distinct-unit-changed.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { ReduceComponent } from './observables/reduce/reduce.component';
import { TapComponent } from './observables/tap/tap.component';
import { FlatMapComponent } from './observables/flat-map/flat-map.component';
import { PluckComponent } from './observables/pluck/pluck.component';

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
    MapComponent,
    FilterComponent,
    MergeMapComponent,
    ConcatMapComponent,
    MergeComponent,
    CatchTryErrorHandlingComponent,
    DebounceTimeDistinctUnitChangedComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ReduceComponent,
    TapComponent,
    FlatMapComponent,
    PluckComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostsService, AddListElementService]
})
export class AppModule {}
