# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- NODE JS
- Express JS
- EJS
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

It was very nice to create this page using node.js, express and ejs! It made it very faster and different to others time.

Excatly "what I learned" isn't correct, because in this case was more a recap of what I learned on my course.

But onestly I was happy about 

```js
app.get("/", (req, res) => {
  // Get API
  https.get("https://api.adviceslip.com/advice", (response) => {
    response.on("data", (data) => {
      const advices = JSON.parse(data);
      const id = advices.slip.id;
      const advice = advices.slip.advice;
      res.render("index", {
        id: id,
        advice: advice,
      });
    });
  });
});
```

Call the API https://api.adviceslip.com/advice and after that, take the data that I wanted and relocate in html file, using EJS, like this: 

```html
        <h1>ADVICE #<%= id %></h1>
        <p>"<%= advice %>"</p>
```

### Continued development

I think that i will continue to use EJS for some other project beacuse I liked very much to use it and made everything more faster

## Author

- Website - Tommaso / Tiuty00 (https://github.com/Tiuty00)
- Frontend Mentor - [@Tiuty00](https://www.frontendmentor.io/profile/Tiuty00)
- Linkedin - [Tommaso Caravaggi](https://www.linkedin.com/in/tommaso-caravaggi-66b130251/)

------------------------------------------------------------------------------------------

