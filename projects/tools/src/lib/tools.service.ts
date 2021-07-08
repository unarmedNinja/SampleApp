import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  getDayOfWeek(weekDay: string, day: number) : string {
    let value: string = '';
    const week: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let index: number = week.indexOf(weekDay);
    if(index >= 0){
      const currentDay: number = (day + index) % 7;
      value = week[currentDay];
    }

    return value;
  }
}
