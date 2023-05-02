import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ArtisanatComponent } from './artisanat/artisanat.component';
import { ContactComponent } from './contact/contact.component';
import { EpicesComponent } from './epices/epices.component';
import { HomeComponent } from './home/home.component';
import { InfusionsComponent } from './infusions/infusions.component';
import { OulaComponent } from './oula/oula.component';
import { ShopComponent } from './shop/shop.component';
import { SnacksComponent } from './snacks/snacks.component';
import { NavComponent } from './nav/nav.component';
import { CurcumaComponent } from './curcuma/curcuma.component';
import { CoriandreComponent } from './coriandre/coriandre.component';
import { PaprikaComponent } from './paprika/paprika.component';
import { MelangepouletComponent } from './melangepoulet/melangepoulet.component';
import { PoivreComponent } from './poivre/poivre.component';
import { AilsecheComponent } from './ailseche/ailseche.component';
import { ChanellemouluComponent } from './chanellemoulu/chanellemoulu.component';
import { CarviComponent } from './carvi/carvi.component';
import { GingembremouluComponent } from './gingembremoulu/gingembremoulu.component';
import { GrainedechiaComponent } from './grainedechia/grainedechia.component';
import { HibiscusComponent } from './hibiscus/hibiscus.component';
import { SucrededateComponent } from './sucrededate/sucrededate.component';
import { CaroubenpoudreComponent } from './caroubenpoudre/caroubenpoudre.component';
import { LaurierComponent } from './laurier/laurier.component';
import { CuminComponent } from './cumin/cumin.component';
import { PoissonComponent } from './poisson/poisson.component';
import { RashanoutComponent } from './rashanout/rashanout.component';
import { TisanecocooningComponent } from './tisanecocooning/tisanecocooning.component';
import { TisaneminceurComponent } from './tisaneminceur/tisaneminceur.component';
import { TisanefightComponent } from './tisanefight/tisanefight.component';
import { TisanehappygutComponent } from './tisanehappygut/tisanehappygut.component';
import { TisaneconstipationComponent } from './tisaneconstipation/tisaneconstipation.component';
import { TisaneimmuniteComponent } from './tisaneimmunite/tisaneimmunite.component';
import { TisaneserenityComponent } from './tisaneserenity/tisaneserenity.component';
import { TisanesommeilComponent } from './tisanesommeil/tisanesommeil.component';
import { CouscousComponent } from './couscous/couscous.component';
import { SoupeComponent } from './soupe/soupe.component';
import { CoreteComponent } from './corete/corete.component';
import { EauComponent } from './eau/eau.component';
import { SiropComponent } from './sirop/sirop.component';
import { HlelimComponent } from './hlelim/hlelim.component';
import { MhamisComponent } from './mhamis/mhamis.component';
import { NwasserComponent } from './nwasser/nwasser.component';
import { ProfilComponent } from './profil/profil.component';
import { RegistreComponent } from './registre/registre.component';
import { HrissaComponent } from './hrissa/hrissa.component';
import { PanierComponent } from './panier/panier.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [

  {
    path: '',component: NavComponent,children: [
  { path: '', component: HomeComponent },

  {path:'Epices',component:EpicesComponent},
  {path:'Oula',component:OulaComponent},
  {path:'Infusions',component:InfusionsComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'Artisanat',component:ArtisanatComponent},
  {path:'Shop',component:ShopComponent},
  {path:'contact',component:ContactComponent},
  {path:'Apropos',component:AproposComponent},
  {path:'Curcuma',component:CurcumaComponent},
  {path:'Coriandre',component:CoriandreComponent},
  {path:'Paprika',component:PaprikaComponent},
  {path:'Melangepoulet',component:MelangepouletComponent},
  {path:'Poivre',component:PoivreComponent},
  {path:'Ailseche',component:AilsecheComponent},
  {path:'Chanellemoulu',component:ChanellemouluComponent},
  {path:'Carvi',component:CarviComponent},
  {path:'Gingembremoulu',component:GingembremouluComponent},
  {path:'Grainedechia',component:GrainedechiaComponent},
  {path:'Hibiscus',component:HibiscusComponent},
  {path:'Sucrededate',component:SucrededateComponent},
  {path:'Caroubenpoudre',component:CaroubenpoudreComponent},
  {path:'Laurier',component:LaurierComponent},
  {path:'Cumin',component:CuminComponent},
  {path:'Poisson',component:PoissonComponent},
  {path:'Rashanout',component:RashanoutComponent},
  {path:'Tisanecocooning',component:TisanecocooningComponent},
  {path:'Tisaneminceur',component:TisaneminceurComponent},
  {path:'Tisanefight',component:TisanefightComponent},
  {path:'Tisanehappygut',component:TisanehappygutComponent},
  {path:'Tisaneconstipation',component:TisaneconstipationComponent},
  {path:'Tisaneimmunite',component:TisaneimmuniteComponent},
  {path:'Tisaneserenity',component:TisaneserenityComponent},
  {path:'Tisanesommeil',component:TisanesommeilComponent},
  {path:'Couscous',component:CouscousComponent},
  {path:'Soupe',component:SoupeComponent},
  {path:'Corete',component:CoreteComponent},
  {path:'Eau',component:EauComponent},
  {path:'Sirop',component:SiropComponent},
  {path:'Hlelim',component:HlelimComponent},
  {path:'Mhamis',component:MhamisComponent},
  {path:'Nwasser',component:NwasserComponent},
  {path:'profil',component:ProfilComponent},
  {path:'registre',component:RegistreComponent},
  {path:'hrissa',component:HrissaComponent},
  {path:'panier',component:PanierComponent},
  {path:'base',component:BaseComponent},

    ],
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
