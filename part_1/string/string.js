// https://learn.javascript.ru/string#sdelat-pervyy-simvol-zaglavnym
const ucFirst = (str) => {
    const result = "В" + str.slice(1, 4);
    alert(result);
}
ucFirst("вася");
// https://learn.javascript.ru/string#proverka-na-spam
const checkSpam = (str) => {
    const result = str.toLowerCase ();
    const x = str.toUpperCase ();
  return (result.includes('viagra')|| x.includes('XXX'));
  }
  alert(checkSpam ("buy ViAgRA now"));
  alert(checkSpam ("free xxxxx"));
  alert(checkSpam ("innocent rabbit")); 