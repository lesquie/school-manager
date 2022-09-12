import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Logic
import { AccueilComponent } from './structure/accueil/accueil.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { ElevesComponent } from './pages/eleves/eleves.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { ElevesFormComponent } from './pages/eleves-form/eleves-form.component';
import { StudentState } from './store/states/student.state';
import { SkillState } from './store/states/skill.state';
import { CompetencesFormComponent } from './pages/competences-form/competences-form.component';
import { ConsultationEvaluationsElevesComponent } from './pages/consultation-evaluations-eleves/consultation-evaluations-eleves.component';
import { ConsultationEvaluationsCompetencesComponent } from './pages/consultation-evaluations-competences/consultation-evaluations-competences.component';
import { MenuComponent } from './structure/menu/menu.component';

// Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConsultationComponent,
    ElevesComponent,
    CompetencesComponent,
    ElevesFormComponent,
    CompetencesFormComponent,
    ConsultationEvaluationsElevesComponent,
    ConsultationEvaluationsCompetencesComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forRoot(
      [StudentState, SkillState], {
        developmentMode: !environment.production
      }
    ),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
