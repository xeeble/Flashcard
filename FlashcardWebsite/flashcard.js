const flashcardData = [
    {
        category: "Python",
        cards: [
            {
                topic: "String",
                image: "https://example.com/string.jpg",
                front: "Front: What is a string in Python?",
                back: "A series of characters or data stored as text. Example: my_string = \"Hello\""
            },
            {
                topic: "Integer",
                image: "https://example.com/integer.jpg",
                front: "Front: What is an integer in Python?",
                back: "A whole number. Example: my_integer = 12321"
            },
            {
                topic: "List",
                image: "https://example.com/list.jpg",
                front: "Front: What is a list in Python?",
                back: "A changeable collection of objects. Example: [1, 1, 3.12, False, \"Hi\"]"
            },
            {
                topic: "Set",
                image: "https://example.com/set.jpg",
                front: "Front: What is a set in Python?",
                back: "An unordered collection of unique objects. Example: {100, 3.12, False, \"Bye\"}"
            },
            {
                topic: "List Operations",
                image: "https://example.com/list-ops.jpg",
                front: "Front: How do you add a single item to a list?",
                back: "Use append() method. Example: my_collection.append(\"Single\")"
            },
            {
                topic: "Set Operations",
                image: "https://example.com/set-ops.jpg",
                front: "Front: What are the main set operations?",
                back: "union(), intersection(), difference(), add(), remove()"
            },
            {
                topic: "Loops",
                image: "https://example.com/loops.jpg",
                front: "Front: What are the two main types of loops in Python?",
                back: "For loops and While loops"
            },
            {
                topic: "Try/Except",
                image: "https://example.com/try-except.jpg",
                front: "Front: What is the purpose of try/except?",
                back: "To handle potential errors in code execution and provide alternative actions when errors occur"
            },
            {
                topic: "File Handling",
                image: "https://example.com/file.jpg",
                front: "Front: How do you open a file for reading in Python?",
                back: "file = open(file_name, \"r\")"
            },
            {
                topic: "Classes",
                image: "https://example.com/classes.jpg",
                front: "Front: What is the basic structure of a class in Python?",
                back: "class class_name: with __init__ method and class attributes/methods"
            },
            {
                topic: "Webscraping",
                image: "https://example.com/webscraping.jpg",
                front: "Front: What library is commonly used for webscraping in Python?",
                back: "BeautifulSoup (bs4)"
            },
            {
                topic: "Requests",
                image: "https://example.com/requests.jpg",
                front: "Front: How do you make a GET request using the requests library?",
                back: "response = requests.get(url, parameters)"
            }
        ]
    }
] 

let i = -1;
let category = "Python";
let cat_id = 0;
let front = true;

function changeTopic(string){
    let cat = convertToString(string);
    category = cat;
    for (let index = 0; index < flashcardData.length; index++) {
        if (flashcardData[index].category == cat){
            cat_id = index;
        }  
    }
}

function flipcard(){
    // Get the data from the flashcard and display it here
    let data = "Text not found!";
    if(front){
        data = flashcardData[cat_id].cards[i].back;
        
    }
    else {
        data = flashcardData[cat_id].cards[i].front;
    }
    front = !front;
    displayFlashCardData(data);
}

function nextcard(){
    //get the next card in the list of cards and display the front of it
    //get the data from the card
    let data = "nope";

    if(i >= flashcardData[0].cards.length-1)
        {
            i = 0
        } 
        else {
            i++;
        }
    for (let index = 0; index < flashcardData.length; index++) {
        if (flashcardData[index].category == category){
            data = flashcardData[index].cards[i].front;
        }  
    }
    displayFlashCardData(data);    
}

function displayFlashCardData(data){
    let text = convertToString(data);
    document.getElementById("fc_text").innerHTML = text;

}

function convertToString(data){
    if (data != String){
        return data.toString();
    }
    return data;
}