import { UtilService } from '../services/util.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage} from "@angular/fire/storage";

@Component({
  selector: 'app-fdn',
  templateUrl: './fdn.component.html',
  styleUrls: ['./fdn.component.scss']
})
export class FDNComponent {
  selectedFile:any;
  productForm: FormGroup | undefined;
  imgFront: any;
  imgBack: any;

  constructor(
    private fb: FormBuilder,private utilService:UtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
createForm() {
  this.productForm = this.fb.group({
    name: ['', [Validators.required]]
  });
}

// private onUpload(imageFor) {
//   const fd = new FormData();
//   fd.append('imageFile', this.selectedFile, this.selectedFile.name);
//   this.http.post('https://localhost:3443/products/upload', fd)
//     .subscribe(res => imageFor === 'FRONT' ? this.imgFront = res : this.imgBack = res);
// }



onFileSelected(event:any, imageFor:any) {
  console.log(event)
  console.log(imageFor)

  this.selectedFile = event.target.files[0];
  console.log(this.selectedFile)
  // this.onUpload(imageFor);
}
onFormSubmit() {
  // yaha se upload karni hai to firebase
  // this.utilService.upload(this.selectedFile)
}

}
