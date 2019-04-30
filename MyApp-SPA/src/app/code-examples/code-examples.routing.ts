import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './Angular/templateForm/templateForm.component';
import { ReactiveFormComponent } from './Angular/reactiveForm/reactiveForm.component';
import { NgxBootstrapExamplesComponent } from './Angular/ngx-bootstrap-examples/ngx-bootstrap-examples.component';
import { FileDownloadExampleComponent } from './file-download-example/file-download-example.component';
import { JsPlaygroundComponent } from './js/jsPlayground/jsPlayground.component';
import { AwsExamplesComponent } from './aws-examples/aws-examples.component';
import { RedisExamplesComponent } from './redis-examples/redis-examples.component';
import { CssPlaygroundComponent } from './css/cssPlayground/cssPlayground.component';

const routes: Routes = [
  {
    path: 'templateForm',
    component: TemplateFormComponent,
    data: {
      breadcrumb: 'Template Form'
    }
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent,
    data: {
      breadcrumb: 'Reactive Form'
    }
  },
  {
    path: 'ngxBootstrap',
    component: NgxBootstrapExamplesComponent,
    data: {
      breadcrumb: 'ngx Bootstrap'
    }
  },
  {
    path: 'fileDownload',
    component: FileDownloadExampleComponent,
    data: {
      breadcrumb: 'File Download'
    }
  },
  {
    path: 'jsPlayground',
    component: JsPlaygroundComponent,
    data: {
      breadcrumb: 'Js Playground'
    }
  },
  {
    path: 'awsExamples',
    component: AwsExamplesComponent,
    data: {
      breadcrumb: 'Aws Examples'
    }
  },
  {
    path: 'redisExamples',
    component: RedisExamplesComponent,
    data: {
      breadcrumb: 'Redis Examples'
    }
  },
  {
    path: 'cssPlayground',
    component: CssPlaygroundComponent,
    data: {
      breadcrumb: 'Css Playground'
    }
  }
];

export const CodeExamplesRoutes = RouterModule.forChild(routes);
