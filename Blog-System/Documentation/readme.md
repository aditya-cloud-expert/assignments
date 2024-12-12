GET / 
Input - None
output - Blogs of All users

POST /user/signup
Input - {email , password}
Output - {Singned UP successful / Failed}

POST /user/signin
Input - { email , password }
Output - { token on Successful / invalid credentials on failure}

POST /blog/create
Input { title , description , image url }
output { blog created Successful }

PUT /blog/edit
Input {title, description, image url}
output { blog edited successfully }

Delete /blog/delete
Input { title }
output {Blog deleted successfully}

post /comments
input { title , comment}
output {comment successful}