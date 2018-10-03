        class  Player{
            constructor(name){
                this.name=name;
                this.hand=[];
            }
            draw(deck){
                let drawCard = deck.deal();
                this.hand.push(drawCard);
            }
        }
        class Card{
            constructor(suit, strVal, val){
                this.suit =suit;
                this.strVal =strVal;
                this.val = val;
            }
            show(){
                console.log(`This is a ${this.suit}`);
            }
        }
        class Deck {
            constructor(){
                this.cards =[];
                //create cards
                this.create();
                //shuffle cards
                this.shuffle();
            }
            create(){
                var suits = ["hearts", "diamonds", "spades", "clubs"];
                //const cannot be changed after instantiated
                const stringVals = ["Ace","Two", "Three", "Four", "Five", "Six", "Seven", "Eight","Nine", "Ten", "Jack", "Queens","King"];
                
                for(let i=0; i<suits.length;i++){
                    for(let j=0; j<stringVals.length;j++){
                        var card = new Card(suits[i], stringVals[j],j+1);
                        this.cards.push(card);
                    }
                }
            }
            shuffle(){
                for (let i=0; i<this.cards.length;i++){
                    let temp = this.cards[i];
                    let randNum = Math.floor(Math.random()* this.cards.length);
                    this.cards[i] = this.cards[randNum];
                    this.cards[randNum] = temp;
                }
            }
            reset(){
                this.cards=[];
                this.create();
            }
            deal(){
                return this.cards.pop();
            }
        }

        
        var deck = new Deck();
        //console.log(deck.cards);
        
        //reset deck
        // deck.reset();
        // console.log(deck.cards);

        let Brant = new Player();
        Brant.draw(deck);
        Brant.draw(deck);
        console.log(Brant.hand);

