import Mqtt from 'mqtt';

window.mq = {
  client: null,
  value: "",
  callback: null,
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
    console.log("Message","" + message);

    this.value = "" + message;

    if(this.callback !== null) {
      this.callback("" + message);
    }
  },
  subscribe(topic, callback) {
    this.callback = callback;

    this.client.subscribe( topic, {
      qos: 1
    });
  },
  publish(topic, data) {
    this.client.publish( topic, "" + data, function() {
      console.log("Published...");
    })
  }
}

window.mq.init();
