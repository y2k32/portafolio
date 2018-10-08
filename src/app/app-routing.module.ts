import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';



const app_routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'**', pathMatch:'full',redirectTo:'/'}
];
@NgModule({
    imports:[
        RouterModule.forRoot(app_routes, {useHash:true}),
    ],
    exports:[
        RouterModule
    ]
})
export class appRoutingModule{

}