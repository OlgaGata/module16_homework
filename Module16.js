/*
Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
- продумать тест-кейсы (успешное/неуспешное выполнение функции);
- продумать корнер-кейсы;
- написать unit-тесты (минимум 3).
*/

export function getPercent(percent, number)
{
    if (percent >= 0)
    {
        return number / 100 * percent;
    }
    else return ('Input negative percent');
}
console.log(getPercent(20,200));


/*function getPercent(percent, number)
{
    if (percent >= 0)
    {
        return number / 100 * percent;
    }
    else return ('Input negative percent');
}
console.log(getPercent(-20,200));*/