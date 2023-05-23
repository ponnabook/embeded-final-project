#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <SoftwareSerial.h>

const char* ssid = "--------";
const char* password = "--------";
const char* mqtt_server = "broker.netpie.io";
const int mqtt_port = 1883;
const char* mqtt_Client = "------------------------";
const char* mqtt_username = "------------------------";
const char* mqtt_password = "------------------------";
SoftwareSerial mySerial = SoftwareSerial(D1, D2);

char msg[200];

WiFiClient espClient;
PubSubClient client(espClient);

void reconnect() {
  while(!client.connected()) {
    Serial.print("Attempting NETPIE2020 connection...");
    if(client.connect(mqtt_Client, mqtt_username, mqtt_password)) {
      Serial.println("NETPIE2020 connected");
      client.subscribe("@msg/request");
    }
    else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println("try again in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char *topic, byte *message, unsigned int length)
{
    Serial.print("Message arrived on topic: '");
    Serial.print(topic);
    Serial.print("'. Message: ");
    char messageTemp;

    for (int i = 0; i < length; i++)
    {
        Serial.print((char)message[i]);
        messageTemp = (char)message[i];
    }
    mySerial.write(messageTemp);
    Serial.println();
}

void readUART() {
  String received = "";
  if (mySerial.available()) {
    Serial.print("Message received from UART: ");
    received = mySerial.readString();
    received.toCharArray(msg, (received.length() + 1));
    client.publish("@msg/temp",msg);
    Serial.println(received);
  }
}

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
  Serial.println("Starting...");

  if (WiFi.begin(ssid, password)) {
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.print(".");
    }
  }

  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
  if(!client.connected()) {
    reconnect();
  }
  client.loop();
  readUART();
}
