const dateUser = {};

/* Заполняет обьект с датой. Принимает аргументом год */
function setObjDate(year) {
  const arrMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const arrMonthEng = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

  const newArr = arrMonthEng.reduce((acc, item, i) => {

    acc[item] = [];

    return acc;
  }, {});

  dateUser[year] = newArr;

  const weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  Object.keys(dateUser[year]).forEach((key, i) => {

    const day = new Date(year, i + 1, 0).getDate();

    for (let y = day; y > 0; y--) {
      const weekDayNumber = new Date(year, i, y).getDay();
      dateUser[year][key].push({number: y, user: '', dayOfWeekNumber: weekDayNumber, dayOfWeek: weekDay[weekDayNumber]});
    }
  });
}

setObjDate('2021')
setObjDate('2022')
setObjDate('2023')

console.log(dateUser)
