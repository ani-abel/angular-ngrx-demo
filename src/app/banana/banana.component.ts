import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState, getMyBanana } from "../app.state";
import {
  GetNewBanana,
  PeelBanana,
  EatBanana,
  InitiateTimeHop,
} from "./state/banana.actions";

@Component({
  selector: "app-banana",
  templateUrl: "./banana.component.html",
  styleUrls: ["./banana.component.scss"],
})
export class BananaComponent implements OnInit {
  title = "My NgRx Banana App";
  banana$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.newBanana();
    //!!! getMyBanana() method allows us to access the "Banana" node in the NGRX
    this.banana$ = this.store.pipe(select(getMyBanana));
  }

  newBanana() {
    this.store.dispatch(new GetNewBanana(null));
  }

  peelBanana() {
    this.store.dispatch(new PeelBanana(null));
  }

  eatBanana() {
    this.store.dispatch(new EatBanana(3));
  }

  timeHop() {
    this.store.dispatch(new InitiateTimeHop(null));
  }
}
