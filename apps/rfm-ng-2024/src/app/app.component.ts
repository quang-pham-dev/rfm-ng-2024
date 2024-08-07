import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: ` <h1 class="text-center text-2xl text-rose-500 font-semibold">
    Welcome to the {{ title }} zone
    <router-outlet />
  </h1>`,
})
export class AppComponent {
  title = 'Angular';
}
