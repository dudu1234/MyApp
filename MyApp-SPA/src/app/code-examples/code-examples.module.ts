import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';

import { CodeExamplesRoutes } from './code-examples.routing';

import { TemplateFormComponent } from './Angular/templateForm/templateForm.component';
import { ReactiveFormComponent } from './Angular/reactiveForm/reactiveForm.component';
import { NgxBootstrapExamplesComponent } from './Angular/ngx-bootstrap-examples/ngx-bootstrap-examples.component';
import { FileDownloadExampleComponent } from './file-download-example/file-download-example.component';
import { JsPlaygroundComponent } from './js/jsPlayground/jsPlayground.component';
import { RedisExamplesComponent } from './redis-examples/redis-examples.component';
import { AwsExamplesComponent } from './aws-examples/aws-examples.component';
import { CssPlaygroundComponent } from './css/cssPlayground/cssPlayground.component';

@NgModule({
  imports: [CommonModule, CodeExamplesRoutes, NgxGalleryModule, FormsModule],
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    NgxBootstrapExamplesComponent,
    FileDownloadExampleComponent,
    JsPlaygroundComponent,
    RedisExamplesComponent,
    AwsExamplesComponent,
    CssPlaygroundComponent
  ]
})
export class CodeExamplesModule {}
