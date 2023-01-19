/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(f_degree){
    return (f_degree - 32) * (5/9)
}

console.log(toCelcius(32));
console.log(toCelcius(212));
console.log(toCelcius(50));


/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class WizardUser{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.spells = []
    }

    changePassword(old_password, new_password){
        if (old_password === this.password){
            this.password = new_password;
            console.log(`${this.username}'s password has been changed to ${this.password}`)
        } else (console.log('Sorry, this password is incorrect. Please try again.'));
    };

    learnNewSpell(spell_type){
        this.spells.push(spell_type)
        console.log(`Congrats! ${this.username} has just learned the ${spell_type} spell.`)
    }

    getSorted(new_house){
        this.house = new_house
        console.log(`${this.username} has been sorted into ${this.house}`)
    }
};

let ronald = new WizardUser('ronweasley', 'gryffindorkeeper');
console.log(ronald);

let harry = new WizardUser('harrypotter', 'gryffindorseeker');
console.log(harry);

ronald.changePassword('gryffindorkeeper', 'chessmaster');
harry.changePassword('gryffinborseeker', 'thechosenone');
harry.changePassword('gryffindorseeker', 'thechosenone');

ronald.learnNewSpell('levitation');
ronald.learnNewSpell('unlocking');

harry.learnNewSpell('disarming');
harry.learnNewSpell('summoning');
harry.learnNewSpell('patronus');

ronald.getSorted('gryffindor');
harry.getSorted('gryffindor');

console.log(ronald);
console.log(harry);

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []

*/

function squareNegatives(myArray){
    let new_list = []
    for(let num of myArray){
        if(num < 0){
            new_list.push(num**2)
        };
    };
    return new_list
};

console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]))
console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
console.log(squareNegatives([2, 4, 6, 8, 10]))

// ====================================================


function check_friend(friends){
  friend_list = []
  for(let friend of friends){
    if(friend.length === 4){
      friend_list.push(friend);
    };
  };
  return friend_list;
};

console.log(check_friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))