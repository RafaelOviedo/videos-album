## To build up the project
```
-Clone this repository.
-Step into the folder you cloned it.
-Run 'npm install'.
-Once the dependencies have been installed,
run 'npm run serve'.
-Go to http://localhost:8080/

OR you can go to this deployed link:
```
https://videos-album.vercel.app/

## As requested
```
In the home page, you have an input, where you can paste a YouTube link,
and then add it to the list displayed below. 

If you exceed 6 videos you can go to the next 'page' with the arrow.
```
![home](./exampleImages/home1.jpg)
```
If you click in the thumbnail of the video (not the X), you will open a modal,
which will display the infotmation of the video such Title and Description, and
if you click in the thumbnail again you will be redirected to the internal reproducer.
```
![videoModal](./exampleImages/videoModal.jpg)
```
In the reproducer you can watch the video and go back to the previous modal.
```
![reproducer](./exampleImages/reproducer.jpg)
```
In the video listing, if you click the X button in the upper right arrow on the
thumbnail, you will open the delete modal, with two options, 'cancel' (which will
return you back), or delete, which will delete that video from the Dynamo Database
and you will no longer see that video in the list.
```
![deleteModal](./exampleImages/deleteModal.jpg)