import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ErrorComponent } from './shared/error/error.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'list',
    component: PokemonComponent,
  },
  {
    path: 'not-found',
    component: ErrorComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
