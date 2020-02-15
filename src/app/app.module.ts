import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewServiceService } from './new-service.service';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { AsteroidsFilterPipe } from './asteroids/asteroids.filter.pipe';

const appRoutes: Routes = [
  {path: '', component: AsteroidsComponent },
  {path: 'details/:id', component: DetailsComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    NotFoundComponent,
    AsteroidsComponent,
    AsteroidsFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
