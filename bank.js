console.log(localStorage.getItem("actno"));
class Bank {

    static details() {
        var userdata = {
            1000: { accno: 1000, password: "userone", balance: 5000 },
            1001: { accno: 1001, password: "usertwo", balance: 5000 },
            1002: { accno: 1002, password: "userthree", balance: 5000 }
        }
        return userdata
    }


    static authenticate(accno, password) {
        //alert(accno)

        var dataset = Bank.details()

        if (accno in dataset) {
            //alert("valid account")}
            if (password == dataset[accno]["password"]) {
                //alert(susessful)
                return 1

            }
            else {
                //alert("inavaid pwd")
                return 0
            }

        }
        else {
            //alert("invalid account")
            return -1
        }
    }

    static setStorage(actno,pswd){
        let obj={     //user objt
            actno:actno,
            pswd:pswd
        }
        // localStorage.setItem("actno",actno)
        // localStorage.setItem("pswd",pswd)
        
        
        //data pointing to objt
        localStorage.setItem("data",JSON.stringify(obj))


    }

    static login() {

        var accno = document.querySelector("#acno").value
        var password = document.querySelector("#pwd").value

        var user = Bank.authenticate(accno, password)
        alert(user)

        if (user == 0) {
            alert("invalid password")
        }
        else if (user == 1) {
            alert("login sucess")
            Bank.setStorage(accno,password)
            window.location.href = "home.html"
            
        }
        else if (user == -1) {
            alert("invalid account")
        }
    }


    static withdraw() {
        var data = Bank.details()
      
        var accno = document.querySelector("#acno").value
        var password = document.querySelector("#pwd").value
        var amt = document.querySelector("#amt").value
        var user = Bank.authenticate(accno, password)
        if (user == 0) {
            alert("invalid password")
        }
        else if (user == 1) {
            if (amt>data[accno]["balance"]) {
                alert("low balance")
            }
            else {
                data[accno]["balance"]=data[accno]["balance"]-amt
                alert("Amount is withdrwan and available balance : "+data[accno]["balance"])
            }
        }
        else if (user == -1) {
                alert("invalid account")
            }
        }

 static deposit() {
        var data = Bank.details()
        var accno = document.querySelector("#acno").value
        var password = document.querySelector("#pwd").value
        var amt = document.querySelector("#amt").value
        

        var user = Bank.authenticate(accno, password)
        if (user == 0) {
            alert("invalid password")
        }


        else if (user == 1) {
            data[accno]["balance"]= data[accno]["balance"]+amt
            alert( amt+ "is added to your account")

        }
        else if (user == -1) {
            alert("invalid account")
        }

    }



}



