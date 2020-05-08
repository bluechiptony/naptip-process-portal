import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    AngularEditorModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    AngularEditorModule,
  ],
})
export class FormDependenciesModule {}
