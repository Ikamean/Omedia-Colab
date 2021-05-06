# Omedia-Colab 

### **Project Contributors** :rocket:
    - Akaki Ivanishvili
    - Irakli Bidzishvili


### To start working 
    - Fork this Repo 
        git clone https://github.com/Ikamean/Omedia-Colab.git

    - Go into Project folder 
        cd Omedia-colab

    - Optional : You can Rename folder for further easy access  
        mv Omedia-Colab <some simple name> 

    - Create new branch 
        git checkout -b <Your Branch Name>

    - Make some changes

    - Add changes to your new branch  
        git add . 

    - Commit changes  
        git commit -m 'usefull message' 

    - Push your local branch to remote repo 
        git push origin <Your Branch Name> 

    




### **Project Overwiev**
    test


### **Used Technologies** 
    - MEVN STACK
    - VueJS
    - NodeJs/Express
    - MongoDB/mongoose
    - Mongo-Session
    - Cloudinary API 
    - REDIS 
    
    
    
    


### **To run server in development mode**
-       See envSample file for enviromental variables
-       pull this branch
-       npm install
-       npm run dev


### ***API Routes***
    REQUEST METHOD ->>> PATH
#### AUTH
    
    - POST ->>>  /api/register 
        - BODY 
            { 
                userName : String,
                password : String
            }

    - POST ->>> /api/login
        - BODY 
            { 
                userName : String,
                password : String
            }

    - POST ->>> /api/logout

#### USER PROFILE
    - GET ->>> /api/user/me

#### MEDIA 
    - GET ->>> /api/media

    - POST ->>> /api/upload
            - BODY 
            {
                title : String,
                mediaFile : Binary,
                thumbnail: Binary,
                private : Boolean
            }
            
    - DELETE ->>> /api/media/delete/:id

    - PUT ->>> /api/media/edit/:id
           - BODY
           {
               title : "new title",
               thumbnail: "new file/ or previous url"
               private: boolean
           }
