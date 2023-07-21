// https://learn.javascript.ru/closure#armiya-funktsiy
const makeArmy = () => {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let a = i;
        let shooter;
        shooter = () => {
            alert(a);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();