We are going to learn how to adjust the position and size of the items on the grid which is critical to know in order to create real-world websites with CSS grid. We're going to create a mock-up for a website. And here in the grid4.html, you can see the mark-up for that. As you can see, we're targeting each of the items using a class name header, menu, content and footer. To start with them, we have this 2x2 grid. Each of the columns are one fraction unit(width). So they're responsive as you can see. And each of the rows are 40 pixels tall(height) for our website though we're going to need three rows. As we want the header to take up the top row, the menu and the content to being on the second row and the footer to be on the third row all the way at the bottom. So, let's create a third row here. Let's place in between the two existing rows and give it a height of 200px as you can see now the header and the menu is on the top row on the content and the footer in the second row and our third row is blank.
.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-rows: 40px 200px 40px;
    /* grid-template: repeat(2, 40px) / repeat(2, 1fr); */
}
As we haven't filled it with content yet since our items only take up the first four grid cells. So let's change that we'll start by targeting the header and making it span from the left hand side all the way over to the far right-hand side. To achieve that, we need to head into the dot header and give it a grid-column-start and set to one and also give it a grid-column-end: 3. As you can see now the header spans across the entire first row.

.header {
    grid-column-start: 1;
    grid-column-end: 3;
}

And what we're saying here is that we want the header to start at the first column line and end at the 3rd column line. And you might wonder why we have three column lines when we only have defined two columns. Well that's because the first column line goes from top to bottom on the left side of the grid. The second column line is the one that separates the two columns and the third is the one that goes from top to bottom on the far right hand side of the grid. So when you have two columns, you have three column lines. And you can write that like this alternatively though we can also use the shorthand method which I prefer. Let's remove this line here and also remove - start, rather do one for 1/3 as you can see it gives us the exact same result.
.header {
    grid-column: 1 / 3;
}
Let's also do the exact same thing with the footer.
.footer {
    grid-column: 1 / 3;
}
But now the footer also spans across the entire width well. Alternatively, we could have written this in a different way. We could have done one /span - 2.
.footer {
    grid-column: 1 / span 2;
}
I don't give the exact same value what we're saying is that we want the footer to start at the first column line and span across two columns. And finally there's also a third way which is to write minus one that'll target the very last column line. 
.footer {
    grid-column: 1 / -1;
}
.header {
    grid-column: 1 / -1;
}
Now, we know that we want our footer and header to span all the way to the last column line. We can do that with both of them. And take the advantage of the fact that in the future you might not know how many columns we're going to have in this grid. As we can change that. However you want so. This is a nice little trick when you don't know exactly how many columns the item will span across in the grid. And to prove that point for you, I'm actually going to change the amount of columns we have in the grid right now because we don't want the menu here and the content to take up an equal amount of space in the width. That doesn't make sense. we want the menu to be a narrow sidebar on the left-hand side here and we want the content to take up much more space. And we could do this without adding more columns by simply doing 1fr. Four fr, for example, now you can see that the content takes up much more space.
.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 40px 200px 40px;
}
Since the second column is 4 fraction units and the first column is only one fraction unit. However this is not a very flexible way of doing it. Because now we're still stuck with two columns on a website layout and you normally want a lot more columns than that in order to have the flexibility to shuffle around and change the content. So what I'm gonna do instead of it using repeat. Give it twelve columns each of one fraction units.
.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px 200px 40px;
}
Now the menu and the content one fraction unit each. in other words one column each and they're actually forcing the columns to be as wide as they need in order to display their content or just the descriptions we've added inside items in order to make this look nice again. I'm gonna head into the content class and give it a grid-column.
.content {
    grid-column: 2 / -1;
}
We know that it starts on the second column line two and we want it to go all the way final column line. Like that so we're gonna do minus one. Now we have a twelve column layouts instead of a two column layout meaning that we have much more flexibility. If you want to shuffle around on stuff and notice that the footer and the header still spans across the entire width which is solely because we're using the minus one here. If we had stuck with the three here and here that wouldn't work at all.
.header {
    grid-column: 1 / 3;
}
.footer {
    grid-column: 1 / 3;
}
So let's change it back to minus one.
.header {
    grid-column: 1 / -1;
}
.footer {
    grid-column: 1 / -1;
}
Now let's also look at the grid row property. As we're going to need that if we, for example, want the menu here to span all the way to the top. In order to do that, we first have to change the header though as we need to make the space here available. This little grid cell here needs to be available for the menu. So, we'll change it to two.
.header {
    grid-column: 2 / -1;
}
Now, we have a blank cell here meaning that we can head into the menu class and give it a grid row and set that 1/3 meaning that it spans from the first row line to the third row line.
.menu {
    grid-row: 1 / 3;
}
As you can see took up the spots here in the top left corner. Because this is the first row line. This is the second and here is the third, the fourth, then is of course the the bottom line. Okay, so before we jump onto the next screencast, I would recommend you to for example, try to make the menu span all the way to the bottom or alternatively make a pair on the right hand side instead of on the left hand side. 


** We have to look into browser inspect and the source code of html elements to understant grid better **
