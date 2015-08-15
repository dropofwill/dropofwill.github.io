---
title: Initial thoughts for an MPD project
date: 2015-02-05 21:30 UTC
tags: LinuxDev, BizLeg, Ruby

---

For my Software Development in Linux class we are making one large project over the course of the class and then packaging it up for distribution at the end (probably Debian, RPM, and AUR).  This is a little bit of a paradigm shift for me personally, as for most of my projects distribution means pushing to a Heroku instance, so I've had to brain storm some new non-web-based projects. I've come up with two basic trains of thought either a better time-tracking/Freshbooks integration for taskwarrior (the current ones are all bare-bones) or any number of music/analytics ideas for the music players, specifically MPD.

For now I've decided to just review MPD, its current state, and what options are available to me in terms of wrappers (preferably Ruby wrappers, my scripting language of choice). The goal here is to just establish what the MPD landscape looks like so that I can effectively scope an 11-12 week project.

## The Music Player Daemon

First off it's important to establish what MPD is and isn't. It is a music player that works with a server-client architecture. It plays music, organizes playlists, and maintains a database of music. What it isn't is a client to play with, you need anyone of many clients to do this from ncurses-command line based players to GUI players that resemble iTunes. In this way it does one thing well and very efficiently, which is why I've decided to target it as the home for any music-based apps I want to create.

So where to start? There is extensive documentation of the C++ inner workings of [MPD here](http://www.musicpd.org/doc/user/). One important part of any integration with other music programs is playlist formats, MPD supports [`embcue`, `m3u`, `extm3u`, `pls`, and `xspf`](http://www.musicpd.org/doc/user/playlist_plugins.html) through a plugin system. It uses m3u by default, which is an extremely simple format consisting of only the time in seconds, the artist, the name, and the file path.

~~~
#EXTM3U

#EXTINF:123, Sample artist - Sample title
~/music/sample_artist/sample_song.mp3
~~~

This is nice from a readability standpoint, but there is problem, it hard codes all the file paths, which makes it hard to port from one platform to another. That's one thing that `.xspf` [tries to remedy.](http://xspf.org/xspf-v1.html), it uses a unique identifier (mbid from MusicBrainz for example) to resolve different file locations to the same unique identifier, here's a basic example file:

~~~
<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
  <trackList>
    <track>
      <title>Song Title</title>
      <identifier>http://musicbrainz.org/track/7fe96b15-5608-430e-ad25-77a01353c5d9.html</identifier>
      <location>music/foo.mp3</location>
      <location>alternate/music/foo.mp3</location>
    </track>
  </trackList>
</playlist>
~~~

So what libraries are already out there to further investigate?

### Ruby Libraries

[Spfy](https://github.com/marcransome/Spfy) - a Ruby Xspf parser (last commit 03/2014)

[Xspf](https://rubygems.org/gems/xspf/versions/0.4.1.1) - a Ruby Xspf parser (last commit 04/2007), source code forge is down, so this one is fairly rusty.

Since the .xspf spec is simple, well formed XML, is using one of these Ruby wrappers necessary? Or could I just use the great, built in XML support?

[taglib-ruby](https://github.com/robinst/taglib-ruby) a wrapper around the C++ library [TagLib](https://github.com/taglib/taglib) - meta data manager for audio files (last commit 08/2014 & 02/2015 respectively)

[ruby-mpd](https://github.com/archSeer/ruby-mpd) a ruby wrapper around MPD, which itself was the fork librmpd (last commit 12/2014)

[mpd_client(https://github.com/mamantoha/mpd_client) a ruby wrapper around MPD, a port of the python-mpd library (last commit 12/2014)

### Other Stuff

[Soundiiz](http://soundiiz.com) is doing something similar to what I want to, though it seems to be completely web based and closed source, which is sad to see.

The web api's for [Spotify](https://developer.spotify.com/web-api/endpoint-reference/), [Echonest](http://developer.echonest.com), [Last.fm](http://www.last.fm/api/show/user.getTopTracks), [Grooveshark](http://www.last.fm/api/show/user.getTopTracks), [YouTube](https://developers.google.com/youtube/v3/docs/playlists), [Rdio](http://www.rdio.com/developers/docs/), [MusicBrainz](https://musicbrainz.org/doc/Beginners_Guide), and how to resolve content between them.
