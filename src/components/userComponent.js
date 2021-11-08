import { BaseLogger } from "../crossCuttingConcens/logging/logger.js"
import User from "../models/user.js"
import { UserService } from "../services/userService.js"

//Ekran olarak düşünelim(Ürün Detayı gibi)
console.log("User Component Yüklendi")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)


let user1 = new User(1, "Mert", "AKSU", "Giresun")
let user2 = new User(1, "Engin", "DEMİROĞ", "Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())

userService.getById()


let customer = { id: 1, firstName: "Engin" }

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)