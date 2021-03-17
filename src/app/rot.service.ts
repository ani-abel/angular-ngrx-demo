import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({ providedIn: "root" })
export class RotService {
  rotBanana(): Observable<string> {
    console.log("ROT_BANANA");
    const milliseconds = 1000; //10 seconds

    return Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        console.log("Done Waiting");
        observer.next("brown");
        observer.complete();
      }, milliseconds);
    });
  }
}
