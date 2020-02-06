import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { EditableTableComponent } from "./editable-table/editable-table.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent, EditableTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
