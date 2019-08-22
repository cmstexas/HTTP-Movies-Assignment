import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialValues = {
    title: "", 
    director: "",
    metascore: "", 
    stars: []
}

const MovieForm = props => {
  const [movieUpdate, setMovieUpdate] = useState(initialValues);

    useEffect(() => {
        axios 
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(res => setMovieUpdate(res.data))
        .catch(error => console.log(error))
    }, [props.match.params.id])

const handleChange = event => {
   setMovieUpdate({
      ...movieUpdate,
      [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
        .put(`http://localhost:5000/api/movies/${movieUpdate.id}`, movieUpdate)
        .then(res => {
            setMovieUpdate(initialValues)
            props.history.push(`/movies/${props.match.params.id}`)
        })
        .catch(error => console.log(error))
    }

  return (
    <div>
        <h1>Movie Updates</h1>
        <form onSubmit={handleSubmit}>
            <input  type='text'
                    name="title"
                    placeholder="Title"
                    value={movieUpdate.title}
                    onChange={handleChange} />
             <input  type='text'
                    name="director"
                    placeholder="director"
                    value={movieUpdate.director}
                    onChange={handleChange} />
            <input  type='number'
                    name="metscore"
                    placeholder="metascore"
                    value={movieUpdate.metascore}
                    onChange={handleChange} />
             <input  type='text'
                    name="stars"
                    placeholder="stars"
                    value={movieUpdate.stars}
                    onChange={handleChange} />
            <button type="submit">Update Movie</button>
        </form>
    </div>
  );
};

export default MovieForm;




// old Henry auth form code


// import React, {useState} from 'react';

// const FriendForm = ({ submitFriend, initialValues }) => {
//   const [friend, setFriend] = useState(initialValues || {name: "", email: "", age: ""});
//   const handleChange = event => setFriend({...friend, [event.target.name]: event.target.value});
//   const handleSubmit = event => {
//     event.preventDefault();
//     submitFriend(friend);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name"
//              placeholder="name"
//              value={friend.name}
//              onChange={handleChange} />
//       <input name="email"
//              placeholder="email"
//              value={friend.email}
//              onChange={handleChange} />
//       <input name="age"
//              placeholder="age"
//              value={friend.age}
//              onChange={handleChange} />
//       <button type="submit">Add Friend</button>
//     </form>
//   );
// };

// export default FriendForm;