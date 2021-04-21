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

export const routes: Routes = [
  { path: "promise", component: PromiseComponent },
  {
    path: "observables",
    component: ObservablesComponent,
    children: [
      { path: "", component: ListComponent },
      { path: "FromEvent", component: FromEventComponent },
      { path: "timerInterval", component: TimerIntervalComponent },
      { path: "OfFrom", component: OfFromComponent }
    ]
  }
  // {
  //   path: "",
  //   pathMatch: "full",
  //   redirectTo: "/login"
  // },
  // { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
