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
