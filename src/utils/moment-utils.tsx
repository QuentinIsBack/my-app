import moment from 'moment';
import 'moment/locale/fr'  // without this line it didn't work

export const getSpecificDate = (month: any, dayOfMonth: any, year: any) => {
  return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();
};
export const getDayOfMonth = (date: any) => moment(date).date();
export const getMonth = (date: any) => moment(date).month();
export const getYear = (date: any) => moment(date).year();
export const getToday = () => moment().toDate();
export const getReadableWeekday = (date: any) => moment(date).format('dddd');
export const getReadableMonthDate = (date: any) => moment(date).format('MMMM Do');
export const getMonthDayYear = (date: any) => moment(date).format('MM-DD-YYYY');