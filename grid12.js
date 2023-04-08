I'm going to explain the difference between auto-fit and auto-fill. So here we have two different grids using one or the other you can see them on the page.

.container {
    border: 1px solid black;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: 100px 100px;
}


.container2 {
    border: 1px solid black;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: 100px 100px;
}

Here and I'm assuming that you understand the basics of this complicated expression here. We're basically repeating with auto-fit as many columns as we can fit into the grid. Given these constraints here, they should be minimum 100pixels and maximum one fraction unit. And that as you probably remember from the screencast in the second section will give a nice responsive behavior where the amount of columns grows with the size of the grid. Like this, if we large in this page boom there the grid crossed the 300pixel threshold meaning it could fit three columns in instead of two. Now as we make it more wide the columns become one fraction unit until it reaches the next threshold which is 400pixels and boom then autofit. And autofit adds another column to the grid since we now can fit 400pixel columns into the grid. However, there's a slight difference between the two and that'll be apparent if we try to enlarge into grid even more like this. Now what you'd see in that auto-fill, actually added fifth column even though we don't have a fifth element to add there. Whereas auto-fit made sure that the four items we have actually fit the grid. Now under the hood, what's happening here is actually that both of them add new column tracks though auto-fit actually collapses those new columns to see those pixels in width so that the current items you have in the grid when defined like this with a maximum size of one fraction unit, actually it will fit to the grid regardless. Whereas it's auto-fill at every 100threshold like there and there and there it'll add new column tracks which basically are empty. So that was the difference between auto-fit and auto-fill.
