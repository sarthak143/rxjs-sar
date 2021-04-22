import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./includes/header/header.component";
import { PromiseComponent } from "./promise/promise.component";
import { ObservablesComponent } from "./observables/observables.component";
import { FromEventComponent } from "./observables/fromevent/fromevent.component";
import { ListComponent } from "./observables/list/list.component";
import { TimerIntervalComponent } from "./observables/timer-interval/timer-interval.component";
import { OfFromComponent } from "./observables/of-from/of-from.component";
import { ToArrayComponent } from "./observables/to-array/to-array.component";
import { MapComponent } from "./observables/map/map.component";
import { FilterComponent } from "./observables/filter/filter.component";
import { MergeMapComponent } from "./observables/merge-map/merge-map.component";
import { ConcatMapComponent } from "./observables/concat-map/concat-map.component";
import { MergeComponent } from "./observables/merge/merge.component";
import { CatchTryErrorHandlingComponent } from "./observables/catch-try-error-handling/catch-try-error-handling.component";
import { DebounceTimeDistinctUnitChangedComponent } from "./observables/debounce-time-distinct-unit-changed/debounce-time-distinct-unit-changed.component";
import { ReplaySubjectComponent } from "./observables/replay-subject/replay-subject.component";
import { AsyncSubjectComponent } from "./observables/async-subject/async-subject.component";
import { ReduceComponent } from "./observables/reduce/reduce.component";
import { TapComponent } from "./observables/tap/tap.component";
import { FlatMapComponent } from "./observables/flat-map/flat-map.component";
import { PluckComponent } from "./observables/pluck/pluck.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/observables"
  },
  { path: "promise", component: PromiseComponent },
  {
    path: "observables",
    component: ObservablesComponent,
    children: [
      { path: "", component: ListComponent },
      { path: "FromEvent", component: FromEventComponent },
      { path: "timerInterval", component: TimerIntervalComponent },
      { path: "OfFrom", component: OfFromComponent },
      { path: "map", component: MapComponent },
      { path: "fliter", component: FilterComponent },
      { path: "MergeMap", component: MergeMapComponent },
      { path: "ConcatMap", component: ConcatMapComponent },
      { path: "Merge", component: MergeComponent },
      {
        path: "CatchTryErrorHandling",
        component: CatchTryErrorHandlingComponent
      },
      {
        path: "DebounceTime",
        component: DebounceTimeDistinctUnitChangedComponent
      },
      { path: "ReplaySubject", component: ReplaySubjectComponent },
      { path: "AsyncSubject", component: AsyncSubjectComponent },
      { path: "Reduce", component: ReduceComponent },
      { path: "Tap", component: TapComponent },
      { path: "FlatMap", component: FlatMapComponent },
      { path: "Pluck", component: PluckComponent },
      { path: "ToArray", component: ToArrayComponent }
    ]
  },
  { path: "**", redirectTo: "/observables" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
