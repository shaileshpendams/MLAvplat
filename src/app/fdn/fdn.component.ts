import { UtilService } from '../services/util.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
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
  downloadURL:any;

  constructor(
    private fb: FormBuilder, private utilService : UtilService,private storage: AngularFireStorage
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

  this.selectedFile = event.target.files[0];
  console.log(this.selectedFile)
  // this.onUpload(imageFor);
}
onFormSubmit() {
console.log(']]]')

// if (this.selectedFile) {
  this.utilService.uploadFile(this.selectedFile).then(
    (url) => {
      this.downloadURL = url;
      console.log('File available at', this.downloadURL);
    },
    (error) => {
      console.error('Upload failed:', error);
    }
  );
// } 
}
  // if (this.selectedFile) {
    // this.utilService.uploadFile(this.selectedFile).subscribe(
    //   (url) => {
    //     console.log(url)
    //     this.downloadURL = url;
    //     console.log('File available at', this.downloadURL);
    //   },
    //   (error) => {
    //     console.error('Upload failed:', error);
    //   }
    // );
  // } else {
  //   console.error('No file selected');
  // }
}
  // yaha se upload karni hai to firebase
  // this.utilService.upload(this.selectedFile)
//   if (this.selectedFile) {
//     const filePath = `uploads/${this.selectedFile.name}`;
    
//     const storageRef = ref(this.storage, filePath);
//     const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);
// console.log(storageRef)
//     uploadTask.on('state_changed',
//       (snapshot) => {
//         // console.log(snapshot)
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done' , snapshot);
//       },
//       (error) => {
//         console.error('Upload failed', error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log(downloadURL)
//           this.downloadURL = downloadURL;
//           console.log('File available at', this.downloadURL);
//         });
//       }
//     );
//   } else {
//     console.error('No file selected');
//   }




