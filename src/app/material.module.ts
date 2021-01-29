import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const importsModules =
    [
        CommonModule,
        MatCardModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,

    ];


@NgModule({
    declarations: [],
    imports: importsModules,
    exports: importsModules
})
export class MaterialModule { }
