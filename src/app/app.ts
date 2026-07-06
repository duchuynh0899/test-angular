import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('testttt');
  private lastLang = '';

  private readonly messageHandler = (event: MessageEvent) => {
    console.log('Origin:', event.origin);
    console.log('Data:', event.data);

    // Sau khi test xong thì bật lại đoạn này
    if (event.origin !== 'https://www.aseansc.com.vn') {
      return;
    }

    const lang = event.data?.lang;

    if (lang === this.lastLang) {
      return;
    }

    if (event.data?.type === 'language') {
      alert(`Language: ${event.data.lang}`);

      // Sau này đổi ngôn ngữ thật
      // this.appLangService.setLang(event.data.lang);
    }
  };

  constructor() {
    window.addEventListener('message', this.messageHandler);
  }
}
