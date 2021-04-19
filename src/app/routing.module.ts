import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./includes/header/header.component";
export const routes: Routes = [
  // { path: "login", component: LoginComponent },
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
