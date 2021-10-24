import React, {Fragment} from 'react';
import previous from '../images/previous.svg';
import next from '../images/next.svg';

export default class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={actualImg: 0};
    }

    previousImg = ()=>{
        const index= this.state.actualImg;
        index ===0 
        ? this.setState({actualImg: this.props.src.length - 1})
        : this.setState({actualImg: index - 1});
    };

    nextImg = () => {
        const index = this.state.actualImg;
        index === this.props.src.length - 1
          ? this.setState({ actualImg: 0 })
          : this.setState({ actualImg: index + 1 });
      };

      render(){
          let actualImg= this.state.actualImg;
          let {src, alt}= this.props;

          return(
            <div className="gallery-container">
            {src.length > 1 && (
              <Fragment>
                <button className="previous" onClick={this.previousImg}>
                  <img className="previous-icon" src={previous} alt="chevron-left"/>
                </button>
                <button className="next" onClick={this.nextImg}>
                  <img className="next-icon" src={next} alt="chevron-right" />
                </button>
                <span className="counter">
                  {this.state.actualImg + 1} / {src.length}
                </span>
              </Fragment>
            )}
            <img className={'gallery-img'} src={src[actualImg]} alt={`${alt} ${actualImg + 1}`}/>
          </div>
          )
      }
}