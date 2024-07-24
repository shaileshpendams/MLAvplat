import { Injectable,  } from '@angular/core';
// import { firebase } from '@angular/fire/angular-fire';
import { Observable, finalize } from 'rxjs';
import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  title = "cloudsSorage";
  private selectedFile:any;
  private fb:any;
  private downloadURL: Observable<string> | undefined;
  constructor(private storage: AngularFireStorage) { }
  uploadFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const filePath = `uploads/${file.name}`;
      // const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
console.log(task)
      // task.snapshotChanges().subscribe((res)=>{
      //   console.log(res)
      //   fileRef.getDownloadURL().subscribe((downloadurl)=>{
      //     console.log(downloadurl)
      //   })
      // })
      task.snapshotChanges().subscribe((data)=>{
      })
    });
  }
}
