import { Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, AsyncPipe],
  templateUrl: './app.html'
})
export class App {
  constructor(private loader: LoaderService) {}

  get loading$() {
    return this.loader.loading$;
  }
}
