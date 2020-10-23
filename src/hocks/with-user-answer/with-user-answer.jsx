import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.questions.answers.length).fill(false)
      };

      this.onChooseMelody = this._onChooseMelody.bind(this);
      this.onSubmitForm = this._onSubmitForm.bind(this);
    }

    _onChooseMelody(index, target) {
      const stateArr = this.state.answers.slice(0);
      stateArr[index] = target;

      this.setState({answers: stateArr});
    }

    _onSubmitForm() {
      this.props.onAnswer(this.props.questions, this.state.answers);
    }

    render() {
      return <Component
        {...this.props}
        // userAnswers={userAnswers}
        onSubmitForm={this.onSubmitForm}
        onChooseMelody={this.onChooseMelody}
      />;
    }
  }

  WithUserAnswer.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    questions: PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })).isRequired,
      correctGenre: PropTypes.string.isRequired,
      gameType: PropTypes.string.isRequired
    })
  };

  return WithUserAnswer;
};

export default withUserAnswer;
