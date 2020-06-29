import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardamomComponent } from './products/spices/cardamom/cardamom.component';
import { CorianderComponent } from './products/spices/coriander/coriander.component';
import { FenugreekSeedsComponent } from './products/spices/fenugreek-seeds/fenugreek-seeds.component';
import { GingerComponent } from './products/spices/ginger/ginger.component';
import { LinseedsComponent } from './products/spices/linseeds/linseeds.component';
import { NigellaSeedsComponent } from './products/spices/nigella-seeds/nigella-seeds.component';
import { SesameSeedsComponent } from './products/spices/sesame-seeds/sesame-seeds.component';
import { SunflowerSeedsComponent } from './products/spices/sunflower-seeds/sunflower-seeds.component';
import { TurmericComponent } from './products/spices/turmeric/turmeric.component';


const routes: Routes = [
  { path:'cardamon',component: CardamomComponent },
  { path:'coriander',component: CorianderComponent },
  { path:'fenugreek-seeds',component: FenugreekSeedsComponent },
  { path:'ginger',component: GingerComponent },
  { path:'linseeds',component: LinseedsComponent },
  { path:'nigella-seeds',component: NigellaSeedsComponent },
  { path:'sesame-seeds',component: SesameSeedsComponent },
  { path:'sunflower-seeds',component: SunflowerSeedsComponent },
  { path:'turmeric',component: TurmericComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
