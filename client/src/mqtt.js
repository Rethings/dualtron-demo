import Mqtt from 'mqtt';

window.mq = {
  client: null,
  values: [],
  callbacks: [],
  init() {
    this.client = Mqtt.connect( 'mqtts://mq.meeo.xyz', {
      username: 'jms-vt0git1',
      password: 'user_ri99kRC3V5GoXKsC',
      clientId: 'web_' + Math.random().toString( 16 ).substr( 2, 8 ),
      reconnectPeriod: 5000,
    })
    this.client.on( 'connect', this.connectCallback.bind(this));
    this.client.on( 'reconnect', this.reconnectCallback.bind(this));
    this.client.on( 'offline', this.offlineCallback.bind(this));
    this.client.on( 'error', this.errorCallback.bind(this));
    this.client.on('message', this.newMessageCallback.bind(this));
  },
  connectCallback() {
    console.log('Connected...');
  },
  reconnectCallback() {
    console.log('Reconnecting...');
  },
  offlineCallback() {
    console.log('Offline...');
  },
  errorCallback( err ) {
    console.log('Error...', err);
  },
  newMessageCallback(topic, message) {
    this.values[topic] = "" + message;
    if ( Array.isArray( this.callbacks[topic] ) ) {
      this.callbacks[topic].forEach( function ( cb ) {
        if ( typeof cb === "function" )
          cb( "" + message )
      } )
    }
  },
  subscribe(topic, callback) {
    if ( !Array.isArray( this.callbacks[topic] ) ) {
      this.callbacks[topic] = []
      this.client.subscribe( topic, {
        qos: 1,
      } )
    }
    this.callbacks[topic].push( callback )

    if ( typeof this.values[topic] !== "undefined" ) {
      callback( this.values[topic] )
    }
  },
  publish(topic, data) {
    this.client.publish( topic, "" + data, {
      qos   : 1,
      retain: true
    } )
  }
}

window.mq.init();
