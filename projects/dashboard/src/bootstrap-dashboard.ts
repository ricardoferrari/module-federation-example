import { bootstrap } from '@angular-architects/module-federation-tools';
import { environment } from './environments/environment';
import { DashboardElementModule } from './app/dashboard/dashboard-element.module';

bootstrap(DashboardElementModule, {
  production: environment.production
});
