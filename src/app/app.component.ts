import { Component } from '@angular/core';

import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    msg: string = "Hello from Angular App with Webpack";
}
