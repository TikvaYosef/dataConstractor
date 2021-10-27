// רקורסיה

// let array = [];
// function numberFromUser() {
//     let userNumber = Number(prompt("pick a number"))


//     if (userNumber) {
//         array.push(userNumber);
//         if (array.length < 3) {
//             numberFromUser();
//         }

//     }
//     return array;
// }
// let start = numberFromUser()
// console.log(start)

// =============================================================================

// מבני נתונים עץ


// const famillyTree = {
//     name: "generation1",
//     child: {
//         name: "generation2",
//         child: {
//             name: "generation3",
//             child: {
//                 name: "generation4",
//                 child: {
//                     name: "generation5",
//                 }
//             }
//         }
//     }
// }

// function printFamillyTree(tree) {


//         console.log(tree.name)
//        if(tree.child){ printFamillyTree(tree.child)}


// }
// printFamillyTree(famillyTree)



const famillyTree = {
    name: "generation1",
    children: [{
        name: "generation2",
        children: [{
            name: "generation3",
            children: [{
                name: "generation4",
                children: [{
                    name: "generation5",
                }]
            },
            {
                name: "generation6",

            },
            {
                name: "generation7"
            }
            ]
        }]
    }]
}


function printArrayOfFamilly(tree) {

    // מדפיסים את השמות 
    console.log(tree.name)
    // עושים תנאי של אם יש לו ילדים 
    if (tree.children) {
        // ואז לולאה שתרוץ על כל המערכים 
        for (const item of tree.children) {
            // ומפעילים את הפונקציה של ההדפסה עד שהוא לא מוצא ילדים יותר 
            printArrayOfFamilly(item)
        }
    }

}
printArrayOfFamilly(famillyTree)