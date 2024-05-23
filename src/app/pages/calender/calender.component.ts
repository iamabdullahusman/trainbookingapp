import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  listDataMap = {
    two: [
      { type: 'warning', content: ' ' },
     
    ],
    eight: [
      { type: 'warning', content: 'Abdullah' },
      { type: 'success', content: 'Aina' }
    ],
    nine: [
      { type: 'warning', content: '' },
      { type: 'warning', content: '' }
    ],
    ten: [
      { type: 'warning', content: '' },
      { type: 'warning', content: '' }
    ],
    eleven: [
      { type: 'warning', content: 'Ahsan' },
      { type: 'warning', content: ' Shibra' },
      // { type: 'error', content: 'This is error event.' }
    ],
    twenty: [
      { type: 'warning', content: 'Erum' },
      { type: 'success', content: 'Maira' },
      { type: 'success', content: ' ' },
      // { type: 'error', content: 'This is error event 1.' },
      // { type: 'error', content: 'This is error event 2.' },
      // { type: 'error', content: 'This is error event 3.' },
      // { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
  showLeavePlanModal(name: string, date: Date): void {
    // const modalRef = this.modalService.create({
    //   nzTitle: 'Add Leave Plan',
    //   nzContent: LeavePlanModalComponent,
    //   nzData: {
    //     name: name,
    //     toDate: date,
    //     fromDate: date
    //   },

      // nzFooter: null,

    // });
    // Listen for modal close event
    
  }
}
