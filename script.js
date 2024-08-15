let question = +prompt("Введите номер месяца!")


switch (question) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
   alert("В этом месяце 31 день босс");

    break;


  default:
    alert("В этом месяце 30 дней ")
    break;
}