import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/models/skills';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  
  public skills:Skills[]=[];
  public editarSkill:Skills | undefined;
  public eliminarSkills:Skills | undefined;
  isAdmin = false;
  

constructor(private aptitudesService: AptitudesService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getSkills();
    this.isAdmin = this.tokenService.isAdmin();
  }


  public getSkills():void{
    this.aptitudesService.getSkills().subscribe({
      next:(Response: Skills[]) =>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, skills?:Skills):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target', '#addSkillsModal');
    }else if(mode==='delete'){
      this.eliminarSkills=skills;
      button.setAttribute('data-bs-target', '#deleteSkillsModal');      
    }else if(mode==='edit'){
      this.editarSkill=skills;
      button.setAttribute('data-bs-target', '#editSkillsModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddSkills(addForm: NgForm){
    document.getElementById('add-skill-form')?.click();
    this.aptitudesService.addSkills(addForm.value).subscribe({
      next: (response:Skills) =>{
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })    
  }
  public onUpdateSkills(skills: Skills): void{
    this.editarSkill=skills;
    this.aptitudesService.updateSkills(skills).subscribe({
      next: (response:Skills) =>{
        console.log(response);
        this.getSkills();
      }, 
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })    
  }

  public onDeleteSkills(idSkill: number):void{
    this.aptitudesService.deleteSkills(idSkill).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getSkills();
      }, 
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })    
  }

}
