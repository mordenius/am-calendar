import React, { Component } from "react";
import CalendarDayTask from './calendarDayTask/calendarDayTask';
import CalendarDayTimer from './calendarDayTimer/calendarDayTimer';
import { IDayCompany } from '../../../type/IDayCompany'

interface IProps {
  data: IDayCompany[]
}

class CalendarDayBody extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.validator(props.data);
    this.state = { taskSelectedId: 2 };
  }

  validator(data: IDayCompany[]): void {
    data.forEach(item => {
      if (item.tenSecond < 1)
        throw Error("Property 'tenSecond' can't be less than 1.");
      if (item.tenSecond > 18)
        throw Error("Property 'tenSecond' can't be more than 18.");
      if (item.hourStart < 1)
        throw Error("Property 'hourStart' can't be less than 1.");
      if (item.hourStart > 24)
        throw Error("Property 'hourStart' can't be more than 24.");
      if (item.hourFinish < 1)
        throw Error("Property 'hourFinish' can't be less than 1.");
      if (item.hourFinish > 24)
        throw Error("Property 'hourFinish' can't be more than 24.");
      if (item.hourStart > item.hourFinish)
        throw Error("Property 'hourStart' can't be more than property 'hourFinish'.");
    });
  }

  hours: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ];


  render() {
    return (
      <div className="calendarDayBody">
        <CalendarDayTimer />
        <div className="body">
          <div className="hours">
            {
              this.hours.map(e => {
                return <div className="hour">{e}</div>;
              })
            }
          </div>
          <div className="body-empty"></div>
          <div className='calendarDayTasks'>
            {
              this.props.data.map(el => {
                return <CalendarDayTask key={el.id} data={el} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarDayBody;