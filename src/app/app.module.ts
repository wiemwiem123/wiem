import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { EpicesComponent } from './epices/epices.component';
import { OulaComponent } from './oula/oula.component';
import { InfusionsComponent } from './infusions/infusions.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ArtisanatComponent } from './artisanat/artisanat.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
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
import {HttpClientModule, } from '@angular/common/http';
import { BaseComponent } from './base/base.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpicesComponent,
    OulaComponent,
    InfusionsComponent,
    SnacksComponent,
    ArtisanatComponent,
    ShopComponent,
    ContactComponent,
    AproposComponent,
    NavComponent,
    CurcumaComponent,
    CoriandreComponent,
    PaprikaComponent,
    MelangepouletComponent,
    PoivreComponent,
    AilsecheComponent,
    ChanellemouluComponent,
    CarviComponent,
    GingembremouluComponent,
    GrainedechiaComponent,
    HibiscusComponent,
    SucrededateComponent,
    CaroubenpoudreComponent,
    LaurierComponent,
    CuminComponent,
    PoissonComponent,
    RashanoutComponent,
    TisanecocooningComponent,
    TisaneminceurComponent,
    TisanefightComponent,
    TisanehappygutComponent,
    TisaneconstipationComponent,
    TisaneimmuniteComponent,
    TisaneserenityComponent,
    TisanesommeilComponent,
    CouscousComponent,
    SoupeComponent,
    CoreteComponent,
    EauComponent,
    SiropComponent,
    HlelimComponent,
    MhamisComponent,
    NwasserComponent,
    ProfilComponent,
    RegistreComponent,
    HrissaComponent,
    PanierComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
