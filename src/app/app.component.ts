import { Component } from '@angular/core';
import { toastr } from '../../node_modules/toastr/build/toastr.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  onClick() {
    // Display an info toast with no title
    // toastr.info('Are you the 6 fingered man?');
    // 手間がかかる事を確認。ボツ。
  }
}
