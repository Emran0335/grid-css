I'll teach you how to justify and align the items on the grid. So here we have our classic website layout. It contains 12 columns in the width. Each are one fraction unit and three rows where the second one is auto.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
}
So this grid is responsive in both width and height. As you can see, we have defined the width of each of the items using the grid-column value.
.header {
    grid-column: 1 / -1;
}

.menu {
    grid-column: 1 / 3;
}

.content {
    grid-column: 3 / -1;
}

.footer {
    grid-column: 1 / -1;
}
So, for the header, for example, we're saying start at the first column line which is this one and end at the last one which is this one over on the right-hand side. So it's kind of stretching from the start point to the end point and this axis here the row axis is the one you control with justification.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    justify-items: stretch;
}
So, if we do justify-items that'll be by defaults stretch. However, if we, for example, want each of the items to rather center itself as much as possible and not stretch all the way from the left-hand side to the right-hand side. We can use center.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    // justify-items: stretch;
    // justify-items: center;
    // justify-items: end;
}
Now as you can see now each of the items are centered as much as possible. You can also use part that'll squeeze all of them towards the left-hand side and end is the opposite of this that'll squeeze all the items to the right-hand side. Now let's comment out this a little bit. And align-items property that'll do the same thing though along the column axis, so the vertical axis from top to bottom.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    align-items: stretch;
}
So if we do center here you can see that each of the items are now squeezed together towards the center though not only left to right row axis but on the top to bottom column axis. We can do and that'll squeeze all them to the bottom or start. That'll squeeze them works the top. Now let's do the center again and bind this with center here. Now all the items just a tiny rectangle in the center of the grid cells which had originally occupied fully.
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    justify-items: center;
    align-items: center;
}
Now I have no idea why I would want to create a website layout like this. It's really weird but that's besides the point of this. Let's comment out these code and get back to the original layout. And look at how you can do the same thing though only targeting one of the items. Let's head into the content, for example, then you can use justify-self.
.content {
    grid-column: 3 / -1;
    justify-self: center;
    align-self: end;
}
A new center, now only the content is centered. Align-self, well,now the content is squeezed down to this tiny little box in the bottom center of the huge space. It originally occupied a little bit sad. Actually to see contents being turned into a shadow of
itself. Like that, so let's give it back its original space like that.
.content {
    grid-column: 3 / -1;
 //   justify-self: center;
 //   align-self: end;
}
So, that's it.
