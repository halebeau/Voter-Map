var createPolitician = function(name){

        var politician = {}; // new blank object!
        politician.name = name; // set name property to the value of the name parameter
        politician.electionResults = null;
        politician.totalVotes = 0;
        
        return politician;
    
    };
    
var beau = createPolitician("Beau Doesitall");
    
var nick = createPolitician("Nick Rocks");
    
beau.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
     
nick.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

beau.electionResults[9] = 1;
nick.electionResults[9] = 28;
 
beau.electionResults[4] = 17;
nick.electionResults[4] = 38;
 
beau.electionResults[43] = 11;
nick.electionResults[43] = 27;
 
console.log(beau.electionResults);
console.log(nick.electionResults);