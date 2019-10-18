class QuizItem{
    constructor(word, definition, wrongAnswers){
        this.word = word;
        this.definition = definition;
        this.wrongAnswers = wrongAnswers
    }
}


var quizItems = [
    new QuizItem(
        'haunt',
        'A verb. It means to appear as a ghost or some kind of supernatural phenomenon', 
        ['candy', 'boo', 'horrify']
    ),
    new QuizItem(
        'supernatural',
        'Something that can\'t be explained by the laws of nature',
        ['trick', 'pumpkin', 'spooky']
    ),
    new QuizItem(
        'mysterious',
        'This word is used to describe things that have a secret-like quality that makes them hard to understand or define',
        ['midnight', 'shadow', 'witch']
    ),
    new QuizItem(
        'wraith',
        'A ghost or ghostlike image of someone, especially one seen shortly before or after their death',
        ['goat', 'monster', 'spider']
    ),
];

    

    
export default quizItems