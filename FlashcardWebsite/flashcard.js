const flashcardData = [
    {
        category: "Python",
        cards: [
            {
                topic: "String",
                image: "https://example.com/string.jpg",
                front: "What is a string in Python?",
                back: "A series of characters or data stored as text. Example: my_string = \"Hello\""
            },
            {
                topic: "Integer",
                image: "https://example.com/integer.jpg",
                front: "What is an integer in Python?",
                back: "A whole number. Example: my_integer = 12321"
            },
            {
                topic: "List",
                image: "https://example.com/list.jpg",
                front: "What is a list in Python?",
                back: "A changeable collection of objects. Example: [1, 1, 3.12, False, \"Hi\"]"
            },
            {
                topic: "Set",
                image: "https://example.com/set.jpg",
                front: "What is a set in Python?",
                back: "An unordered collection of unique objects. Example: {100, 3.12, False, \"Bye\"}"
            },
            {
                topic: "List Operations",
                image: "https://example.com/list-ops.jpg",
                front: "How do you add a single item to a list?",
                back: "Use append() method. Example: my_collection.append(\"Single\")"
            },
            {
                topic: "Set Operations",
                image: "https://example.com/set-ops.jpg",
                front: "What are the main set operations?",
                back: "union(), intersection(), difference(), add(), remove()"
            },
            {
                topic: "Loops",
                image: "https://example.com/loops.jpg",
                front: "What are the two main types of loops in Python?",
                back: "For loops and While loops"
            },
            {
                topic: "Try/Except",
                image: "https://example.com/try-except.jpg",
                front: "What is the purpose of try/except?",
                back: "To handle potential errors in code execution and provide alternative actions when errors occur"
            },
            {
                topic: "File Handling",
                image: "https://example.com/file.jpg",
                front: "How do you open a file for reading in Python?",
                back: "file = open(file_name, \"r\")"
            },
            {
                topic: "Classes",
                image: "https://example.com/classes.jpg",
                front: "What is the basic structure of a class in Python?",
                back: "class class_name: with __init__ method and class attributes/methods"
            },
            {
                topic: "Webscraping",
                image: "https://example.com/webscraping.jpg",
                front: "What library is commonly used for webscraping in Python?",
                back: "BeautifulSoup (bs4)"
            },
            {
                topic: "Requests",
                image: "https://example.com/requests.jpg",
                front: "How do you make a GET request using the requests library?",
                back: "response = requests.get(url, parameters)"
            }
        ],
        
    }, 
    {
        category: "JavaScript",
        cards: [
            {
                topic: "appendChild()",
                image: "https://example.com/dom-manipulation.jpg",
                front: "What is appendChild() and how is it used?",
                back: "An HTML DOM method that after creating an element, places the element in the appropriate location within the document. Takes one parameter: the element to append."
            },
            {
                topic: "getElementsByTagName()",
                image: "https://example.com/dom-methods.jpg",
                front: "What does getElementsByTagName() do?",
                back: "A method of the DOM that takes a tag name parameter and returns an array called 'NodeList' containing elements with the specified tag name."
            },
            {
                topic: "innerHTML",
                image: "https://example.com/element-properties.jpg",
                front: "What is innerHTML and how is it used?",
                back: "A property of the Element class that returns or alters contents of an HTML element as a text string."
            },
            {
                topic: "History Objects",
                image: "https://example.com/history-objects.jpg",
                front: "What are History Objects in JavaScript?",
                back: "Part of the window object that contains URLs visited by the user within a browser window. Provides methods for navigating through user's history and manipulating the history stack."
            },
            {
                topic: "Window Objects",
                image: "https://example.com/window-objects.jpg",
                front: "What are Window Objects in JavaScript?",
                back: "The top of the DOM hierarchy serving as the global object. Controls the environment containing the document. All DOM operations take place in a window."
            }
        ]
    },
    {
        category: "HTML",
        cards: [
            {
                topic: "DOCTYPE",
                front: "What is <!DOCTYPE html> and when is it used?",
                back: "It is a declaration that must be at the start of all HTML documents to tell the browser what document type to expect. It has no ending tag."
            },
            {
                topic: "Anchor Tag",
                front: "What is the <a> tag used for and what is its key attribute?",
                back: "The anchor tag creates hyperlinks using the href attribute, which specifies the URL or path to link to."
            },
            {
                topic: "Lists",
                front: "What are the differences between <ul> and <ol> tags?",
                back: "The <ul> tag creates an unordered list with bullets, while <ol> creates an ordered list with numbers. Both use <li> tags for list items."
            },
            {
                topic: "Table Elements",
                front: "What are the essential tags needed to create an HTML table?",
                back: "<table> defines the table, <tr> defines table rows, <td> defines table cells, and <th> defines header cells."
            },
            {
                topic: "Metadata",
                front: "What is the purpose of the <meta> tag?",
                back: "The <meta> tag is used to provide metadata about the HTML document."
            },
            {
                topic: "CSS Basics",
                front: "What is CSS and what does it allow?",
                back: "CSS is a style sheet language that controls HTML elements' appearance. It allows for document appearance control, uniform design, and separation of content from design."
            },
            {
                topic: "CSS Selectors",
                front: "What are the three main types of CSS selectors?",
                back: "1. HTML tags (e.g., <div>, <p>)\n2. ID selectors (e.g., #header)\n3. Class selectors (e.g., .button)"
            },
            {
                topic: "Implementation Methods",
                front: "What are the three CSS implementation methods and their priority order?",
                back: "Methods (highest to lowest priority):\n1. Inline CSS: Applied to individual HTML elements\n2. Internal CSS: Applied to single HTML page\n3. External CSS: Applied to entire website"
            },
            {
                topic: "Layout Types",
                front: "What are the two main types of CSS layouts?",
                back: "1. Fluid layout: Flexible dimensions using % and ems\n2. Fixed layout: Set dimensions using pixels"
            }
        ]
    }
] 

let i = -1;
let category = "";
let cat_id = 0;
let front = true;
const flashcardDataLength = flashcardData.length;

function changeTopic(string){
    // Take the Selected category and set the cat_id to the matching category index in the FlashcardData array
    let cat = convertToString(string);
    category = cat;
    for (let index = 0; index < flashcardDataLength; index++) {
        if (flashcardData[index].category == cat){
            cat_id = index;
        }  
    }
}

function flipcard(){
    // Get the data from the flashcard and display it here
    let data = "Text not found!";
    for (let index = 0; index < flashcardDataLength; index++) {
        if (flashcardData[index].category == category){
            if(front){
                data = flashcardData[cat_id].cards[i].back;
                
            }
            else {
                data = flashcardData[cat_id].cards[i].front;
            }
            front = !front;
        }
    }
    displayFlashCardData(data);
}

function nextcard(topic){
    //get the next card in the list of cards and display the front of it
    let data = "nope";
    changeTopic(topic);

    if(i >= flashcardData[0].cards.length-1)
        {
            i = 0
        } 
        else {
            i++;
        }
    for (let index = 0; index < flashcardDataLength; index++) {
        if (flashcardData[index].category == category){
            data = flashcardData[index].cards[i].front; //get the data from the card
        }  
    }
    front = true;
    displayFlashCardData(data);    
}

function displayFlashCardData(data){
    //Change the text on the flashcard
    let text = convertToString(data);
    document.getElementById("fc_text").innerText = text;

}

function convertToString(data){
    if (data != String){
        return data.toString();
    }
    return data;
}
