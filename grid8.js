We're going to take what you've learned up until now and use it to create really cool image grid. I've already created the setup. We're using the technique for responsiveness which we talked about previously. Using auto-fit in combination with minmax which gives us a nice responsive grid that varies the amount of columns. And the rows are implicitly created and are 75 pixels tall in the grid8.html.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
}
You can see that I've added an image to each of the items in the grid. That's of course, the images you can see here. And this is already, I'd say, a pretty cool grid. However not all of these images fit the frame they're given equally. Well, some of them might be more horizontal while other images might be more vertical. I also have a few favorites which I think deserve a little bit of extra attention. And you can see, they're actually given some of these item classes like vertical, horizontal and big. These are the images which I don't think fit well into only one grid cell. So let's go ahead and make the horizontal images twice as wide. Head over to the CSS to the horizontal class and we'll set the grid-column property.
.horizontal {
    grid-column: 1 / span 2
}
Well, previously we'd do something like 1 that's the starting value and you span 2 so that they'd span across two columns. However as you can see that'll force all the horizontal images which start in the first column line. If we enlarge in the grid, you'll see that they'll have. They'll still stick to the first grid column line which amongst other things leaves open spaces in the grid to something. We're going to talk about later on. So what we rather want to do is swap out this one here with auto.
.horizontal {
    grid-column: auto / span 2
}
Now you can see they start on whatever column line they were given initially. This one starts here and these two now happen to start on the first column line. But if we change the way they can see that the horizontal images start on various grid lines and not just one what we actually also can do here is remove this entirely and just do grid column span 2.
.horizontal {
    grid-column: span 2
}
So the grid-column and grid-row properties can take a lot of different values and combinations. And at this point, this is the simplest we can do. However I wanted to show you the various alternatives. Okay, now, let's do the same thing with the vertical images. The ones we want to make taller than the rest of the images. So here will use grid-row and set back to span 2.
.vertical {
    grid-row: span 2;
}
As you can see this one and this one they're now taller than all the others. Now we've gotten a few blank cells throughout the grid and we're going to talk about that in a minute. Let's first make the big images. Once we want to highlight twice as tall and twice as wide as the normal images in the grid. Grid-column and and grid-row span 2.
.big {
    grid-column: span 2;
    grid-row: span 2;
}
Now you can see this image here and this one here and this one here are really getting the attention they deserve. But we need to fix these blank space here because that doesn't look nice. So why do these blank space(spots) appear? To understand that, let's look at how the grid lays out each of the items. Starts up here in the top-left corner lays out the first item. 2nd, 3rd, 4th, 5th and then it needs to continue on the next row which is here. And it tries to fit in the 6th image. However when it's about to layout that one it can't fit it as it only has one grid cell available here. However the sixth item is a big one. It's this one here. Let's double check that in the HTML one, two, three, four, five, six, and that is indeed a big item. So what it then does is that it continues on looking at the next cell that's already taken. So it jumps onto the next cell again and here it actually has enough space to layout the big item and then it simply continues laying out the next item here, here and then one here, leaving that spot here blank. Wouldn't it be great if we somehow could fill these spots? Well, we can and to do that. We're going to use a property called grid-auto-flow. It's by default set to row meaning that it'll lay out the items one row at a time.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: row;
}
Just as we talked about starting here and going across the first row and then jumping next to the second row and continuing on. Like that. However if we set it to dense the loose so-called dense packing algorithm which attempts to fill the holes in the grid.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
}
If there are holes in the grid, smaller items come up. Later then, it'll move those up to fill the blank spaces.

So if we go back to row we see that this space is blank.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: row;
} 
The next item in the grid which could potentially fit in here would be not. This one the sixth item but the seventh item of the waterfall(image) here. So, let's look at what happens when you change it to dense and indeed the waterfall image has now jumped back to this position and filled that hole.
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
}
And this works regardless of how wide the screen is. As you can see we have a super cool image grid now which looks really hard to create. Actually, however we've done it simply using these 20 lines of CSS and finally I want to mention that this dense feature here is an example of sorts order independence which is a huge win for CSS. It means that the grid can arrange the items regardless of how they're laid out in the mark-up. Here we simply use the mark-up for what it's supposed to use for markup, for content and we're using the CSS for what it's supposed to be used for styling and we're not limited whatever order we laid out the images initially. So source order independence gives you a lot of flexibility. 
