import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/models/group.model';
import { SelectionModel } from 'src/app/models/selection.model';
import { State } from 'src/app/state/app.state';
import { getGroups } from 'src/app/state/groups';
import { getSelections } from 'src/app/state/selections';
import { ScheduleResultItemModel } from 'src/app/models/schedule-result-item.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  selections$: Observable<SelectionModel[]>;
  groups$: Observable<GroupModel[]>;
  drawResults: ScheduleResultItemModel[] = [];
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.groups$ = this.store.select(getGroups);
    this.selections$ = this.store.select(getSelections);
  }

  setResults = (data: ScheduleResultItemModel[]) => {
    this.drawResults = data;
  };
}
