let score=JSON.parse(localStorage.getItem('score'));
            if (score===null){
                score={
                    wins:0,
                    losses:0,
                    ties:0
                }
            };

            updatescore();

            // We are using localstorage.getitem() to get the score out of the localstorage
            // Here since in local storage the values are stored as JSON file(Where the values are string).To convert the json to js format we use JSON.parse()

            let isautoplay=false;
            let intervalid;

            function autoplay(){
                if (!isautoplay){
                    intervalid=setInterval(function () {
                        const playermove=rando();
                        play(playermove);
                    },1000)
                    isautoplay=true;
                }else{
                    clearInterval(intervalid);
                    isautoplay=false;
                }                
            }

            function play(playerMove){
                const computerMove=rando();

                let res='';

                if (playerMove==='rock'){
                    if(computerMove==='rock'){
                        res='Tie'
                    }
                    else if(computerMove==='paper'){
                        res='You Lose'
                    }
                    else if(computerMove==='scissors'){
                        res='You Win'
                    }
                }
                
                else if(playerMove==='paper'){
                    if(computerMove==='rock'){
                        res='You Win'
                    }
                    else if(computerMove==='paper'){
                        res='Tie'
                    }
                    else if(computerMove==='scissors'){
                        res='You Lose'
                    }
                }

                else if(playerMove==='scissors'){
                    if(computerMove==='rock'){
                    res='You Win'
                    }
                    else if(computerMove==='paper'){
                        res='Tie'
                    }
                    else if(computerMove==='scissors'){
                        res='You Lose'
                    }
                }

                if (res==='You Win'){
                    score.wins+=1;
                }
                else if(res==='You Lose'){
                    score.losses+=1
                }
                else if(res==='Tie'){
                    score.ties+=1
                }
                // Here after we update the score we store the score in local storage in json format
                
                // To store value in local storage we should use localstorage.setitem
                // Local storage only accrept the value as string.Thats why we are using JSON.stringfy for score
                localStorage.setItem('score',JSON.stringify(score));

                updatescore();

                document.querySelector('.js-result').innerHTML=res;

                document.querySelector('.js-move')
                    .innerHTML=`You
                <img src="/JS PROJ/${playerMove}stone.jpeg" class="move-icon"/>
                <img src="/JS PROJ/${computerMove}stone.jpeg" class="move-icon"/> computer`;
                
            };
                        
            function updatescore(){
                document.querySelector('.js-score').innerHTML=`wins:${score.wins} , looses:${score.losses} , ties:${score.ties}`;
            };

            function rando(){
                let computerMove='';
                const random=Math.random();

                if (random>=0 && random<1/3){
                    computerMove='rock';
                }
                else if(random>=1/3 && random<2/3){
                    computerMove='paper'
                }
                else if(random>=2/3 && random<1){
                    computerMove='scissors'
                }
                return computerMove;
            }