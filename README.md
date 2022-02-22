# Password Generator

> This is a mini-project to be handed in to Moringa School for assesment. The web-app generates random passwords based on; character length, and whether or not to include uppercase letters, lowercase letters, numbers or symbols. 

## :hammer: Built With

- HTML, CSS, JS
- Bootsrap

## :link: Link to web app:

<https://password-generator-moringa.netlify.app/>

### :computer: Setup
To get a local copy up and running follow these simple example steps.

- open your terminal, and run 'git clone https://github.com/blancc-page/password-generator' to clone the repository to your computer  
- cd into the project folder
- open the index.html file

## :newspaper: Documentation

### :eyeglasses: Logic

> This project has very basic HTML structure & CSS positioning. The bulk of it is JavaScript, which adds the funtionality.

> When the generate button is clicked an event listener is trigered which listens for what options have been checked. Then the generatePassword function is called and it takes in the checked or unchecked options as arguments.

>The options are then filtered according to whether they have been checked or unchecked; following this the remaining options, which are assigned to typesArray, are then all looped through while assigning their keys to funcName, calling randomFunc with funcName as the index and appending the results generatedPassword.

> finalPassword is declared to store the value of generatedPassword which has been truncated to the length selected. generatePassword returns finalPassword, which is returned text inside the resultElement.

### :key: Key JS Methods Used

#### Math.floor & Math.random()
> These were used in combination to generate random values, which were mapped against the ASCII chart to produce random uppercase and lower case characters as well as numbers. The symbols were hard-coded.

#### array.filter()
> This was used to filter the checked options from the unchecked options.

#### Object.keys() & Object.values()
> These were used to interact and manipulate the content of the randomFunc object.

#### String.slice()    
> Used to truncate generatedPassword to the length specified.

#### Clipboard.writeText()
> Used to give the clipboard button the "copy to clipboard"functionality.



## :trollface: Authors

👤 **Moses Muta**

- GitHub: [@githubhandle](https://github.com/blancc-page)
- LinkedIn: [LinkedIn](<linkedIn link>)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## :muscle: Show your support

    Please give a⭐️if you love this project.

## :raised_hands: Acknowledgments

- Brad Traversy [@githubhandle](https://github.com/bradtraversy)
- Florin Pop [@githubhandle](https://github.com/florinpop17)

## 📝 License

This project is [MIT](./MIT.md) licensed.

