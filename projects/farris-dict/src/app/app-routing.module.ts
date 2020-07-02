import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: 'dict',
        // loadChildren: './dict/dict.module#DictModule' ,
        loadChildren: () =>
            import('./dict/dict.module').then((m) => m.DictModule),
    },
    { path: '**', redirectTo: 'dict' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
