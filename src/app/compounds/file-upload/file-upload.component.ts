import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { timer } from 'rxjs';


@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private uploadProgress: Observable<number>;
  public showUploadComplete: boolean = false;      
  private subscription: Subscription;
  private timer: Observable<any>;
  @Output() uploadComplete = new EventEmitter();
  @Input() allowedFiles: string;
  constructor(private afStorage: AngularFireStorage, private auth: AuthService) { }

  ngOnInit() {
  }

 uploadFile(event) {
    const randomId = Math.random().toString(36).substring(2);
    const filePath = `/user/${this.auth.currentUserId}/${randomId}`;
    const fileRef = this.afStorage.ref(filePath);
    let task = this.afStorage.upload(filePath, event.target.files[0]);  
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
                this.uploadComplete.emit(url);
                this.uploadProgress = null;
                this.setTimer();
        });
      })
    )
  .subscribe();
  }

  public setTimer(){
    this.showUploadComplete = true;
    this.timer = timer(5000);
    this.subscription = this.timer.subscribe(() => {
        // set showUploadComplete to false to hide loading div from view after 5 seconds
        this.showUploadComplete = false;
    });
    }

    public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

}
