import { Component, OnInit } from '@angular/core';
import { CaseTypes } from '../case.module';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UserService } from 'src/app/user/user-service.service';
import { VictimService } from 'src/app/victim/victim-service.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss'],
})
export class NewCaseComponent implements OnInit {
  caseTypes: any[] = Object.keys(CaseTypes);
  users: any[] = [];
  victims: any[] = [];

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '8rem',
    minHeight: '4rem',
    placeholder: 'Enter Bill description here...',
    translate: 'no',
    defaultFontName: 'Arial',
    toolbarPosition: 'top',
  };

  constructor(
    private userService: UserService,
    private app: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.caseTypes = this.caseTypes.map((casef: string) => {
      return casef.replace('_', ' ');
    });

    this.userService.getServices().subscribe(
      (data: any[]) => {
        this.users = data.map((us) => {
          us.fullName = `${us.firstName} ${us.lastName}`;
          return us;
        });
        this.victims = this.users;
      },

      (error) => {}
    );
  }

  showSuccess = () => {
    this.app.showSuccess('Operation successful');
    this.router.navigate(['/dashboard', 'cases']);
  };
}
