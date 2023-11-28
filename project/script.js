let frame = document.getElementById("rect");
let pquote = document.getElementById("quote_text");
let img = document.getElementById("img_map");
let divider = document.getElementById("divider");
let divider2 = document.getElementById("divider2");

let x = 393;
let y = 852+230;
let ratio = x/y;

let decrease_value = 10;
let dy = 200;

x = y*ratio - dy*ratio;
y = y - dy;

frame.style.cssText = `width: ${x}px; height: ${y}px`;

let text = "14 января 1942 года. (…) Когда вышел на улицу и хотел к Райкому ВКП/б/ идти по каналу Грибоедова, но одно событие увлекло меня по проспекту 25 Октября. Горел Гостиный Двор. Пожар охватил весь прилегающий угол к Думе и до центра Гостиного Двора. Пламя бушевало. В предрассветной дымке искры огромными столбами поднимались к верху превращаясь в чернобелые облака. На пожаре было очень немного машин. До средины прос[пект] Гостиный двор оцеплен войсками. На пожар смотрели сотни людей. Многие сожалели, что мало пожарных. Да, и как же жалеть, ведь какой это красивый уголок города. Сейчас когда смотришь на этот уголок, сердце сжимается от боли и хочется отомстить фашистским варварам за разрушения.";

pquote.innerText = text;

img.style.cssText = `width: ${x-20}px`;

divider.style.cssText = `width: ${x-20}px`;
divider2.style.cssText = `width: ${x-20}px`

