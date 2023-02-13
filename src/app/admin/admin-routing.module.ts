import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizacaoComponent, CadastroComponent, ListagemComponent } from './components';
import { AdminComponent } from './components/admin.component';


export const AdminRoutes: Routes = [
  {
    path: 'Admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ListagemComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'atualizacao/:lancamentoId',
        component: AtualizacaoComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
