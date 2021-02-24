import React, {Fragment} from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                [this.props.emotions].map((emotion, index) => (
                    <Fragment>
                        <tr>
                            <td>sadness</td>
                            <td>{emotion.sadness}</td>
                        </tr>
                        <tr>
                            <td>joy</td>
                            <td>{emotion.joy}</td>
                        </tr>
                        <tr>
                            <td>fear</td>
                            <td>{emotion.fear}</td>
                        </tr>
                        <tr>
                            <td>disgust</td>
                            <td>{emotion.disgust}</td>
                        </tr>
                        <tr>
                            <td>anger</td>
                            <td>{emotion.anger}</td>
                        </tr>
                    </Fragment>
                ))
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
