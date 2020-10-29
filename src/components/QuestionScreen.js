import * as React from 'react';
export default class QuestionScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            type: this.props.route.params.type,
            question: this.props.route.params.question,
            incorrect_answers: this.props.route.params.incorrect_answers,
            correct_answer: this.props.route.params.correct_answer,
            colorClass: "",
            options: this.shuffle((this.props.route.params.incorrect_answers).concat(this.props.route.params.correct_answer)),
            activeOption: ''
        }
    }

    handleClick = (event) => {
        if (event.target.checked) {
            this.setState({
                activeOption: event.target.value
            })
            event.target.value === this.state.correct_answer
                ? this.setState({ colorClass: "correct" })
                : this.setState({ colorClass: "wrong" })

        }
    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    render() {
        let idx = 0
        let answers = ''

        answers = this.state.options.map(opt => {
            return (
                <label key={idx++} className={(this.state.activeOption === opt) ? this.state.colorClass : ''}>
                    <input
                        type="radio"
                        name="mult"
                        value={opt}
                        onChange={(event) => this.handleClick(event)}
                    />{opt.replace(/&apos;/g, "'")
                        .replace(/&quot;/g, '"')
                        .replace(/&gt;/g, '>')
                        .replace(/&lt;/g, '<')
                        .replace(/&amp;/g, '&')
                        .replace(/&#039;/g, '’')} </label>)
        })

        return (
            <div className="answer-block">
                <div className="answer-block--wrapper">
                    <div className="answer-block--question">{this.state.question.replace(/&apos;/g, "'")
                        .replace(/&quot;/g, '"')
                        .replace(/&gt;/g, '>')
                        .replace(/&lt;/g, '<')
                        .replace(/&amp;/g, '&')
                        .replace(/&#039;/g, '’')}</div>
                    <div className="answer-block--answers">{answers}</div>
                </div>
            </div>
        )
    }
}
