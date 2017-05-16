const translator = require('custom-translate');

const text = 'the cow says moo';
const dictionary = {
	"cow": "cat",
	"moo": "meow"
};

translator.wordTrans(text, dictionary);
