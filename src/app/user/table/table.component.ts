import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { listAnimation } from 'src/app/shared/animations/list';
import { mouseInOut } from 'src/app/shared/animations/mouseInOut';
import { IEbike } from 'src/app/shared/interfaces/ebike';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    mouseInOut,
    listAnimation
  ]
})
export class TableComponent implements OnInit {

  @Input() user: IUser
  @Input() columns: string[];
  @Input() userProp: string;

  @Output() updated = new EventEmitter<IUser>();


  dataSource: IEbike[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.dataSource = this.user[this.userProp];
  }

  removeHandler(ebike: IEbike): void {
    this.authService.updateOne({ $pull: { [this.userProp]: ebike._id } })
      .subscribe((user: IUser) => {
        this.updated.emit(user)
        this.user = user;
        this.dataSource = this.user[this.userProp];
      });
  }

  moveHandler(ebike: IEbike): void {
    this.authService.updateOne({ $pull: { [this.userProp]: ebike._id }, $addToSet: { cart: ebike._id } })
      .subscribe((user: IUser) => {
        this.updated.emit(user)
        this.user = user;
        this.dataSource = this.user[this.userProp];
      });
  }

}
