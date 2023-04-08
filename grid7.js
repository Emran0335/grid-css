We're going to continue with grid from the previous one as it still has an issue we need to fix. Because if we make this grid narrow. Like this, and have a look at the rows that are created beneath the two rows we defined. They are very tiny and do behave default. We'll see that they're not acting the way we want them. Actually, they're not a hundred pixels in height which we define here. They're only as tall as the content inside of them. Force them to be and that's because they are implicitly created.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: 100px 100px;
}
Because as you can see here, we only explicitly created two rows. However with our current defined behavior what are the columns we are going to need somewhere to place these items which can't fit in our explicit grid up here. So from five and onwards we, need to create new rows automatically in order to display our items. And as we haven't told our grid how we want to style rows that it has to add to the grid itself. It just has to decide for itself how these rows are going to look. So let's fix this because we can target these rows by simply doing grid-auto-rows and set the value to a hundred pixels.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: 100px 100px;
    grid-auto-rows: 100px;
}
And now as you can see, they're just how we want them to be. You can see that as well grows and shrinks nicely with all rows. Always being hundred pixels tall and now that we've defined this one. We can actually get rid of this one like that e.g let's delete the grid-template-rows: 100px 100px;
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
}
Now all rows will be created implicitly and they'll always be 100 pixels tall.
