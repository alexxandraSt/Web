import React from 'react';
import { images } from '../media/images.json'
import './images.css'
import {PopUp} from './popup'
export class Images extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            imageUrl: '',
            imagesArray: images,
            showModal: false,
            popImageUrl: "",
            isLoading: true
        }
    }
    componentDidMount(){
        this.setState({isLoading: false})
    }
    imageAdder = (e) =>{
        e.preventDefault();
        let imageUrlsArray = this.state.imagesArray;
        imageUrlsArray.push({img: this.state.imageUrl})
        this.setState({
            imagesArray: imageUrlsArray
        })
    } 

    handleLinkChage = (e) =>
    {
        e.preventDefault();
        this.setState(
            {
                imageUrl: e.target.value 
            }
        )
    }

    handlePopUp = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }
    handleDeletion = (index) => 
    {
        let imageUrlsArray = this.state.imagesArray;
        imageUrlsArray = imageUrlsArray.filter( (el, id) =>  id != index  )
        this.setState({
            imagesArray: imageUrlsArray
        })
    } 

  render(){
      let imagesArray = this.state.imagesArray
      const imgs = imagesArray.map( (url, index) => 
      <>
      <img
      className = "singleImage"
      key={index}
      src={url['img']} 
        onClick={() => this.handlePopUp(url['img'])}
      /> 
      <button onClick={ () => this.handleDeletion(index) }>
          delete
      </button>
      </>)
  return (
    this.state.isLoading ? <div class="loader"></div> : 

      <>
    <form onSubmit={this.imageAdder}>
    <input 
    type="text"
    placeholder="Your image url"
    onChange={this.handleLinkChage}
    ></input>
    <button type="Sumbit" 
    className="submitButton">Submit image</button>
  </form>
    <div className="App">
    {imgs}
    {this.state.showModal ? (
        <PopUp 
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopUp}
        />
    ) : null}
    </div>
    </>
  );
}
}

export default Images;
