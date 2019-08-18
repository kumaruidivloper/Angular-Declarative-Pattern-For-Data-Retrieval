# Angular Declarative Pattern For Data Retrieval

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.


## Declarative Pattern
![001_Declarative_Pattern](https://user-images.githubusercontent.com/30646609/61530059-a7b81a00-aa40-11e9-85f2-a86898882bd5.JPG)

## Declarative Pattern with Error Handling
![002_Declarative_Pattern_with_Error_Handling](https://user-images.githubusercontent.com/30646609/61530060-a850b080-aa40-11e9-9540-588a71229a27.JPG)
![002_Declarative_Pattern_with_Error_Handling_1](https://user-images.githubusercontent.com/30646609/61530062-a8e94700-aa40-11e9-94f8-04518b4463d9.JPG)

## Benefits of a Declarative Approach
![003_Benefits_of_a_Declarative_Approach](https://user-images.githubusercontent.com/30646609/61530064-a8e94700-aa40-11e9-8bd9-a05d2b4fb72d.JPG)

## Checklist Data Retrieval
![004_Checklist_Data_Retrieval](https://user-images.githubusercontent.com/30646609/61530065-a981dd80-aa40-11e9-8506-38ffd8963a83.JPG)
![004_Checklist_Data_Retrieval_1](https://user-images.githubusercontent.com/30646609/61530066-aa1a7400-aa40-11e9-8221-42ff0532b961.JPG)
![004_Checklist_Data_Retrieval_2](https://user-images.githubusercontent.com/30646609/61530067-aa1a7400-aa40-11e9-97b2-e7c207326639.JPG)
![004_Checklist_Data_Retrieval_3](https://user-images.githubusercontent.com/30646609/61530069-abe43780-aa40-11e9-9fa5-2b641e274cf2.JPG)
![004_Checklist_Data_Retrieval_4](https://user-images.githubusercontent.com/30646609/61530071-ac7cce00-aa40-11e9-8470-e492032c5d78.JPG)
![004_Checklist_Data_Retrieval_5](https://user-images.githubusercontent.com/30646609/61530072-ad156480-aa40-11e9-869c-949c365479d4.JPG)

## Devlelopment Steps

MongoDB Username Details
Username: kumaruidec
Password: $Kumar3861 <--
Username: kumariu
Password: $Kumar4321 <--

bootstrap Login: https://bootsnipp.com/snippets/GaZG0
ng new <AppName> --style=scss --routing

## Ng-Bootstrap Verstion List
https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap

## Install BootStrap / Ng-BootStrap
Step1: ng new [AppName] --style=scss --routing --prefix myprefix
Step2: npm install --save @ng-bootstrap/ng-bootstrap@4.2.1 [specific version for Angular 7]

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class YourAppModule {
}

Step1: npm install bootstrap --save
Step2: Open angular.json
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],

---------------- [or] ---------------------

Step3: npm install bootstrap --save Step4: Open angular.json "styles": [ "src/styles.scss", "node_modules/bootstrap/dist/css/bootstrap.min.css" ], ----- [or] -------

There are many ways to do that. The simpest method is by using the [src/styles.css]file and adding the following code: URL: https://www.techiediaries.com/angular-bootstrap-ui/ @import "~bootstrap/dist/css/bootstrap.css";

## Fake Server

Step1: npm install json-server
Step2: create db.json
Step3: Create some initial Data in db.json file
Step4: Edit package.json start property ["start": "concurrently \"ng serve\" \"json-server --watch db.json\" ",]
Step5: npm install concurrently
Step6: npm run start [For run the app]