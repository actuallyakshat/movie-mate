import { Component } from "react";
import "./chatList.css"
export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="w-[45px] h-[45px] rounded-[50%] mr-[20px] relative">
        <div className="overflow-hidden rounded-[50%] w-full h-full">
          <img src={this.props.image} alt="#" />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}
Avatar.propTypes = null;
