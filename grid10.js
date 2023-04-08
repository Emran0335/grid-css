I'm going to show you how to justify and align the entire content of a grid. I've added here a black border around the grid container so that we can see its edges.
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
}
We've also made sure that the grid is fully responsive. There's a little bit of space around it. So, right now, our grid items only occupy a tiny part of the entire grid container. That's important in order to learn about the justifying and aligning the content. So let's start with the justification which defines and distributes space between and around the items along the row axis from left to right. So if we set justify-content and set that to end. As you can see that'll shuffle all the content over to the right-hand side to the end of that axis - the row axis.
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-content: end;
}
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-content: center;
}
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-content: start;
}
The default value here was start. We also do center. Like that, now center it along the row axis. So, let's combine this with align-content as well.
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-content: center;
    align-content: end;
}
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-content: center;
}
Do you think, for example, I'll push all the content down to the lower end of the grid because aligning controls the content along the column axis the vertical one which goes from top to bottom? If we do center here as well and it will fully center the items in the grid. Now, let's comment out this one and and have a look at the other values. You can use here as there's a couple of cool ones. If we, for example, want a lot of space in between the items, we can do space-between.
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-content: space-between;
   // align-content: center;
}
Now we have as much space as possible in between the items along the row axis we can also do space-evenly like that which distributes the items evenly throughout the row axis so the items have an equal amount of space-around them finally.
.container {
    border: 1px solid black;
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    // justify-content: space-evenly;
    justify-content: space-around;
   // align-content: center;
}
There's also the space-around. This one is pretty similar to space-evenly though each of the items have a half size space on either end. That if you have two items besides each other that'll give a full-size space between them. Though here in between the first column line and the first item you only have a half space as this item forces a half space on this side. Though the grid line itself doesn't force the grid to create any space for it.These two both of the items first grid to add a half space in between them, resulting in full-size space. That was the basics of justifying and aligning the content.
