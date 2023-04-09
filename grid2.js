You're going to learn how to create grids through defining its rows and columns. A grid consists of two main elements. There's the container which we have here and then there's the items which are the elements inside the container. In our case, six lives which display the numbers from 1 to 6. Now without any grid layout, this results in 6 divs stacked on top of each other. I've also given them a little bit of styling but that is nothing to do with the grid layout itself. To turn this container into a grid, we're going to target it and give it display:grid, run the code that won't result in any layout change yet because we haven't defined how we want our grid to look like. So, by default it only has one column and thereby it looks like. We've just stacked six divs on top of each other. In order to specify the columns, we'll give the container a grid-template-columns. We will define how many columns and how width we want them to be. Let's set the first one to a 100px, the second one to Auto and the third one to 200px as well. Auto, in this case, means that the column will take up whatever remaining space there is in the width. Let's also give the grid a couple of grid-template-grows and let's give both of them a height of 50px. So in the grid template columns property you define the width of the columns and in the grid template rows you define the height of the rows and as you can see we have a nice little grid hair as expected. It contains three columns going from top to bottom one, two, three and two rows going from left to right one, two.Since the second column here is set to auto this grid is also responsive. In order to make the grid look a little bit nicer I want to give it a grid-gap property and set it to 3px.

.container {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}

As you can see that gives nice little gap between the items. Now let's say we don't want our grids to be three columns width and two rows long height. But rather two columns width and three long rows height, then we simply need to remove a column we can remove this last one. Here for example and add a row 200px down. Here we run the code you can see that we have a completely different grid 2 columns 1, 2 and 3 rows 1, 2, 3. The queue first two rows are 50 pixels tall(height). However, the third one is 200px(height) and the grid is still responsive as the second column is set to auto. So in the next screencast, I'm going to show you a few more ways of setting these values inside the grid-template-columns and grid-template-rows later. 

.container {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 50px 50px 200px;
    grid-gap: 3px;
}

** We have to look into browser inspect and the source code of html elements to understant grid better **
