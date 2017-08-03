import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "app/home/home.component";
import { UsersComponent } from "app/users/users.component";
import { UserComponent } from "app/users/user/user.component";
import { ServersComponent } from "app/servers/servers.component";
import { ServerComponent } from "app/servers/server/server.component";
import { EditServerComponent } from "app/servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { AuthGuard } from "app/auth-guard.service";

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children : [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers', 
    // canActivate : [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: ServersComponent, 
    children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    // don't need to declaration at here 
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}