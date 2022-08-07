import {ChangeDetectionStrategy, Component} from '@angular/core'
import {Observable, of} from 'rxjs'
import {delay, tap} from 'rxjs/operators'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  value$: Observable<string> = of("Success").pipe(delay(3000))

  createError() {
    this.value$ = of("something went wrong").pipe(
      delay(2000),
      tap(() => {
        throw new Error("oops");
      })
    );
  }

  createSuccess() {
    this.value$ = of("Success").pipe(delay(2000));
  }
}
