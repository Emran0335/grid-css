This grid has three columns. First one is 100px. Second one is auto. And the thir one is 100px. So the second column grow with the screen width. It is responsibe too. We also have two rows and each has 50px height.
.container {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}

Now the first thing we are going to do is to change the responsiveness of the grid. Let's say, we want that all there columns grow in size as the container grows in size regardless of the width of the container. In order to achieve that I want to use new values that come with css grid. It is called fraction unit. Let's set 1fr column for each three columns.

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}

Now we see they all grow and shrink equally. So, what is happening here is that grid split the entire width to three fractions. Each of the columns takes up the one fracton unit. If we change the second one here to two fracton units. Now we will see the second two fraction units takes up twice the space as the other one fraction unit takes. And they do the same in shrinking. Two fraction units shrink twice space than the others.

.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}

Now the entire width of the screen is divided into four fraction units. And the second column takes two of those four fraction units. Now let's give one fracton unit to each three columns again.

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}

This time, we will use repeat method to give the three column exactly same one fraction unit each.

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}
Now they are all responsible and take up equall space of the container width. So the first parameter of the repeat function is the number of columns or rows. And the second parameter of the repeat method is value of the width(column) or the height(row) of the container. Let's say, we want six columns here and the number of the first parameter is six.
.container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}
As we can see, now our six items of the container fill up the entire width of the container equally. As we see there is only one row but there are six columns in this container. Let's go back to three columns of the container.
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 50px);
    grid-gap: 3px;
}
Here we get two rows of 50px height. This time, we will use simpler way to define the column and row and this is called shorthand method. First we have to remove the dash columns and going to paste the rows value first and then use forward slash and then the value of columns.
.container {
    display: grid;
    grid-template: repeat(2, 50px) / repeat(3, 1fr);
    grid-gap: 3px;
}

So, grid-template is the shorthand method of grid-template-rows and grid-template-columns. But we have to remember that repeat method of rows will come first and then forward(/) slash and then the repeat method of columns. The rule we have to remember that which one will come first rows or columns. It is like the letter of L. First use the height and then width. So we need to remember that repeat() of rows will come first and then repeat() of columns. In between them, we have to use forward slash(/). To sum up, start with the rows and then columns.
