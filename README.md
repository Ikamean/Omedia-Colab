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
                private : Boolean
            }