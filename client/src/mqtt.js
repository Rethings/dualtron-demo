import Mqtt from 'mqtt';

window.mq = {
  client: null,
<<<<<<< HEAD
  value: "",
  callback: "",
=======
>>>>>>> 7e01434cc8dd069fc774943d9b49205b38d99143
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
<<<<<<< HEAD
    this.client.on('message', this.newMessageCallback.bind(this));
=======
>>>>>>> 7e01434cc8dd069fc774943d9b49205b38d99143
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
<<<<<<< HEAD
  newMessageCallback(topic, message) {
    console.log("Message","" + message);

    this.value = "" + message;
    this.callback("" + message);
  },
  subscribe(topic, callback) {
    this.callback = callback;

    this.client.subscribe( topic, {
      qos: 1
=======
  subscribe(topic) {
    this.client.subscribe( topic, function() {
      console.log("Subscribed...");
>>>>>>> 7e01434cc8dd069fc774943d9b49205b38d99143
    })
  },
  publish(topic, data) {
    this.client.publish( topic, "" + data, function() {
      console.log("Published...");
    })
  }
}

window.mq.init();
