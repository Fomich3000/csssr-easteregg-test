Feature('easterEggBug');

Scenario('test something', (I) => {
I.amOnPage('http://blog.csssr.ru/qa-engineer/');
I.click('ВНИКАТЬ В ДЕТАЛИ ПРОЕКТОВ');
I.click('СОПРОВОЖДАТЬ ПРОЕКТЫ');
I.click('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
I.click('РАБОТАТЬ С ФАЙЛАМИ ПРОЕКТОВ');
I.click('ВНИКАТЬ В ДЕТАЛИ ПРОЕКТОВ');
I.click('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
I.seeElement('.egg');

});
