import React, { Component } from 'react'
import { compose, lifecycle, branch, renderComponent } from 'recompose'

const withUserData = lifecycle({
  getInitialState() {
    return { loading: true }
  },
  componentDidMount() {
    fetchData().then( data => {
      this.setState( { loading: false, ...data } )
    });
  }
});

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loader...</div>
  </div>;

const isLoading = ( { loading } ) => {
  return loading
} ;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
)

const UserV1 = enhance(({ name, status }) =>
     <div className="User">{ name }-{ status }</div>
)


// const User = withUserData(({ name, status }) =>
//   !name || !status ?
//      <div className="Spinner">
//        <div className="loader">Loading...</div>
//      </div> :
//      <div className="User">{ name }-{ status }</div>
// )

export default UserV1

const users =
  { name: 'lev', status: 'active' }


function fetchData(){
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve( users )
    }, 3000);
  });
}
