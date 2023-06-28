// https://learn.javascript.ru/array#operatsii-s-massivami
'use strict';
let styles = ["Джаз", " Блюз"];

styles.push(' Рок-н-ролл');
let average = styles.length / 2;
styles[Math.floor(average)]=(" Классика");
alert (styles.shift ());
styles.unshift(' Рэп', ' Регги');
alert(styles);