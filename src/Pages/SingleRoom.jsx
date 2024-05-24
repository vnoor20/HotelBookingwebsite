// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import defaultBcg from "../assets/img/jpeg/room-1.jpeg";
// import Banner from "../Components/Banner/Banner";
// import { RoomContext } from "../Context/Context";
// import StyledHero from "../Components/StyledHero/StyledHero";


// class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slug: this.props.match.params.slug,
//       defaultBcg,
//       fromDate: '',
//       toDate: '',
//       totalCost: 0,
//     };
//   }

//   static contextType = RoomContext;

//   handleFromDateChange = (event) => {
//     this.setState({ fromDate: event.target.value }, this.calculateTotalCost);
//   };

//   handleToDateChange = (event) => {
//     this.setState({ toDate: event.target.value }, this.calculateTotalCost);
//   };

//   calculateTotalCost = () => {
//     const { fromDate, toDate } = this.state;
//     const { price } = this.context.getRoom(this.state.slug);
//     if (fromDate && toDate) {
//       const from = new Date(fromDate);
//       const to = new Date(toDate);
//       const days = (to - from) / (1000 * 60 * 60 * 24);
//       if (days > 0) {
//         this.setState({ totalCost: days * price });
//       } else {
//         this.setState({ totalCost: 0 });
//       }
//     }
//   };

//   handlePaymentNavigation = () => {
//     this.props.history.push('/payment', { totalCost: this.state.totalCost });
//   };

//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);

//     if (!room) {
//       return (
//         <div className="error">
//           <h3>no such room could be found!</h3>
//           <Link to="/rooms" className="btn-primary">
//             back to rooms
//           </Link>
//         </div>
//       );
//     }

//     const {
//       name,
//       description,
//       capacity,
//       size,
//       price,
//       extras,
//       breakfast,
//       pets,
//       images,
//     } = room;

//     const [mainImg, ...defaultImg] = images;

//     return (
//       <>
//         <StyledHero img={mainImg || this.state.defaultBcg}>
//           <Banner title={`${name} room`}>
//             <Link to="/rooms" className="btn-primary">
//               back to rooms
//             </Link>
//           </Banner>
//         </StyledHero>

//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImg.map((item, index) => {
//               return <img key={index} src={item} alt={name} />;
//             })}
//           </div>

//           <div className="single-room-info">
//             <article className="desc">
//               <h3>details:</h3>
//               <p>{description}</p>
//             </article>

//             <article className="info">
//               <h3>information:</h3>
//               <h6>price : ₹{price}</h6>
//               <h6>size : {size} SQFT</h6>
//               <h6>
//                 max capacity :{" "}
//                 {capacity > 1 ? `${capacity} people` : `${capacity} person`}
//               </h6>
//               <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//               <h6>{breakfast && "free breakfast included"}</h6>
//             </article>
//           </div>
//         </section>

//         <section className="room-extras">
//           <h6>extras:</h6>
//           <ul className="extras">
//             {extras.map((item, index) => {
//               return <li key={index}> - {item}</li>;
//             })}
//           </ul>
//         </section>

        

//         <div className="booking-container">
//           <h3>Book Your Stay</h3>
//           <div className="booking-details">
//             <h4>{name}</h4>
//             <p>{description}</p>
//             <p>Price per night: ₹{price}</p>
//           </div>
//           <div className="booking-inputs">
//             <label>
//               From:
//               <input className="booking-date-input" type="date" value={this.state.fromDate} onChange={this.handleFromDateChange} />
//             </label>
//             <label>
//               To:
//               <input className="booking-date-input" type="date" value={this.state.toDate} onChange={this.handleToDateChange} />
//             </label>
//           </div>
//           <div className="totalcostc">

//           {this.state.totalCost > 0 && <h4 className="total-cost">Total Cost: ₹{this.state.totalCost}</h4>}
//           </div>
//           <div className="outerbookbtn">
//           <button onClick={this.handlePaymentNavigation}>
//             <Link to='/payment'>

//             Proceed to Payment
//             </Link>
//           </button>
//         </div>
        
//         </div>
//       </>
//     );
//   }
// }

// export default withRouter(SingleRoom);


import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";


class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      fromDate: '',
      toDate: '',
      totalCost: 0,
      reviews: [
        { id: 1, name: "John Doe", rating: 5, description: "Great room!" },
        { id: 2, name: "Jane Smith", rating: 4, description: "Very comfortable." },
      ],
      newReview: { name: "", rating: 1, description: "" },
    };
  }

  static contextType = RoomContext;

  handleFromDateChange = (event) => {
    this.setState({ fromDate: event.target.value }, this.calculateTotalCost);
  };

  handleToDateChange = (event) => {
    this.setState({ toDate: event.target.value }, this.calculateTotalCost);
  };

  calculateTotalCost = () => {
    const { fromDate, toDate } = this.state;
    const { price } = this.context.getRoom(this.state.slug);
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const days = (to - from) / (1000 * 60 * 60 * 24);
      if (days > 0) {
        this.setState({ totalCost: days * price });
      } else {
        this.setState({ totalCost: 0 });
      }
    }
  };

  handlePaymentNavigation = () => {
    this.props.history.push('/payment', { totalCost: this.state.totalCost });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newReview: {
        ...prevState.newReview,
        [name]: value,
      },
    }));
  };

  handleReviewSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      ...this.state.newReview,
      id: this.state.reviews.length + 1,
    };
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, newReview],
      newReview: { name: "", rating: 1, description: "" },
    }));
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found!</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>information:</h3>
              <h6>price : ₹{price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras:</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>

        

        <div className="booking-container">
          <h3>Book Your Stay</h3>
          <div className="booking-details">
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Price per night: ₹{price}</p>
          </div>
          <div className="booking-inputs">
            <label>
              From:
              <input className="booking-date-input" type="date" value={this.state.fromDate} onChange={this.handleFromDateChange} />
            </label>
            <label>
              To:
              <input className="booking-date-input" type="date" value={this.state.toDate} onChange={this.handleToDateChange} />
            </label>
          </div>
          <div className="totalcostc">
          {this.state.totalCost > 0 && <h4 className="total-cost">Total Cost: ₹{this.state.totalCost}</h4>}
          </div>
          <div className="outerbookbtn">
          <button onClick={this.handlePaymentNavigation}>
            Proceed to Payment
          </button>
        </div>
        </div>

        <section className="reviews-section">
          <h3>Reviews</h3>
          <div className="reviews-list">
            {this.state.reviews.map((review) => (
              <div key={review.id} className="review">
                <h4>{review.name}</h4>
                <p>Rating: {review.rating}/5</p>
                <p>{review.description}</p>
              </div>
            ))}
          </div>

          <div className="review-form">
            <h3>Add a Review</h3>
            <form onSubmit={this.handleReviewSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.newReview.name}
                  onChange={this.handleInputChange}
                  required
                />
              </label>
              <label>
                Rating:
                <select
                  name="rating"
                  value={this.state.newReview.rating}
                  onChange={this.handleInputChange}
                  required
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={this.state.newReview.description}
                  onChange={this.handleInputChange}
                  required
                />
              </label>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(SingleRoom);
