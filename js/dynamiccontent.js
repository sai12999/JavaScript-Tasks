/*  
    Es6 features used :
    Arrow functions
    Template Strings
    let keyword
*/
var createTag = (nameOfTag, tagAttributes, parentTag, content) =>
                {
                    var tag = document.createElement(nameOfTag);

                    //setting attributes for the tag.

                    if(tagAttributes!=null)
                    for(let attribute in tagAttributes)
                    {
                        tag.setAttribute(attribute, tagAttributes[attribute]);
                    }

                    //setting content of the tag.

                    if(content!=null)
                    {
                        var node = document.createTextNode(content);
                        tag.appendChild(node);
                    }

                    //appending newly created tag to its parent.

                    var parent = document.getElementById(parentTag);
                    parent.appendChild(tag);
                }

//code for creating tag by using createTag().

createTag("header",{"id":"header"},"body",null);
createTag("div",{"class":"logo","id":"logoDiv"} ,"header",`GAME`);
createTag("nav",{"id":"nav"},"header",null);
createTag("a",{"class":"active","href":"#"},"nav",`HOME`);
createTag("div",{"class":"row","id":"rowDiv"},"body",null);
createTag("div",{"id":"column1","class":"column"},"rowDiv",null);
createTag("label",null,"column1",`Player1 Score:`);
createTag("input",{"type":"text","id":"p1score","disabled":"disabled"},"column1",null);
createTag("button",{"id":"p1play","onclick": "giveScore('p1play')"},"column1",`PLAY`);
createTag("div",{"id":"column2","class":"column"},"rowDiv",null);
createTag("label",null,"column2",`Player2 Score:`);
createTag("input",{"type":"text","id":"p2score","disabled":"disabled"},"column2",null);
createTag("button",{"id":"p2play","onclick": "giveScore('p2play')"},"column2",`PLAY`);
createTag("div",{"id":"column3","class":"column"},"rowDiv",null);
createTag("label",null,"column3",`Dice Value:`);
createTag("input",{"type":"text","id":"result","disabled":"disabled"},"column3",null);
createTag("div",{"id":"final_result"},"body",null);
createTag("div",{"id":"startAgainDiv","align":"center"},"body",null);
createTag("button",{"id":"start_again","onclick": "resetStorage()"},"startAgainDiv",`Start Again!`);
createTag("article",{"id":"article"},"body",null);
createTag("h1",null,"article",`GAME RULES`);
createTag("ol",{"id":"ol"},"article",null);
createTag("li",null,"ol",`Click on play button to roll the dice.`);
createTag("li",null,"ol",`Dice will give a number between 1-6.`);
createTag("li",null,"ol",`Both the players will be given 5 chances to roll the dice.`);
createTag("li",null,"ol",`The result will be obtained after usage of 5 chances by both the players.`);
createTag("li",null,"ol",`Player with maximum score after 5 chances will be declared as winner.If the points tie then result is a draw.`);
createTag("li",null,"ol",`Players can click start again button to start the game from the beggining at any time.`);
createTag("li",null,"ol",`Players can roll the dice in any order, but will have only 5 chances`);
createTag("footer",{"id":"footer"},"body",null);
createTag("p",{"class":"footer","id":"footerPara"},"footer",`Gamers Den,
                                        I know you love PUBG but please try my game too!`);