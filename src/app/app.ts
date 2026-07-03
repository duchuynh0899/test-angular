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
      if (event.origin !== "https://wordpress-domain.com") {
        return;
      }

      if (event.data.type === "language") {
        console.log("testttttttttttttttttttttttttt");
      }
    });
  }
}
