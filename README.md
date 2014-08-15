![Bitly](bitly.png) bip-pod-Bitly
=======

<a href="http://bitly.com">Bitly</a> pod for [bipio](https://bip.io).  

## Installation

From bipio server root directory

    npm install bip-pod-Bitly
    ./tools/pod-install.js -a Bitly [-u optional account-wide channel auto install]

The pod-install script is a server script which will register the pod with the bipio server and add sparse
configuration to your NODE_ENV environment config ('default.json', staging or production)
keyed to 'Bitly', based on the default config in the pod constructor.  It will also move the
pod icon into the server cdn

Manually restart the bipio server at your convenience.

## Documentation

[Bipio Docs](https://bip.io/docs/pods/bitly)

## License

BipIO is free for non-commercial use - [GPLv3](http://www.gnu.org/copyleft/gpl.html)

Our open source license is the appropriate option if you are creating an open source application under a license compatible with the GNU GPL license v3. 

Bipio may not be used for Commercial purposes by an entity who has not secured a Bipio Commercial OEM License.  To secure a Commercial OEM License for Bipio,
please [reach us](mailto:support.bip.io)


Copyright (c) 2010-2013  [Michael Pearson](https://github.com/mjpearson)
