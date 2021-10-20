import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private NovoUsuarioService: NovoUsuarioService
    ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      cpf: [''],
      cidade: [''],
      estado: [''],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue(); //as NovoUsuario
    console.log(novoUsuario);
  }

}
