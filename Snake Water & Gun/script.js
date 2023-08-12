let user = prompt("Enter W, S or G")
let CPUI = Math.floor(Math.random()*3)
let cpu = ['w','s','g'][CPUI]

const match = ((cpu, user)=>{
    if(cpu === user){
        return "Nobody, Matc is tied";
    }
    else if(cpu === "s" && user === "w"){
        return "cpu"
    }
    else if(cpu === "s" && user === "g"){
        return "user"
    }
    else if(cpu === "w" && user === "s"){
        return "user"
    }
    else if(cpu === "w" && user === "g"){
        return "user"
    }
    else if(cpu === "g" && user === "s"){
        return "cpu"
    }
    else if(cpu === "g" && user === "w"){
        return "user"
    }
})
let result = match(cpu,user)
console.log("The winner is "+ result)
document.write(`CPU: ${cpu} And User: ${user}\nThe winner is  ${result}`)