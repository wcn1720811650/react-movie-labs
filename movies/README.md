# Assignment 1 - ReactJS app.

Name: Zixin Wang
Student ID: 20109119

## Overview.

This repository contains a lot of page such as Home, favourite, upcoming, nowplaying, popular, trending today/this week, details of mivie, movie review, credits introduction pages and combinedCredits page. Also there are some featuresm, for example we can filter the movie by name, genre and release date. Also back to top feature is added. We can also learn about the actor from a movie and learn a movie from an actor. We will recommend movies to you by a movie. Finally, we can learn about the combined credits from a actor.

### Features.
 
+ credits
+ Back to top feature
+ Trending choose day or week
+ sort by different requirement
+ filter by releaseDate
+ pagination features

## Setup requirements.

You need to enter the movies folder in the terminal and run the npm install command to install the required packages. After the installation is complete, you can enter the npm run start command to run my project.

## API endpoints.

+ nowplaying movies - /movies/nowplaying
+ popular movies - /movies/popular
+ treding today/this week movies - /trending/:timeWindow
+ movie recommendations - /recommendation/:id
+ credits introduction - /credits/:id
+ person combined credits - /person/:id/combined_credits

## Routing.

+ /movies/nowplaying - display all nowplaying movies
+ /movies/popular - display all popular movies 
+ /trending/:timeWindow - display trending today/this week movies
+ /recommendations/:id - display trending today movies
+ /credits/:id - display credits of the movie
+ /person/:id/combined_credits - display combined credits of the person

## Independent learning (If relevant).

Through this project, I found that the writing methods of APIs are roughly the same. Except for specific dynamic parameters, other things basically do not need to be modified. And in previous experiments, many pages have been written for us. I only need to modify the parameters passed to the component to complete part of the page content. Secondly, tmdb gave me many APIs to choose from, and told me what the API is used for, what parameters are required, and what type of request it is. It also gave me a sample URL, which made it very convenient for me to add the content I needed. In the function of returning to the top, I referred to the tips in the article https://www.delftstack.com/zh/howto/react/scroll-to-top-in-react/#google_vignette, which allowed me to easily implement this function. I learned the importance of components for development. From https://v4.mui.com/zh/components/menus/, I learned how to implement the drop-down box function. At the same time, I also used the various icons provided by umi to make my project look more exquisite. I learn how to sort form https://blog.csdn.net/qq_46124502/article/details/106423931 which is a famous learning communities in China.