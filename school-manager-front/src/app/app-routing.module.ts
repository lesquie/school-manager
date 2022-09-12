import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './structure/accueil/accueil.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { ElevesComponent } from './pages/eleves/eleves.component';
import { CompetencesComponent } from './pages/competences/competences.component';


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'consulter', component: ConsultationComponent},
  {path: 'eleves', component: ElevesComponent},
  {path: 'competences', component: CompetencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
