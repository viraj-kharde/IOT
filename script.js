const DATA = [
{id:'q1',q:'Q1',marks:4,title:'Explain the Functional Blocks of IoT Ecosystem with Neat Diagram',
sections:[
  {label:'Definition',points:['The IoT ecosystem consists of different functional blocks that work together to collect, process, transmit, and use data from connected devices.']},
  {label:'Neat Diagram',diagram:`<span class="hl">Devices/Sensors</span>
      <span class="arrow">↓</span>
<span class="hl">Connectivity</span> (Wi-Fi, Bluetooth, ZigBee, Cellular)
      <span class="arrow">↓</span>
<span class="hl">Data Processing</span>
      <span class="arrow">↓</span>
<span class="hl">Cloud / Storage</span>
      <span class="arrow">↓</span>
<span class="hl">Application Services</span>
      <span class="arrow">↓</span>
<span class="hl">Users</span>
<span style="color:var(--text3)">Security & Management span across all layers</span>`},
  {label:'1. Devices (Sensors & Actuators)',points:['Sensors collect data from the environment (temperature, humidity, motion).','Actuators perform physical actions based on commands (motors, LEDs, relays).','Example: DHT11 temperature sensor, servo motor.']},
  {label:'2. Connectivity',points:['Connects devices to internet or local network.','Technologies: Wi-Fi, Bluetooth, ZigBee, Cellular, LoRa, NFC.','Transfers data between devices and the cloud.']},
  {label:'3. Data Processing',points:['Received raw data is processed and analyzed.','Removes unwanted or duplicate data.','Converts raw values into meaningful information.']},
  {label:'4. Cloud / Storage',points:['Stores huge amounts of IoT data remotely.','Provides remote access from anywhere.','Supports analytics, reporting, and ML models.']},
  {label:'5. Application Layer',points:['Provides useful services to end users.','Displays information via mobile apps or web dashboards.','Example: Smart home app to control lights and locks.']},
  {label:'6. Security & Management',points:['Protects devices and data using encryption and authentication.','Manages firmware updates and system performance.','Prevents unauthorized access to devices and data.']}
],tip:'Remember 7 blocks: Devices → Connectivity → Processing → Cloud → Application → Security → Management'},

{id:'q2',q:'Q2',marks:7,title:'Describe Communication Models in IoT and Their Applications',
sections:[
  {label:'Introduction',points:['Communication models define HOW IoT devices exchange information. There are 4 main models used in IoT.']},
  {label:'1. Request-Response Model',points:['Client sends a request to server; server responds with data.','Stateless — each request is completely independent.','Simple to implement and widely used for web-based IoT.','Protocol: HTTP/REST.','Example: Mobile app requests current temperature from smart home server.']},
  {label:'2. Publish-Subscribe Model',points:['Publisher sends data to a broker (middleman), not directly to receiver.','Subscriber registers interest in a topic and receives data from broker.','Decoupled architecture — publisher and subscriber are independent.','Protocol: MQTT.','Example: Temperature sensor publishes readings; mobile app subscribes to receive real-time updates.']},
  {label:'3. Push-Pull Model',points:['Producers push data into a shared queue/buffer.','Consumers pull data from queue when they are ready to process.','Good for load balancing — multiple consumers can process data in parallel.','Example: Multiple traffic cameras push frames into queue; AI servers pull and analyze.']},
  {label:'4. Exclusive Pair Model',points:['Full-duplex, bidirectional, dedicated connection between two devices.','Connection stays open (persistent) — unlike stateless HTTP.','Protocol: WebSocket.','Example: Real-time live dashboard monitoring sensor values continuously.']},
  {label:'Applications',points:['Request-Response → Smart home REST APIs, weather data fetching.','Publish-Subscribe → Industrial IoT, smart meters, healthcare monitoring.','Push-Pull → Traffic monitoring, log processing, data analytics.','Exclusive Pair → Real-time health dashboards, live sensor monitoring.']}
],tip:'4 Models: Request-Response (HTTP), Pub-Sub (MQTT), Push-Pull (Queue), Exclusive Pair (WebSocket)'},

{id:'q3',q:'Q3',marks:4,title:'Discuss the Convergence of Technologies Enabling IoT',
sections:[
  {label:'What is Convergence?',points:['IoT is NOT a single technology. It is created by combining multiple technologies working together. This combining is called "convergence of technologies."']},
  {label:'Key Technologies That Converged',points:['Sensors & Actuators: Collect data from environment; perform physical actions.','Wireless Communication: Wi-Fi, Bluetooth, ZigBee, RFID enable data transfer without wires.','Internet Protocol (IPv6): Provides billions of unique IP addresses needed for IoT devices.','Cloud Computing: Stores and processes huge IoT data remotely.','Big Data Analytics: Finds patterns and trends from massive IoT data.','Embedded Systems: Small computers (Arduino, Raspberry Pi) placed inside IoT devices.','Artificial Intelligence: Enables smart decisions, predictions, and automation.','Mobile Computing: Smartphones act as IoT controllers and user interfaces.']},
  {label:'Result of Convergence',points:['Smart Homes, Smart Cities, Wearables, Industrial IoT — all made possible because these technologies merged into one integrated system.']}
],tip:'IoT = Sensors + WiFi + IPv6 + Cloud + AI + Embedded Systems + Mobile all combined'},

{id:'q4',q:'Q4',marks:5,title:'Explain the Evolution of IoT with Suitable Examples',
sections:[
  {label:'Introduction',points:['IoT evolved gradually from simple standalone machines to intelligent connected systems over decades.']},
  {label:'Stage 1 — Standalone Devices (Pre-1990s)',points:['Devices operated independently with no internet connectivity.','Example: Traditional manual thermometer.']},
  {label:'Stage 2 — Networked Devices (1990s)',points:['Devices connected through local area networks (LAN).','First internet-connected device: Coca-Cola vending machine at Carnegie Mellon (1982).','Kevin Ashton coined "Internet of Things" in 1999.']},
  {label:'Stage 3 — M2M Communication (2000s)',points:['Machines started communicating automatically without human intervention.','RFID technology connected physical objects to computers.','Example: ATM machine communication systems.']},
  {label:'Stage 4 — Internet-Connected Devices (2010s)',points:['Devices directly connected to the internet.','Cloud platforms enabled storage and remote access.','Smartphones became IoT controllers.','Example: Smart CCTV cameras, Google Nest Smart Home, Fitbit.']},
  {label:'Stage 5 — AI-Enabled IoT (2020s)',points:['AI and Machine Learning integrated with IoT = AIoT.','5G enables faster and more reliable IoT communication.','Example: Self-driving vehicles, smart assistants (Alexa, Google Home).']}
],tip:'Timeline: Standalone → Networked → M2M → Internet-Connected → Cloud IoT → AIoT'},

{id:'q5',q:'Q5',marks:5,title:'Illustrate the Physical Design of IoT with Suitable Example',
sections:[
  {label:'Definition',points:['Physical design of IoT refers to the actual hardware components and their interactions in an IoT system — the real "physical" things you can touch.']},
  {label:'Key Hardware Components',points:['Sensors: Detect environmental changes and convert physical parameters into electrical signals. Examples: Temperature (DHT11), Humidity, Motion (PIR).','Actuators: Convert commands into physical actions. Examples: Motor, Relay, LED, buzzer.','Embedded Controller: Brain of the device. Processes sensor data and sends commands. Examples: Arduino Uno, Raspberry Pi, ESP32, ESP8266.','Communication Interface: Connects device to network. Examples: Wi-Fi module, Bluetooth chip, ZigBee, GSM.','Power Supply: Battery, USB power, or direct current to run the device.','Memory: Stores program code and temporary data. Examples: Flash memory, SD card.']},
  {label:'Example: Smart Temperature Monitor',diagram:`<span class="hl">DHT11 Sensor</span> (senses temperature)
      <span class="arrow">↓</span>
<span class="hl">ESP32</span> (microcontroller processes data)
      <span class="arrow">↓</span>
<span class="hl">Wi-Fi Module</span> (sends data to internet)
      <span class="arrow">↓</span>
<span class="hl">Cloud Server</span> (stores data)
      <span class="arrow">↓</span>
<span class="hl">Mobile App</span> (user views temp + gets alerts)`},
  {label:'Working of Example',points:['Sensor measures room temperature every 5 seconds.','ESP32 receives sensor value and checks threshold.','Data sent to cloud via Wi-Fi.','User views temperature on mobile app dashboard.','If temp > 30°C, alert notification sent to user.']}
],tip:'Physical design = actual hardware. Flow: Sensor → Controller → Comm Module → Internet → User'},

{id:'q6',q:'Q6',marks:5,title:'Discuss IoT Challenges Related to Security, Scalability and Interoperability',
sections:[
  {label:'1. Security Challenges',points:['Unauthorized Access: Hackers may access IoT devices and steal sensitive data.','Data Theft: Data transmitted over networks can be intercepted (man-in-middle attacks).','Malware Attacks: IoT devices can be infected (e.g., Mirai Botnet 2016 used IoT devices to crash websites).','Weak Authentication: Many devices use default/simple passwords that are never changed.','Firmware Vulnerabilities: Devices rarely receive security patches.','Solutions: Strong passwords, TLS/SSL encryption, multi-factor authentication, regular updates.']},
  {label:'2. Scalability Challenges',points:['Large Number of Devices: Managing billions of IoT devices simultaneously is very difficult.','Huge Data Generation: Devices generate massive continuous data needing large storage.','Network Congestion: More devices = more network traffic = communication delays.','Traditional databases not designed for IoT-scale real-time data.','Solutions: Cloud computing, Edge computing (process near device), efficient protocols like MQTT.']},
  {label:'3. Interoperability Challenges',points:['Different Standards: Devices from different manufacturers use incompatible standards.','Protocol Differences: Zigbee, Z-Wave, WiFi, Bluetooth — devices may not understand each other.','Data Format Issues: Different JSON/XML/binary formats create compatibility problems.','Example: Samsung smart bulb may not work directly with Google Home.','Solutions: Open standards (MQTT, CoAP), IoT middleware platforms, common REST APIs, IPv6.']}
],tip:'3 Challenges: Security (attacks/hacks), Scalability (too many devices), Interoperability (devices can\'t talk)'},

{id:'q7',q:'Q7',marks:7,title:'Explain IoT Protocols and Compare HTTP, MQTT and CoAP',
sections:[
  {label:'Why Special Protocols for IoT?',points:['Standard HTTP is too heavy for IoT devices with limited power and bandwidth. So lightweight specialized protocols are used.']},
  {label:'1. HTTP (HyperText Transfer Protocol)',points:['Communication: Request-Response model.','Transport: TCP (reliable, connection-oriented).','Bandwidth: High — large message headers, big overhead.','Power: High consumption, not ideal for battery devices.','Port: 80 (HTTP), 443 (HTTPS).','Use: Web-based IoT dashboards, REST APIs.']},
  {label:'2. MQTT (Message Queuing Telemetry Transport)',points:['Communication: Publish-Subscribe model via broker.','Transport: TCP (reliable).','Bandwidth: Very low — minimum 2-byte header.','QoS Levels: 0 (at most once), 1 (at least once), 2 (exactly once).','Port: 1883, 8883 (secure).','Use: Smart homes, industrial IoT, healthcare, smart meters.']},
  {label:'3. CoAP (Constrained Application Protocol)',points:['Communication: Request-Response (like HTTP but lightweight).','Transport: UDP (faster, less reliable).','Bandwidth: Extremely low — designed for constrained devices.','Supports multicast — one message to many devices simultaneously.','Port: 5683.','Use: Smart energy meters, embedded microcontrollers, wearables.']},
  {label:'Comparison Table',table:{headers:['Feature','HTTP','MQTT','CoAP'],rows:[['Model','Request-Response','Pub-Sub','Request-Response'],['Transport','TCP','TCP','UDP'],['Bandwidth','High','Low','Very Low'],['Power','High','Low','Very Low'],['Speed','Moderate','Fast','Very Fast'],['IoT Suitability','Low','High','High']]}},
  {label:'Conclusion',points:['MQTT is best for real-time IoT with reliable TCP. CoAP is best for extremely constrained devices using UDP.']}
],tip:'Quick: HTTP=web(heavy), MQTT=pub-sub lightweight TCP, CoAP=ultra-light UDP for tiny devices'},

{id:'q8',q:'Q8',marks:7,title:'Explain IoT-Enabled Technologies: A) Wireless Sensor Networks  B) Cloud Computing',
sections:[
  {label:'Part A: Wireless Sensor Networks (WSN)',points:['Definition: A WSN is a network of small, low-power sensor nodes placed in an area to sense data and communicate wirelessly.','Components: Sensor Nodes (sensor + processor + memory + battery), Sink Node (collects data), Gateway (connects WSN to internet), Communication Network (wireless links).','Characteristics: Self-organizing, low power, distributed operation, multi-hop communication.','Protocols: ZigBee, LoRa, 6LoWPAN, Bluetooth Low Energy.']},
  {label:'WSN Architecture',diagram:`<span class="hl">Sensor Nodes</span> (field devices collecting data)
      <span class="arrow">↓ wireless</span>
<span class="hl">Sink Node</span> (collects from nearby sensors)
      <span class="arrow">↓</span>
<span class="hl">Gateway</span> (connects WSN to internet)
      <span class="arrow">↓</span>
<span class="hl">Internet / Cloud</span>`},
  {label:'WSN Applications',points:['Smart Agriculture: Soil moisture, temperature, crop health monitoring.','Military Surveillance: Detect enemy movement without human presence.','Environmental Monitoring: Detect floods, earthquakes, forest fires.','Healthcare: Remote patient vital sign monitoring.','Smart Buildings: Occupancy detection, HVAC automation.']},
  {label:'Part B: Cloud Computing in IoT',points:['Definition: Provides on-demand computing resources (storage, processing, software) over the internet.','Why IoT needs cloud: IoT generates massive continuous data that cannot be stored or processed locally.','Service Models: IaaS (Virtual servers — AWS EC2), PaaS (Platform — AWS IoT Core), SaaS (Apps — Google Analytics).','Examples: AWS IoT Core, Microsoft Azure IoT Hub, Google Cloud IoT.','Benefits: Scalable storage, remote access, real-time analytics, global connectivity.','Challenges: Internet dependency, latency, data privacy concerns.']},
  {label:'WSN + Cloud Together',points:['WSN nodes collect field data → Gateway sends to cloud → Cloud stores and analyzes → User sees results on dashboard. Edge Computing can be added to process data near the WSN before sending to cloud (reduces latency).']}
],tip:'WSN = sensor network in field collecting data. Cloud = storage + processing of that data online.'},

{id:'q9',q:'Q9',marks:4,title:'Define IoT and Explain its Importance in Real-World Problem Solving',
sections:[
  {label:'Definition of IoT',points:['Internet of Things (IoT) is a system of interrelated computing devices, sensors, and objects connected to the internet that can collect, send, and receive data without human-to-human or human-computer interaction.','Term coined by: Kevin Ashton (1999), Auto-ID Center, MIT.']},
  {label:'Importance in Real-World Problem Solving',points:['Smart Healthcare: Wearables monitor patient vitals in real-time. Alerts doctors automatically when readings are abnormal. Example: Smartwatch detecting irregular heartbeat.','Smart Agriculture: Soil moisture sensors auto-irrigate fields, reducing water waste by up to 50%. Drones monitor crop health across large farms.','Smart Cities: IoT manages traffic lights based on real-time traffic, reducing congestion. Smart street lights turn ON/OFF based on motion — saving electricity.','Industrial IoT (IIoT): Machines predict their own failures before breaking down (predictive maintenance) — saves huge repair and downtime costs.','Smart Homes: Automate appliances (AC, lights, locks) for convenience, energy saving, and remote control.','Disaster Management: Flood/earthquake sensors send early alerts to authorities before damage occurs.']}
],tip:'IoT solves: Healthcare + Agriculture + Cities + Industry + Homes + Disasters'},

{id:'q10',q:'Q10',marks:4,title:'Explain the Concept of "Things" in IoT with Suitable Examples',
sections:[
  {label:'What are "Things" in IoT?',points:['"Things" are physical objects embedded with sensors, software, and connectivity to collect and exchange data over the internet.','A Thing can sense the environment, process data, and communicate wirelessly.','Each Thing has a unique identity — IP address, RFID tag, or QR code.']},
  {label:'Properties of a Thing',points:['Unique Identification: Each device identified globally (IP/RFID/MAC address).','Sensing Capability: Can detect temperature, pressure, motion, humidity, light, etc.','Communication Capability: Sends and receives data wirelessly.','Processing Capability: Can run small programs or logic locally.','Actuation Capability: Can trigger physical actions (turn on/off, move, alert).']},
  {label:'Categories with Examples',points:['Wearables: Smartwatch (heart rate, steps), fitness band, smart glasses.','Home Appliances: Smart AC, smart fridge, smart locks, smart TV.','Industrial Machines: CNC machines with vibration sensors, smart energy meters.','Vehicles: Connected cars, GPS asset trackers, smart traffic signals.','Environmental Sensors: Air quality monitors, weather stations, flood sensors.','Medical Devices: ECG monitor, insulin pump, smart pill bottle, remote patient monitor.']},
  {label:'Flow of a Thing',diagram:`<span class="hl">Physical Thing</span> (smart bulb, sensor, watch)
      <span class="arrow">↓ sense / generate data</span>
<span class="hl">Internet</span>
      <span class="arrow">↓</span>
<span class="hl">Cloud Server</span>
      <span class="arrow">↓</span>
<span class="hl">User App / Dashboard</span>`}
],tip:'Thing = physical object with unique ID + sense + communicate. Examples: bulb, fridge, watch, sensor'},

{id:'q11',q:'Q11',marks:5,title:'Demonstrate the Working of Publish-Subscribe Communication Model using Diagram',
sections:[
  {label:'Introduction',points:['In Publish-Subscribe model, the sender (Publisher) does NOT send directly to receiver (Subscriber). A middleman called the Broker handles all communication. They are decoupled — they do not need to know each other.']},
  {label:'Architecture Diagram',diagram:`<span class="hl">Publisher</span> (Temperature Sensor)
      <span class="arrow">↓ publishes to topic "home/temp"</span>
  ┌─────────────────┐
  │   <span class="hl">MQTT Broker</span>     │  (e.g. Mosquitto)
  └─────────────────┘
      <span class="arrow">↙          ↘</span>
<span class="hl">Subscriber 1</span>    <span class="hl">Subscriber 2</span>
(Mobile App)    (AC Controller)`},
  {label:'Key Components',points:['Publisher: Device/sensor that generates data and sends it to broker under a topic.','Broker: Central server that receives all messages and routes them to correct subscribers. Example: Mosquitto, HiveMQ, AWS IoT.','Subscriber: Device/app that registers interest in a topic and receives data from broker.','Topic: Hierarchical address for messages. Example: "home/bedroom/temperature", "factory/machine1/status".']},
  {label:'Step-by-Step Working',points:['Step 1: Subscriber connects to broker and says "I want data on topic X".','Step 2: Publisher sends data to broker under topic X.','Step 3: Broker checks who is subscribed to topic X.','Step 4: Broker immediately pushes data to all matching subscribers.','Step 5: Subscriber receives and processes the data.']},
  {label:'Application: Smart Home',points:['Temperature sensor (Publisher) publishes to "home/temp" every 10 seconds.','Mobile app and AC unit (Subscribers) both subscribed to "home/temp".','When temp > 28°C, AC subscriber receives the value and automatically turns ON.',  'User\'s app also shows real-time temperature on the dashboard.']}
],tip:'Pub-Sub: Publisher → Broker → Subscriber. MQTT is protocol. Topic is channel/address.'},

{id:'q12',q:'Q12',marks:5,title:'Illustrate REST Based Communication API with Suitable IoT System',
sections:[
  {label:'What is REST?',points:['REST = Representational State Transfer. An architectural style for designing APIs using standard HTTP methods.','Stateless: Each request carries all necessary info — server does not remember previous requests.','Platform-independent: Works with any language, device, or OS.']},
  {label:'REST Principles',points:['Client-Server Architecture: Client (app) and Server (IoT backend) are separated.','Stateless: No session stored on server between requests.','Cacheable: Responses can be cached to improve performance.','Uniform Interface: Standard HTTP methods and resource-based URLs (endpoints).','Resource-Based: Everything is a URL resource. Example: /sensors/temperature, /devices/fan.']},
  {label:'HTTP Methods Used in IoT REST',points:['GET /sensors/temp → Read current temperature value from sensor.','POST /actuators/fan → Send command to turn ON the fan.','PUT /settings/threshold → Update temperature alert threshold.','DELETE /logs/old → Remove old sensor log entries from database.']},
  {label:'IoT System: Smart Weather Station',diagram:`<span class="hl">Weather Sensors</span> (Temp, Humidity, Rain)
      <span class="arrow">↓</span>
<span class="hl">Raspberry Pi</span> (runs REST API server)
      <span class="arrow">↓ HTTP GET/POST</span>
<span class="hl">REST API Server</span>
      <span class="arrow">↓</span>
<span class="hl">Database</span> (stores sensor readings)
      <span class="arrow">↓</span>
<span class="hl">Mobile App / Web Dashboard</span>`},
  {label:'Working',points:['Sensors collect temperature, humidity, rain data every minute.','Mobile app sends GET /weather/temperature to Raspberry Pi REST server.','Server returns JSON: {"temperature": 28.5, "unit": "Celsius"}.','User can send POST /alerts/set to configure notifications.','If temperature > 35°C, app receives alert automatically.']}
],tip:'REST uses HTTP. 4 methods: GET(read), POST(create), PUT(update), DELETE(delete)'},

{id:'q13',q:'Q13',marks:5,title:'Classify the Four Pillars of IoT',
sections:[
  {label:'Introduction',points:['The four pillars of IoT are the fundamental building blocks that support the entire IoT ecosystem. Without all four, IoT cannot function effectively.']},
  {label:'Pillar 1 — People',points:['Users who interact with IoT systems and make decisions using collected data.','Examples: Homeowners controlling smart devices, doctors monitoring patients, farmers getting crop alerts.','Importance: Humans define requirements, interpret insights, and take action based on IoT data.']},
  {label:'Pillar 2 — Process',points:['Set of rules, workflows, and procedures defining how data is collected, handled, and acted upon.','Ensures efficient, automated operation of the IoT system.','Examples: Auto-irrigation when soil moisture falls below threshold. Auto-alert when machine temperature exceeds limit.','Importance: Without defined processes, IoT data has no actionable use.']},
  {label:'Pillar 3 — Data',points:['Information collected by sensors and devices — the fuel of IoT.','Examples: Temperature readings, humidity levels, heart rate values, GPS coordinates.','Data flows: Collection → Processing → Storage → Analysis → Decision.','Importance: Data generates insights that drive automation and smart decision-making.']},
  {label:'Pillar 4 — Things',points:['Physical devices connected to the internet that collect and transmit data.','Examples: Temperature sensors, smart watches, smart bulbs, CCTV cameras, smart meters.','Characteristics: Unique ID, sensing, communication, processing, actuation.','Importance: Without "Things", there is no data — they are the source of all IoT information.']},
  {label:'How All 4 Pillars Work Together',points:['Things collect data → Processes define what to do with it → Data is stored and analyzed → People receive insights and take action. All four are interdependent.']}
],tip:'4 Pillars: People (users) + Process (rules) + Data (information) + Things (devices)'},

{id:'q14',q:'Q14',marks:4,title:'Demonstrate the Working of Push-Pull Communication Model using Diagram',
sections:[
  {label:'Introduction',points:['The Push-Pull model is used when producers generate data and put it into a shared queue, and consumers retrieve and process data from the queue at their own pace. Producers and consumers work independently.']},
  {label:'Architecture Diagram',diagram:`<span class="hl">Producer 1</span> (Sensor A) ──┐
<span class="hl">Producer 2</span> (Sensor B) ──┼──→  <span class="hl">Message Queue</span>  ──→ <span class="hl">Consumer 1</span>
<span class="hl">Producer 3</span> (Sensor C) ──┘              │──→ <span class="hl">Consumer 2</span>
                                          └──→ <span class="hl">Consumer 3</span>`},
  {label:'Key Components',points:['Producer (Push): Device/sensor that generates data and pushes it into the queue.','Queue/Buffer: Temporary storage that holds messages in order (FIFO — First In First Out) until consumed.','Consumer (Pull): Application or server that pulls and processes messages from the queue at its own speed.','Load Balancer: Distributes messages among multiple consumers to prevent overload.']},
  {label:'Step-by-Step Working',points:['Step 1: Multiple sensors (producers) continuously push data into the shared message queue.','Step 2: Queue stores data in FIFO order until a consumer is available.','Step 3: Consumer 1 pulls one message, processes it (analyzes data).','Step 4: Consumer 2 pulls the next message simultaneously.','Step 5: If one consumer is busy, other consumers handle remaining messages — load balancing.']},
  {label:'Difference from Pub-Sub',points:['In Pub-Sub: One message goes to ALL subscribers (broadcast/one-to-many).','In Push-Pull: Each message goes to ONLY ONE consumer (work distribution/one-to-one).']},
  {label:'Application: Smart Traffic Monitoring',points:['Traffic cameras (Producers) push video frames and vehicle count data into queue.','Multiple AI processing servers (Consumers) pull frames and analyze vehicle density.','Result: Traffic light timings adjusted automatically based on density — reducing congestion.']}
],tip:'Push-Pull: Producers push to queue → Consumers pull. Like a task list. Each task handled by one worker.'},

{id:'q15',q:'Q15',marks:7,title:'Illustrate any Communication API with Suitable IoT System',
sections:[
  {label:'Chosen API: MQTT (Message Queuing Telemetry Transport)',points:['MQTT is a lightweight, Publish-Subscribe messaging protocol designed specifically for IoT.','Standard: OASIS. Built on TCP/IP. Port: 1883 (plain), 8883 (TLS secured).','Designed for low-bandwidth, high-latency, unreliable networks.']},
  {label:'MQTT Architecture',diagram:`<span class="hl">Publisher</span> (Soil Moisture Sensor)
      <span class="arrow">↓ publish("farm/soil/moisture", 42%)</span>
  ┌──────────────────────┐
  │    <span class="hl">MQTT Broker</span>        │  (Mosquitto / HiveMQ)
  │  topics management   │
  └──────────────────────┘
      <span class="arrow">↙              ↘</span>
<span class="hl">Subscriber 1</span>      <span class="hl">Subscriber 2</span>
(Farmer's App)    (Irrigation Controller)`},
  {label:'Core Components',points:['Publisher: Device/sensor that generates data and sends it to broker under a topic string.','Broker: Central server managing all message routing. Examples: Mosquitto (open source), HiveMQ, AWS IoT Core.','Subscriber: Device/app that subscribes to topic and automatically receives new messages.','Topic: Hierarchical string acting as address. Example: "farm/field1/moisture", "factory/machine1/temp".']},
  {label:'MQTT Message Structure',points:['Fixed Header: 2 bytes minimum — message type and control flags.','Variable Header: Contains topic name and packet identifier.','Payload: Actual data — sensor value, command, JSON object.','This tiny size (vs 8KB+ HTTP header) makes MQTT 100x lighter for IoT.']},
  {label:'Quality of Service (QoS) Levels',points:['QoS 0 — "Fire and Forget": Message sent once, no acknowledgement. May be lost. Use for non-critical data.','QoS 1 — "At Least Once": Message sent until broker acknowledges. May duplicate. Use for important data.','QoS 2 — "Exactly Once": Four-step handshake guarantees delivery without duplicates. Use for critical commands.']},
  {label:'Complete IoT Application: Smart Agriculture',points:['Soil moisture sensor (Publisher) publishes moisture % to "farm/field1/soil" every 5 min.','MQTT Broker (Mosquitto) receives and routes messages.','Farmer\'s mobile app (Subscriber 1) subscribed to "farm/field1/soil" — shows real-time moisture level.','Irrigation controller (Subscriber 2) subscribed to same topic — auto-turns ON pump when moisture < 30%.','Alert system (Subscriber 3) subscribed to "farm/#" — sends SMS alert for any abnormal readings.']},
  {label:'Why MQTT over HTTP for IoT?',points:['MQTT header = 2 bytes minimum vs HTTP header = 8KB+ — 4000x smaller.','MQTT is event-driven (data pushed when available) vs HTTP needs constant polling.','MQTT built-in QoS ensures reliability. HTTP has no QoS.','MQTT works on 2G/slow networks. HTTP requires stable connection.','MQTT broker fans out to thousands of subscribers simultaneously.']}
],tip:'MQTT: Publisher→Broker→Subscriber. Topic=address. QoS=reliability. 2-byte header vs 8KB HTTP.'}
];

let allExpanded = false;
let activeFilter = 'all';

function buildCards() {
  const list = document.getElementById('qlist');
  list.innerHTML = '';
  DATA.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = item.id;
    card.dataset.marks = item.marks;
    card.style.animationDelay = (i * 0.05) + 's';
    card.innerHTML = buildCardHTML(item);
    list.appendChild(card);
  });
}

function buildCardHTML(item) {
  const sectionsHTML = item.sections.map(s => {
    let inner = '';
    if (s.diagram) {
      inner = `<div class="diagram-box">${s.diagram}</div>`;
    } else if (s.table) {
      inner = buildTable(s.table);
    } else {
      inner = `<ul class="points-list">${s.points.map(p => `<li><div class="point-dot"></div><span>${p}</span></li>`).join('')}</ul>`;
    }
    return `<div class="section"><div class="section-label">${s.label}</div>${inner}</div>`;
  }).join('');

  return `
    <div class="q-header" onclick="toggleCard('${item.id}')">
      <span class="q-num">${item.q}</span>
      <span class="q-title-text">${item.title}</span>
      <span class="marks-pill">${item.marks} Marks</span>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-body">
      <div class="q-body-inner">
        ${sectionsHTML}
        <div class="tip-box"><strong>Quick Tip:</strong> ${item.tip}</div>
      </div>
    </div>`;
}

function buildTable(t) {
  const colorMap = {HTTP:'tag-h', MQTT:'tag-m', CoAP:'tag-c'};
  return `<table class="comp-table">
    <thead><tr>${t.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${t.rows.map(r=>`<tr>${r.map((c,i)=>{
      const cls = i>0 ? (colorMap[c]||'') : '';
      return `<td class="${cls}">${c}</td>`;
    }).join('')}</tr>`).join('')}</tbody>
  </table>`;
}

function toggleCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle('open');
  updateCount();
}

function toggleAll() {
  allExpanded = !allExpanded;
  document.querySelectorAll('.q-card:not(.hidden)').forEach(c => {
    c.classList.toggle('open', allExpanded);
  });
  document.querySelector('.btn-expand').textContent = allExpanded ? 'Collapse All' : 'Expand All';
}

function filterByMarks(marks, btn) {
  activeFilter = marks;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.q-card').forEach(c => {
    if (marks === 'all' || +c.dataset.marks === marks) c.classList.remove('hidden');
    else c.classList.add('hidden');
  });
  updateCount();
}

function doSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  document.querySelectorAll('.q-card').forEach(card => {
    const marks = +card.dataset.marks;
    const passFilter = activeFilter === 'all' || marks === activeFilter;
    if (!passFilter) { card.classList.add('hidden'); return; }
    const text = card.textContent.toLowerCase();
    card.classList.toggle('hidden', q !== '' && !text.includes(q));
    if (q && text.includes(q)) card.classList.add('open');
  });
  updateCount();
}

function updateCount() {
  const vis = document.querySelectorAll('.q-card:not(.hidden)').length;
  document.getElementById('visCount').textContent = vis;
}

function jumpTo(id) {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({behavior:'smooth', block:'start'}); el.classList.add('open'); }
}

// Progress bar
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  document.getElementById('readProgress').style.width = (window.scrollY / total * 100) + '%';
  const btn = document.getElementById('backTop');
  window.scrollY > 400 ? btn.classList.add('show') : btn.classList.remove('show');
});

// Intersection observer for card animations
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.style.animationPlayState = 'running'; });
}, {threshold: 0.05});

buildCards();
document.querySelectorAll('.q-card').forEach(c => {
  c.style.animationPlayState = 'paused';
  obs.observe(c);
});