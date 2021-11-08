export class BaseLogger{
<<<<<<< HEAD

    log(data){
        console.log("Default Logger" + data)
     }
}

export class ElasticLogger extends BaseLogger{

=======
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
<<<<<<< HEAD

    log(data){
        console.log("Logged to Mongo" + data)
    }
}
=======
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
