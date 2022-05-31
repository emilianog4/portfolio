import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';





@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
 
  public educacion:Educacion[]=[];
  public editarEducacion:Educacion | undefined;
  public eliminarEducacion:Educacion | undefined;
  isAdmin = false;

  constructor(private educacionService:EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getEducacion();
    this.isAdmin = this.tokenService.isAdmin();
  }

  public getEducacion():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educacion=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, educacion?:Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target', '#addEducationModal');
    }else if(mode==='delete'){
      this.eliminarEducacion=educacion;
      button.setAttribute('data-bs-target', '#deleteEducationModal');      
    }else if(mode==='edit'){
      this.editarEducacion=educacion;
      button.setAttribute('data-bs-target', '#editEducationModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEducacion(addForm: NgForm){
    document.getElementById('add-education-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response:Educacion) =>{
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })    
  }
  public onUpdateEducacion(educacion: Educacion): void{
    this.editarEducacion=educacion;
    // document.getElementById('add-education-form')?.click();
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response:Educacion) =>{
        console.log(response);
        this.getEducacion();
      }, 
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })    
  }

  public onDeleteEducacion(idEdu: number):void{
    this.educacionService.deleteEducacion(idEdu).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getEducacion();
      }, 
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })    
  }

}
