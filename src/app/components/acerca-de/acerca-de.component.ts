import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

public usuario:Usuario | undefined;
public editarUsuario:Usuario | undefined;
isAdmin = false;

  
constructor(private usuarioService: UsuarioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUser();
    this.isAdmin = this.tokenService.isAdmin();
  }

  public getUser():void {
    this.usuarioService.getUser().subscribe({
      next:(response:Usuario)=>{
        this.usuario=response;},
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
    }
  })
  }

  public onOpenModal(mode:String, usuario?:Usuario):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='edit'){
      this.editarUsuario=usuario;
      button.setAttribute('data-bs-target', '#editUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdateUsuario(usuario: Usuario):void{
    this.editarUsuario=usuario;
    this.usuarioService.updateUsuario(usuario).subscribe({
      next: (response:Usuario) =>{
        console.log(response);
        this.getUser();
      }, 
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })    
  }


}