import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const importsModules =
    [
        CommonModule,

        // Material
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,

        MatCardModule,
        MatIconModule,
        MatListModule,

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
