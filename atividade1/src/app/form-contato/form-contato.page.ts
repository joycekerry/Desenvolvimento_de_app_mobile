import { Component, OnInit } from '@angular/core';

//toda comunicação entre projeto e firebase
import { ContatoService } from '../services/contato.service';
@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  nome: string;
  email: string;
  telefone: string;
  constructor(private service: ContatoService ) { }

  ngOnInit() {

  }

  enviarContato(){
    let contato = {};
    //chaves indicação de json

    console.log("Nome: " + this.nome);
    console.log("E-mail " + this.email);  
    console.log("Telefone " + this.telefone);

    //utilizar atributo que foi criado na coleção (mesmo atributo do firebase)
    //this.nome valido
    contato ['nome'] = this.nome;
    contato ['email'] = this.email;
    contato ['telefone'] = this.telefone;

    console.log(contato);
    this.service.incluir(contato);




  }

}
