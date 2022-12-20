function calbmi() {
    var height = 180;
    var weight = 80;

    console.log(height)



    return weight / (height / 100) ** 2;
}

function logN(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }

    document.getElementById("header").style.fontSize = n + "px";

    alert(calbmi());

    /* 
    var name = "this is name";
    var gbp = 4.00;
    var age = 25; 
    */

    var user1 = { name: "Mario", gpa: 3.55, age: 59 }
    console.log("GPA" + user1.gpa);

    var userlist = [
        { name: "Mario ", gpa: 3.55, age: 59 },
        { name: "A ", gpa: 3.45, age: 58 },
        { name: "B ", gpa: 3.60, age: 55 },
        { name: "C ", gpa: 3.65, age: 53 },
    ];

    /*
    document.getElementById("users").innerHTML = user1.name;
    document.getElementById("users").innerHTML = userlist[1].name;
    */
    for (var i = 0; i <= userlist.length; i++) {
        document.getElementById("users").innerHTML
            += (i + 1) + ": " + userlist[i].name;
    }


}


