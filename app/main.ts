import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { APP_ROUTER_PROVIDERS } from './app.routing';

platformBrowserDynamic().bootstrapModule(AppModule , 
	[
		APP_ROUTER_PROVIDERS
	])
.catch(err => console.error(err));