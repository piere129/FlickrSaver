# FlickrSaver
FlickrSaver is a web-app allowing Users to import photos from Flickr and save them in a gallery.
This app was created using MongoDB, Node.js, Angular 6 & Express. 

A demo can be found on https://agile-atoll-72180.herokuapp.com/

# Installation

Before installing, make sure you have installed the angular-cli and node.js!

1) git clone this repository and cd into the folder using the command prompt

```
git clone https://github.com/piere129/FlickrSaver.git && cd FlickrSaver
```

2) in the root of the repository: 
```
npm install
touch .env
```

3) open the .env file using a text editor and enter the following values:

```
database: <<enter mongodb link here>>
secret: <<your personal authentication secret, DO NOT SHARE THIS!>>
```

4) run the app:
* in root folder: 
```
npm install
node app.js
```
* in frontend folder: 
```
npm install
ng serve
```
