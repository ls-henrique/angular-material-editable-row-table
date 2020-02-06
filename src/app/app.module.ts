import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { EditableTableComponent } from "./editable-table/editable-table.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, EditableTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
