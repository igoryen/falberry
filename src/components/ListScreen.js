import * as React from 'react';
import { Button, View } from 'react-native';
import axios from 'axios';

export default class ListScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            easy: [],
            medium: [],
            hard: [],
        }
    }

    componentDidMount() {
        axios.get(`https://opentdb.com/api.php?amount=10`)
            .then(res => {
                const items = res.data.results;
                this.setState({ items });
            })
    }

    render() {

        this.state.items.map(item => {
            switch (item.difficulty) {
                case 'easy':
                    this.state.easy.push(item)
                    break;
                case 'medium':
                    this.state.medium.push(item)
                    break;
                case 'hard':
                    this.state.hard.push(item)
                    break;
                default:
                    break;
            }
        })

        let easyQuestions = []
        if (this.state.easy.length > 0) {
            let idx = 0;
            easyQuestions = this.state.easy.map(item => {
                return (
                    <Button
                        key={idx++}
                        title={item.category}
                        onPress={() => {
                            this.props.navigation.navigate('Question', {
                                question: item.question,
                                type: item.type,
                                correct_answer: item.correct_answer,
                                incorrect_answers: item.incorrect_answers
                            })
                        }}
                    />
                )
            })
        }

        let mediumQuestions = []
        if (this.state.medium.length > 0) {
            let idx = 0;
            mediumQuestions = this.state.medium.map(item => {
                return (
                    <Button
                        key={idx++}
                        title={item.category}
                        onPress={() => {
                            this.props.navigation.navigate('Question', {
                                question: item.question,
                                type: item.type,
                                correct_answer: item.correct_answer,
                                incorrect_answers: item.incorrect_answers
                            })
                        }}
                    />
                )
            })
        }

        let hardQuestions = []
        if (this.state.hard.length > 0) {
            let idx = 0;
            hardQuestions = this.state.hard.map(item => {
                return (
                    <Button
                        key={idx++}
                        title={item.category}
                        onPress={() => {
                            this.props.navigation.navigate('Question', {
                                question: item.question,
                                type: item.type,
                                correct_answer: item.correct_answer,
                                incorrect_answers: item.incorrect_answers
                            })
                        }}
                    />
                )
            })
        }


        return (
            <View>
                <div className="container">
                    <div className="box">
                        {easyQuestions.length > 0 &&
                            <div className="questions questions--easy">
                                <h1>Easy Questions</h1>
                                <div className="questions-block">{easyQuestions}</div>
                            </div>
                        }

                        {mediumQuestions.length > 0 &&
                            <div className="questions questions--medium">
                                <h1>Medium Questions</h1>
                                <div className="questions-block">{mediumQuestions}</div>
                            </div>
                        }

                        {hardQuestions.length > 0 &&
                            <div className="questions questions--hard">
                                <h1>Hard Questions</h1>
                                <div className="questions-block">{hardQuestions}</div>
                            </div>
                        }                        
                    </div>
                </div>
            </View>

        )
    }
}
