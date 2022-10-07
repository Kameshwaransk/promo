import React, { Component } from 'react'

export default class Promo extends Component {
  constructor() {
    super();
    this.state = {
      promoCode: null,
      price: 1500,
      withPromoCode: 750,
      isPromoCodeTrue: false,
      promoCodes: ['abc', 'bcd', 'cde', 'def']
    }
  }
  handlePromoCode(value) {
    this.setState({ promoCode: value })
  }
  handleApplyPromoCode() {
    this.state.promoCodes.includes(this.state.promoCode) ? this.setState(({ isPromoCodeTrue: true })) : this.setState(({ isPromoCodeTrue: false }))
  }
  render() {
    return (
      <div className="con">
        <div>
          <input type="text" placeholder='Enter your Name' className='nametxt' />
        </div>
        <div>
          <input type="email" placeholder='Enter your mail Id' className='email' />
        </div>
        <div>
          <input type="number" placeholder='Enter your mobile number' className='mob-number'/>
        </div>
        <div>
          <input type="text" placeholder='Enter the Promo code' onChange={(e) => this.handlePromoCode(e.target.value)}/>
          <button  onClick={()=>this.handleApplyPromoCode()} >Apply</button>
          {this.state.isPromoCodeTrue ? this.state.withPromoCode : this.state.price}
          {this.state.isPromoCodeTrue&&this.state.isPromoCodeTrue?<p>Your promo code applied</p>:<p>promo code is invalid</p>}
        </div>
      </div>
    )
  }
}
