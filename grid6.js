We're going to learn more advanced concepts. We've already learned about responsiveness. But now we're going to take that to a new level. So here we have the setup for a grid which you can see in the browser window as well. It's got six columns and two rows and that's defined here and should be pretty basic to you by now. Both the columns and rows have a value of a hundred pixels in width and height.
.container {
    display: grid;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 5px;
}
So this grid is not responsive now as you can see. But we know from previous casts, we can turn it into responsive grid by doing 1fr instead.
.container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 5px;
}
Now the columns will grow and shrink with the width of the container. However, you wouldn't necessarily always want your columns to be six like. Now, they're very squeezed together and at this point they're suddenly very wide. What you perhaps rather want to do is, for example, only have two in width when the example is being viewed on a mobile and six in width when it's viewed on a normal screen. So, let's make the amount of columns vary with the width of the container. Well, first go back to having 100 pixels here instead.
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 5px;
}
And then, rather than hard-coding in six columns, we're going to use something called auto-fit. Now what will happen is that it'll vary the amount of columns with the width of the grid. As you can see it simply tries to fit as many columns as possible into the container and when it gets a hundred pixels extra space on the right hand side it'll boom add a new one. So on a very narrow screen, it'll only show a couple of columns. However, this doesn't give us the responsiveness we want. As the amount of hundred pixel columns rarely add up exactly to the width of the container. Then we get a situation like this here where we have quite a lot of space left on the right hand side though not enough to add a new column. And that doesn't look nice. Now you might think that we could rather do auto-fit 1fr.
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 5px;
}
Wherever that'll only give us one column because auto-fit tries to fill up the grid with as many columns as possible until there's not enough space to add a new column. So when you use fraction unit, it starts by adding one column. However then all the width is used up immediately because at that point both the width of the entire container and the first column are set to one fraction unit. So to get the behavior we want, we're going to use something called minmax.
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minimum(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
    grid-gap: 5px;
}
And we'll set our columns to be minimum a hundred pixels maximum one fraction unit. Now you'll see that the columns will always fit the entire grid regardless of whether or not the container exactly adds up to 100 pixels. So what happens here is that the columns will always be at least a hundred pixels but if there's more available space it'll simply distribute that equally across all the columns. So, now there are more or less hundred pixels if we make the page a little bit wider. You can see that it stretches all of the columns. So, now the width of the container is something like 550 pixels or something. However when it reaches 600 pixels there, it uses the minimum size for the columns so that it can fit in six columns. So it prefers to use the minimum. However when it doesn't add up to exactly 500 or 600 pixels it uses one fraction unit instead. So now we also get a nice view on mobile like that and a nice view on a very wide screen.
