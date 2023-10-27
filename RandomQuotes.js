class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            randomQuoteIndex : Math.floor(Math.random()*21)
        };
        //binding functions
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            randomQuoteIndex: Math.floor(Math.random()*21),
        });
    }

    render(){
        const quotes = [
            ["Me gusta cuando callas, porque estas como ausente.", "Pablo Neruda"],
            ["Do you know wherein lies the sin? It wasn't in partaking of the fruit of the tree.\n\n\
            Do you know wherein lies the sin? It wasn't lending an ear to the serpent's enticements.\n\n\
            Do you still not know wherein lies the sin? There lies your sin.", "Ryukishi07, Higurashi No Naku Koro Ni"],
            ["Today, a tiny pleasant thing happened.\n\n\
            When I opened a locker, I found a pin inside my shoe.\n\n\
            Even though there are 50 people in our class, someone chose me.\n\n\
            It's proof, that there is someone who thinks about me more than about anyone else.\n\n\
            I want to tell everyone about that tiny happiness.\n\n\
            That's why I put a pin inside everyone else's shoes too.","Ryukishi07, Higurashi No Naku Koro Ni"],
            ["What is it that you want to see?\n\
            I shall show it to you.\n\n\
            What is it that you want to hear?\n\
            I shall tell you about it.\n\n\
            But, please don't expect anything.\n\
            For you who close your eyes and ears, surely, it is meaningless.","Ryukishi07, Higurashi No Naku Koro Ni"],
            ["It is not insult from another that causes you pain. It is the part of your mind that agrees with the insult. Agree only with the truth about you, and you are free.","Alan Cohen"],
            ["Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.", "Will Ferrell"],
            ["Insomnia sharpens your math skills because you spend all night calculating how much sleep you'll get if you're able to fall asleep right now.", "Anonymous"],
            ["I haven't spoken to my wife in years. I didn't want to interrupt her.", "Rodney Dangerfield"],
            ["I saw a study that said speaking in front of a crowd is considered the number one fear of the average person. Number two was death. This means to the average person, if you have to be at a funeral, you would rather be in the casket than doing the eulogy.", "Jerry Seinfeld"],
            ["I never forget a face—but in your case, I'll be glad to make an exception.", "Groucho Marx"],
            ["To call you stupid would be an insult to stupid people!", "Wanda (Jamie Lee Curtis), A Fish Called Wanda"],
            ["If I wanted to kill myself I would climb your ego and jump to your IQ.", "Anonymous"],
            ["I'm actually not funny. I'm just mean and people think I'm joking.", "Anonymous"],
            ["Estas viva!?\n Pensaba que te había destruido esta mañana tirando de la cadena.", "Me"],
            ["Mi habitación es un universo en miniatura, tiene tendencia al desorden", "Me"],
            ["La verdad duele, pero verte a ti cada día aun más.", "Me"],
            ["Next time I see you, remind me not to talk to you.", "Groucho Marx"],
            ["The trouble with her is that she lacks the power of conversation but not the power of speech.", "George Bernard Shaw"],
            ["Only the paranoid survive.", "Andy Grove"],
            ["The secret of getting ahead is getting started.", "Mark Twain"],
            ["We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes―understanding that failure is not the opposite of success, it's part of success", "Arianna Huffington"]
        ];
        const quote = quotes[this.state.randomQuoteIndex];
        return(<div style={{padding: "20px 160px", margin: "auto", width: "50%", fontFamily: "Verdana, sans-serif", backgroundColor: "white", borderRadius: "9px"}}>
                <h2 id="text" style={{textAlign: "center", whiteSpace: "pre-line"}}>"{quote[0]}"</h2>
                <h4 id="author" style={{textAlign: "right", marginRight: "40px"}}>-{quote[1]}</h4>
                <button id="new-quote" onClick={this.handleClick} style={{float: "right", display: "inline-block", height: "50px", backgroundColor: "black", color: "white", border: "0", marginRight: "40px", fontWeight: "bold"}}>Another quote</button><a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" style={{float: "right",display: "inline-block", marginRight:"20px"}}><img src="https://graffica.ams3.digitaloceanspaces.com/2023/07/rQYXqS5v-F1ySdm9WYAIbjHo-1024x1024.jpeg" alt ="X logo" width="50px" /></a>
                <br />
                <br />
                <br />
                <br />
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("quote-box"));
