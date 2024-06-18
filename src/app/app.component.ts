import { Component } from '@angular/core';
import { WelcomeModule } from './welcome/welcome.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [WelcomeModule, ShoppingListModule]
})
export class AppComponent {
  title = 'my-appp';
}
