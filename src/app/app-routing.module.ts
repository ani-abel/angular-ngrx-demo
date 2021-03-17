import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BananaComponent } from "./banana/banana.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "banana",
  },
  {
    path: "banana",
    component: BananaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
