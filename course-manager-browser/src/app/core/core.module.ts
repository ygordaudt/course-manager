import { NgModule } from "@angular/core"
import { Router, RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./components/error-404/error-404.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

// Const created to fix the problem with Route imports
const ROUTES: Routes = [

]

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component,
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        NavBarComponent,
    ]
})
export class CoreModule {

}