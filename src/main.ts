import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRootModule } from './app/approot.module';

platformBrowserDynamic().bootstrapModule(AppRootModule)
  .catch(err => console.log(err));
