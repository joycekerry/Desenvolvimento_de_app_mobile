// aqui será feito a listatagem das informações
import { Component, OnInit } from '@angular/core';
//importa o serviço

//navegar passando informção
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
 //receber as informações, e fazer o tratamento. (por dentro da variavel contatos)
 //any espera qualquer coisa(recebe qualquer tipo de dado)
  contatos: any;

  constructor(private service: ContatoService,
    //passando como paramentro (portando como atributo)
    //metodo é invocado
              private rota: ActivatedRoute,
              private nav: NavController
    ) { }

  ngOnInit() {
    //feito triagem
    //subscribe recebe uma função anônima (variável)
    this.service.listLazyRoutes().subscribe(data => {
      //novo objeto, no map (destrinchar tudo que esta dentro do mnp)
      this.contatos = data.map(e =>{
        //tratamento de json
        return{
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          email: e.payload.doc.data()['email'],
          telefone: e.payload.doc.data()['telefone']
        };
      }
       
         );
         console.log(this.contatos);
    } 
    );

    
  }

  //não tem ordem de colocar função
  inicioAlteracao(registro){
    //verificar se a função está chegando 
    console.log(registro);
    //comunicação entre as paginas é em json
    this.nav.navigateForward( ["form-contato", 
    //criando json (envio da informação para outra página)
      { id: registro.id, 
        nome: registro.nome, 
        email: registro.email,
        telefone: registro.telefone  
       }
    ] );

  }

}
