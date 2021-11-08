import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

<<<<<<< HEAD
console.log("user component Loaded")
=======
console.log("User component yüklendi")
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

<<<<<<< HEAD
let user1 = new User(1,"Engin","Demirog","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")  

userService.add(user1)
userService.add(user2)

console.log(userService.list());
console.log(userService.getById(1));


let customer = {id:1,firstName:"Engin"}
customer.lastName = "Demirog"
=======
let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
