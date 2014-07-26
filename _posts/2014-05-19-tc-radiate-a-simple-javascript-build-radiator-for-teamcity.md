---
layout: post
title: tc-radiate - A Simple JavaScript Build Radiator for TeamCity
---
'tc-radiate' is a build radiator that is designed to be a highly visible but fun meme-related way to view the current status of builds. Originally it was built just to satisfy my own selfish purposes of learning KnockoutJS but my design goals were to end up with something that was: highly visible, light weight (minimal server code), fun and responsive on larger screens.

## Installation
To get up and running with tc-radiate you can pull the code down from <a title="tc-radiate on github" href="https://github.com/TheNorthCode/tc-radiate" target="_blank">github</a> and host it from a server of your choice e.g. IIS. You will need to configure a proxy so that the JavaScript can do a cross-domain request to the JSON web service content from Team City, there is a simple ASP.NET proxy included in the source but you could always create a proxy in another platform, so long as it is hosted from the same URL as the main index.html in tc-radiate.

For more info on configuring and to download the source, visit the project on github: [tc-radiate on github](https://github.com/TheNorthCode/tc-radiate "https://github.com/TheNorthCode/tc-radiate")

![tc-radiate screenshot](/img/s2.png "tc-radiate screenshot")
