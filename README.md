<<<<<<< HEAD
# Omedia-Colab 
### ***See Live Project [Omedia-Colab](https://omedia-colab.herokuapp.com/)***
### **Project Contributors** :rocket:
-       Akaki Ivanishvili
-       Irakli Bidzishvili



### **Project Overwiev**
    Youtube like application, where user can register/login and upload media files (video content).

    All uploaded content are shown on application main page.

    Authorized user is able to delete his/her uploaded media.

    Media can be Public or Private. Private media is only visible to its owner. 

    User can edit media : title | thumbnail | Private/Public visibility.


### **Used Technologies** 
-       MEVN STACK
-       VueJS
-       NodeJs/Express
-       MongoDB/mongoose
-       Mongo-Session
-       Cloudinary API 
-       REDIS 


### To start working 
-       Fork this Repo 
        git clone https://github.com/Ikamean/Omedia-Colab.git

-       Go into Project folder 
        cd Omedia-colab

-       Optional : You can Rename folder for further easy   access  
        mv Omedia-Colab <some simple name> 

-       Create new branch 
        git checkout -b <Your Branch Name>

-       Make some changes

-       Add changes to your new branch  
        git add . 

-       Commit changes  
        git commit -m 'usefull message' 

-       Push your local branch to remote repo 
        git push origin <Your Branch Name> 



### **To run server in development mode**
-       See envSample file for enviromental variables
-       pull this branch
-       npm install
-       npm run dev


### Client side scripts

    Install Dependencies
-      npm install

    Development Mode
-        npm run serve
    Production Build
-        npm run build
    Linting
-       npm run lint
### ***API Routes***
        REQUEST METHOD ->>> PATH
#### AUTH
    
-       POST ->>>  /api/register 
        
        BODY 
            { 
                userName : String,
                password : String
            }

-       POST ->>> /api/login
        
        BODY 
            { 
                userName : String,
                password : String
            }

-       POST ->>> /api/logout

#### USER PROFILE
-       GET ->>> /api/user/me

#### MEDIA 
-       GET ->>> /api/media

-       POST ->>> /api/upload
        
        BODY 
            {
                title : String,
                mediaFile : Binary,
                thumbnail: Binary,
                private : Boolean
            }
            
-       DELETE ->>> /api/media/delete/:id

-       PUT ->>> /api/media/edit/:id
        
        BODY
           {
               title : "new title",
               thumbnail: "new file/ or previous url"
               private: boolean
           }

=======
# colab_front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
>>>>>>> 35793896ec209e7722b0f20d0131f6648278d953
