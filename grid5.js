We're going to learn really cool feature of CSS grid called template areas which allows you to change an experiment with layouts much more easily than with the techniques you learned in the previous writing. This feature is ideal for creating prototypes of layouts quickly. We're using more or less the same example from the previous screencast. Our grid has 12 columns and 3 rows. The columns are just as they were in the previous screencast. However for the rows, I've changed the second one from 200px to auto that means it'll take up whatever available space.
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
}
There is left in the height and combining that with setting the height of the grid container itself to a hundred percent(height: 100%). This will result in the grid being responsive in the height as well as you can see if we make it taller the second row grows with the grid. Now we're still using the grid column property to adjust the position and size of the items. What we rather want to do in this screencast is used something called grid-area and to be able to do that we're going to have to give the container a grid template-areas property. And the syntax you're about to see now might seem a bit weird. 

.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        "h h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "f f f f f f f f f f f f"
        ;
}

It'll be a visual representation of the grid and the way it works is that we'll create a string for each of the rows and in those strings we'll create a cell for each of the columns. so let's add letter H 12 times in the first string. We have to give it exactly 12 characters that has to match the amount of columns. So we're not actually defining the columns or rows here. We've already done that up here. We're just naming them so that we can refer them using these names in the items property later on. In the second row, add 1m and eleven c's. I thought in the third row add twelve f's. What you have here is a visual representation of how we want our grid to look like. You might have understood the H M C and F. They refer to h = header,  m = menu, c =  content and f = footer. So, now, let's remove the old way of positioning the items like that and build up the grid over again.
.header {
    grid-area: h;
}
.menu {
    grid-area: m;
}
.content {
    grid-area: c;
}
.footer {
    grid-area: f;
}
We'll give the header a grid-area of h . As you can see as a result the header takes up the entire top row just as we've defined here. We'll give the menu a grid-area of m, content grid-area of c, footer grid-area of s. As you can see our layout is just the way we want it to be. And it's responsive. Now the reason this technique is brilliant for creating mock-ups is because now I wanna make the menu span all the way to the top. Like we did in the previous screencast, we can just replace this h here with an M.
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        "m h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "m f f f f f f f f f f f"
        ;
}
And as you can see automatically the menu popped up to the top. If you want to make it span all the way to the bottom, let's do the same thing here as well and just as easy as that we have changed layouts without having to fiddle around with the values in the item classes. You can also use dots which will result in blank cells. Like that use four dots in header and footer at the beginning and at the end. 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        ". h h h h h h h h h h ."
        "m c c c c c c c c c c c"
        ". f f f f f f f f f f ."
        ;
}
Now we have this weird experimental layout where all the corners are blank. Now one thing you need to be aware of is that the areas will only be valid if they are rectangled. Try and manage this to add F so that the F footer goes like that and then up you can see it breaks the entire layout.

.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        "m h h h h h h h h h h h"
        "m c c c c c c c c c f c"
        "m f f f f f f f f f f f"
        ;
}
So you have to use rectangles. As you understand this is a super simple way of experimenting with the layout. So, I'd recommend you to play around with these values here so that you make sure that you properly understand it. And once you've done that you have finished the first section of this course so congratulations.
