//-->>Function Decleration

//Function without parameter
function write( ){
    console.log("my 1st function");
}

write();// Calling a function

//Function with parameter
// NOTE: In JAVA functions belongs to a class or interface but in javascript they are independent.

function write1(fname,age){
    console.log(`name: ${fname}, age ${age}`);

}

write1("adam",22);
write1("John",25);