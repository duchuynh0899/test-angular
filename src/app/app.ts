import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("testttt");

  constructor() {
    window.addEventListener("message", (event) => {
alert(event);
      if (event.data.type === "language") {
        alert("testttttttttttttttttttttttttt");
      }
    });
  }
}
