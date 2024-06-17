import { Injectable,  } from '@angular/core';
// import { firebase } from '@angular/fire/angular-fire';
import { Observable, finalize } from 'rxjs';
import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  title = "cloudsSorage";
  private selectedFile:any;
  private fb:any;
  private downloadURL: Observable<string> | undefined;
  constructor() { }
  // 
// upload(file:any){
//   const app = initializeApp(environment.firebaseConfig);
//   const storage = getStorage(app);
//   const storageRef = ref(storage, "77151176.png");

//   uploadBytesResumable(storageRef,file).then((snapshot) => {
//     console.log('Uploaded bytes and metadata');
//   }).catch((e) => {
//     console.error(e);
//   });
// }
  // onFileSelected(files:any) {
  //   var n = Date.now();
  //   const file = files;
  //   const filePath = `FDN/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`FDN/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }


}
