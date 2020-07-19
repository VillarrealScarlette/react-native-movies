import React, {Component} from 'react';
import Video from 'react-native-video';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import ScreensPlayerLayout from '../../screens/player/Layout';
import ControlLayout from '../../screens/player/ControlLayout';
import PlayPause from './PlayPause';
import FullScreen from './Fullscreen';
import CurrentTime from './CurrentTime';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = () => {
    this.setState({
      loading: false,
    });
  };
  playPause = () => {
    this.setState({paused: !this.state.paused});
  };
  pressed = () => {
    this.player.presentFullscreenPlayer();
  };
  currentTime = () => {
    this.player.onProgress({currentTime});
  };
  render() {
    return (
      <ScreensPlayerLayout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            }}
            ref={(ref) => {
              this.player = ref;
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="#ffffff" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <Text>progress bar</Text>
            <CurrentTime time={this.currentTime} />
            <FullScreen onPress={this.pressed} />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Player;
