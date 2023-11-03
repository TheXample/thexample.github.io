import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ImportService } from '../../services/import.service';
import { ProjectFileModel } from '../../models/projectFile.model';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit{

  @Input() project!: string;


  projectPage!: ProjectFileModel;
  constructor(public importService: ImportService){
  }
  ngOnInit(): void {
    console.log(this.project);
    this.projectPage = this.importService.getProjectPage(this.project)!;
    console.log(this.projectPage);
  }

  getTexts() {
    return this.importService.getProjectPage(this.project)!;
  }

}
