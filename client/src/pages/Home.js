import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { fetchLikedPhotos, deleteSavedPhoto } from '../actions';
import { BackTop, Button, Icon } from 'antd';
import Spinner from '../components/Spinner';
import Picture from '../components/Picture';

class Home extends Component {
  componentDidMount() {
    this.props.fetchLikedPhotos();
  }

  renderLikedPhotos() {
    const { isFetching, data } = this.props.likedPhotos;
    if (isFetching) {
      return <Spinner />;
    }

    if (data.length === 0) {
      return (
        <div style={{ marginTop: '10em', textAlign: 'center' }}>
          <h3>Welcome, {this.props.auth.userData.username} !</h3>
          <h3>Check out the gallery & save whatever photos you like</h3>
          <h3>Your liked photos will be displayed here</h3>
        </div>
      );
    }

    return data.map((photo, i) => {
      return (
        <div
          style={{ margin: '2em 0 2em 0', width: '25em', height: '30em' }}
          key={i}
        >
          <LazyLoad
            height={'100%'}
            once
          >
            <Picture
              src={photo.url}
              alt={photo.id}
              style={{ width: '100%', height: '100%' }}
            />
          </LazyLoad>
          <Button
            block
            type='danger'
            onClick={() => this.props.deleteSavedPhoto(photo.url)}
          >
            <Icon type='delete' />
          </Button>
        </div>
      );
    });
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        padding: '1em'
      }
    };

    return (
      <div style={styles.container} className='home'>
        {this.renderLikedPhotos()}
        <BackTop className='backtop' />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, likedPhotos }) => {
  return { auth, likedPhotos }
};

export default connect(mapStateToProps, { fetchLikedPhotos, deleteSavedPhoto })(Home);
