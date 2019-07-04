import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import './album.styl'
import Scroll from '../../common/scroll/Scroll';
import * as AlbumModel from '../../model/album';
import * as SongModel from '../../model/song';
import Header from '../../common/header/Header'

import {getAlbuminfo} from '../../api/config'
class Album extends Component {
    state = { show:false,
    songs:[],
album:{},
loading:true
 }
    componentDidMount(){
        const id  = this.props.match.params.id
        getAlbuminfo(id).then(res=>{
            let album = AlbumModel.createAlbumBydetail(res.data);
            album.desc = res.data.desc;
            let songList = res.data.list;
            let songs = [];
            console.log(res)
            songList.forEach(item=>{
                let song = SongModel.createSong(item);
                songs.push(song)
            })
             this.setState({
                 loading:false,
                 album:album,
                 songs
             })
        })


        this.setState({
            show:true
        })
    }
    selectSong=(song)=>{
        return ()=>{
            this.props.changeCurrentSongs(song)
        }
    }
    render() { 
        const {album} = this.state;
        const songsNode = this.state.songs.map((song)=>{
            return (
                <div className="song" key={song.id} onClick = {this.selectSong(song)}>
                    <div className="song-name">
                        {song.name}
                    </div>
                    <div className="song-singer">
                        {song.singer}
                    </div>
                </div>
            )
        })
        return ( 
            <CSSTransition in ={this.state.show} timeout ={300} classNames = 'translate'>
            <div className="music-album">
                <Header title = {album.name} ref='header'/>
                <div style ={{position:'relative'}}>
                <div ref="albumBg" className="album-img" style={{backgroundImage:`url(${album.img})`}}>
                    <div className="filter">
                        {/* <span>播放</span> */}
                    </div>
                </div>
                <div className="album-img fixed" ref= "albumFixedBg">
                    <div className="filter"></div></div>
                    <div className="play-wrapper" ref="playButtonWrapper">
                        <div className="play-button">
                            <i className="icon-play"></i>
                            <span>播放全部</span>
                            </div>
                    
                </div>
                </div>
                <div className="album-container">
                    <div className="album-scroll">
                    <Scroll onScroll = {()=>{}}>
                        <div className="album-wrapper">
                            <div className="song-count">专辑 共{songsNode.length}首</div>
                            <div className="song-list">
                                {songsNode}
                            </div>
                        </div>
                        <div className="album-info" style={album.desc ? {} : { display: "none" }}>
                    <h1 className="album-title">专辑简介</h1>
                    <div className="album-desc">
                      {album.desc}
                    </div>
                  </div>
                    </Scroll>
                    </div>
                </div>
            </div> 
            </CSSTransition>
         )
        
    }
}
export default Album;