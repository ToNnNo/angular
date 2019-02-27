import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';

registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeJa);

import { AppComponent } from './components/base/app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodoComponent } from './components/todo/todo.component';
import { RouteComponent } from './components/route/route.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { PowerPipe } from './pipes/power/power.pipe';
import { PipelindromePipe } from './pipes/pipelindrome/pipelindrome.pipe';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodoComponent,
    RouteComponent,
    NotFoundComponent,
    PipeComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomPipeComponent,
    PowerPipe,
    PipelindromePipe,
    CustomDirectiveComponent,
    HighlightDirective,
    FormulaireComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [RouteComponent]
})
export class AppModule { }
