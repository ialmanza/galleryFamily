import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SplashComponent } from './components/splash/splash.component';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'splash', component: SplashComponent },
];
