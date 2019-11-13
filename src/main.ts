import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//bootstrap is starting point which will execute AppModule
//every Angular application should have at least 1 module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
