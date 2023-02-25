# Hack The North - Front End challenge By Danny Yang

The project was made in dedication to HTN application in 2023 Fall semster and
made with love <3

## Tools used 
React.js
Node.js
Javascripted
HTMl
CSS

## Problems

### Using \<Routes/\> 
Problem: My route wasnt working properly<br/>
Solution: add <BrowserRouter> to contain Routes (Reference: https://github.com/Ri-Hong)<br/>

Problem: My aray wasn't receiving the right ID after i hosted my website on github
![image](https://user-images.githubusercontent.com/108316903/221302221-6df31af5-4b23-4052-a6fb-c740ed5f5d11.png)<br/>
Solution: It was because github added an extention to the original url link https://dan-the-man639.github.io/*Danny-HTN*/ID
It resulted my program to take in Danny-HTN as the ID
To fix this i change the path in my routes from path='/' to path='Danny-HTN/'<br/>

### Integration
Problem: I coulden't pass information between child modulus with useState<br/>
Solution: Had to use lifting technics by creating a Handler() in the parent function (Reference: Academind Discord server)<br/>



