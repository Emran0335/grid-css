We're going to learn a new way of positioning and sizing the items on the grid using something called named lines. So we have to find our normal grid here which is the website layout. You should be familiar with by now though in this case, we're defining it in the very simple way of only having two columns one being one fraction unit, and one being five fraction units.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 40px auto 40px; 
}
So we're not using the flexible twelve column layout here. As this setup makes it easier when you using named lines, so to brush up a little bit, the grid has column lines and row lines. And the first column line is the one on the left hand side. The second one is one separating the two columns and the third one is the one on the far right hand side. And our content item, for example, is defined to span from the second row line to the third row line.
.header {
    grid-column: 1 / 3;
}
.content {
    grid-column: 2 / 3;
}
.footer {
    grid-column: 1 / 3;
}
From here to here in our code that will be from the line that goes in between here and until the line that goes here. So what we now can do is we can add a square bracket in between and write [content-start]. For example, on the third line write [content-end].
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr [content-start] 5fr [content-end];
    grid-template-rows: 40px auto 40px; 
}
Like that now what we can do is we can swap out the number two here with [content-start] and the number three with [content-end].
.content {
    grid-column: content-start / content-end;
}
Like that as you can see that works fine. If we wanted to do the same thing for the header, we'd have to give a name to the first line as well up here. Let's call that [main-start]. So now the header spans from [main-start] to [content-end]. However, I actually want to call this line [main-end] as well because there might be a case in the future where we're going to reference the [main-end] explicitly, not use [content-end] as a proxy for header.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
    grid-template-rows: 40px auto 40px; 
}
So, let's just add a new name here. Like that could give it a space and then the new name now. We can do [main-start] and [main-end].
.header {
    grid-column: main-start / main-end;
}
As you can see works perfectly fine. The footer can get the exact same layout like that.
.footer {
    grid-column: main-start / main-end;
}
Now, let's also name the rows using the exact same convention. It will do [main-start]. I'm just going to copy them. I'm going [start-end] and [main-end]. Like that now you might wonder why we've been using this - syntax here and that's because they give you a little bit of magic now.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
    grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end]; 
}
Given that we've called this line here for [content-start](second line of column) and this line here for [content-end](last line of column). The grid knows that this is the content column or columns. If that was the case, so you can actually set the grid column to just content. Like that and as you can see it works now.
.content {
    grid-column: content;
}
The header and the footer spans from [main-start] to [main-end]. So we can do the exact same thing there as well just use grid column main.
.header {
    grid-column: main;
}
.footer {
    grid-column: main;
}
And to take this even a step further. Actually we can also use grid-area. In one of these cases that'll be in the content case. Because, let's have a look at the content lines - both the row lines and the column lines. So we know we have the [content-start] here and the [content-end] here. Though we also have a [content-start] here, the second row line, first, second. So this one here and we have a [content-end] on the third row line. The third one here meaning we have boxed in an area with content lines. Here, here, here, here and here, and now we can actually use grid-area which you might remember from section one of this course are simply different grid-area and set it to content.
.content {
    grid-area: content;
}
Like that, and it still works. However you might be tempted to try and do the same thing down on the footer though that wouldn't work because it has to be boxed in by four main lines though the [main-start], row line is the one that starts up here not down here above the footer. So here we have only kind of boxed it partially in. We have the [main-start], column line here which is the start of the footer and the [main-end], row line just the bottom of the footer. And the [main-end], column line which is the right-hand side of the footer though the top of the footer is the [content-end], line. So we can't use grid-area main here.
.footer {
    grid-area: main;
}
As you can see it breaks the entire layout. So be careful and make sure that you have properly boxed in an area before you start using grid area.


** We have to look into browser inspect and the source code of html elements to understant grid better **
