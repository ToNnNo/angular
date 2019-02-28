import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './components/base/app.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {TodoComponent} from './components/todo/todo.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PipeComponent} from './components/pipe/pipe.component';
import {DirectiveComponent} from './components/directive/directive.component';
import {LocaleComponent} from './components/locale/locale.component';
import {CustomPipeComponent} from './components/custom-pipe/custom-pipe.component';
import {CustomDirectiveComponent} from './components/custom-directive/custom-directive.component';
import {FormulaireComponent} from './components/formulaire/formulaire.component';
import {SignupComponent} from './components/signup/signup.component';
import {ServiceComponent} from './components/service/service.component';
import {ParametersComponent} from './components/parameters/parameters.component';
import {ObservableComponent} from './components/observable/observable.component';
import {SecureRouteGuard} from './guards/secure-route.guard';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'parameters', component: ParametersComponent },
  {
    path: 'parameters/:name',
    component: ParametersComponent,
    canActivate: [SecureRouteGuard]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // prefix
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
